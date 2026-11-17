import { cookies } from 'next/headers'
import { LUCKY_COOKIE, PASS_TTL_SECONDS, passIsValid } from './token'

export { LUCKY_COOKIE }

export function luckyCookieOptions() {
  return {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/lucky',
    maxAge: PASS_TTL_SECONDS,
  }
}

export async function passesGate(presented) {
  const got = cookies().get(LUCKY_COOKIE)?.value
  return passIsValid(got, presented)
}
