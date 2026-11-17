'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { LUCKY_COOKIE, expectedToken, luckyCookieOptions } from './session'

const PASSWORD = '28'

export async function feelLucky(formData) {
  const query = String(formData.get('q') ?? '')
  if (query !== PASSWORD) {
    return { ok: false }
  }

  cookies().set(LUCKY_COOKIE, expectedToken(), luckyCookieOptions())
  redirect('/lucky/invite')
}
