import { createHmac, timingSafeEqual } from 'crypto'
import { cookies } from 'next/headers'

export const LUCKY_COOKIE = 'lucky_pass'

function gateSecret() {
  return process.env.LUCKY_GATE_SECRET || 'disco-fish-lucky-gate-v1'
}

export function expectedToken() {
  return createHmac('sha256', gateSecret()).update('passed').digest('hex')
}

export function passesGate() {
  const got = cookies().get(LUCKY_COOKIE)?.value
  if (!got) return false
  const expected = expectedToken()
  const actual = Buffer.from(got)
  const wanted = Buffer.from(expected)
  if (actual.length !== wanted.length) return false
  return timingSafeEqual(actual, wanted)
}

export function luckyCookieOptions() {
  return {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/lucky',
    maxAge: 60 * 60 * 12,
  }
}
