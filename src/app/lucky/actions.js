'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { LUCKY_COOKIE, luckyCookieOptions } from './session'
import { issuePass } from './token'

const PASSWORD = '28'

export async function feelLucky(formData) {
  const query = String(formData.get('q') ?? '')
  if (query !== PASSWORD) {
    return { ok: false }
  }

  const pass = await issuePass()
  cookies().set(LUCKY_COOKIE, pass, luckyCookieOptions())
  redirect(`/lucky/invite?t=${encodeURIComponent(pass)}`)
}
