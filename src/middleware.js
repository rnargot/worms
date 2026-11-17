import { NextResponse } from 'next/server'
import { LUCKY_COOKIE, passIsValid } from './app/lucky/token'

export async function middleware(request) {
  const presented = request.nextUrl.searchParams.get('t') || ''
  const cookieValue = request.cookies.get(LUCKY_COOKIE)?.value || ''
  if (!(await passIsValid(cookieValue, presented))) {
    const gate = request.nextUrl.clone()
    gate.pathname = '/lucky'
    gate.search = ''
    const response = NextResponse.redirect(gate)
    response.headers.set('Cache-Control', 'private, no-store')
    return response
  }

  const response = NextResponse.next()
  response.headers.set('Cache-Control', 'private, no-store')
  return response
}

export const config = {
  matcher: '/lucky/invite',
}
