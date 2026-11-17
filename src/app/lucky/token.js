export const LUCKY_COOKIE = 'lucky_pass'
export const PASS_TTL_SECONDS = 10 * 60

const encoder = new TextEncoder()

function gateSecret() {
  return process.env.LUCKY_GATE_SECRET || 'disco-fish-lucky-gate-v1'
}

function hex(bytes) {
  return [...bytes].map((byte) => byte.toString(16).padStart(2, '0')).join('')
}

function safeEqual(left, right) {
  if (typeof left !== 'string' || typeof right !== 'string' || left.length !== right.length) {
    return false
  }
  let diff = 0
  for (let i = 0; i < left.length; i += 1) {
    diff |= left.charCodeAt(i) ^ right.charCodeAt(i)
  }
  return diff === 0
}

async function sign(payload) {
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(gateSecret()),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const mac = await crypto.subtle.sign('HMAC', key, encoder.encode(payload))
  return hex(new Uint8Array(mac))
}

export async function issuePass() {
  const nonce = hex(crypto.getRandomValues(new Uint8Array(16)))
  const exp = String(Date.now() + PASS_TTL_SECONDS * 1000)
  const payload = `${nonce}.${exp}`
  const sig = await sign(payload)
  return `${payload}.${sig}`
}

export async function passIsValid(cookieValue, presented) {
  if (!cookieValue || !presented || !safeEqual(cookieValue, presented)) return false
  const parts = cookieValue.split('.')
  if (parts.length !== 3) return false
  const [nonce, exp, sig] = parts
  if (!/^[0-9a-f]{32}$/.test(nonce) || !/^\d+$/.test(exp) || !/^[0-9a-f]{64}$/.test(sig)) {
    return false
  }
  const expected = await sign(`${nonce}.${exp}`)
  if (!safeEqual(sig, expected)) return false
  return Date.now() <= Number(exp)
}
