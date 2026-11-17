import Link from 'next/link'
import { redirect } from 'next/navigation'
import { passesGate } from '../session'
import './page.css'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'you are invited',
  robots: {
    index: false,
    follow: false,
  },
}

export default async function InvitePage({ searchParams }) {
  const presented = typeof searchParams?.t === 'string' ? searchParams.t : ''
  if (!(await passesGate(presented))) {
    redirect('/lucky')
  }

  return (
    <main className="lucky-invite">
      <div className="lucky-window">
        <div className="lucky-titlebar">you are invited</div>
        <div className="lucky-invite-body">
          <p className="lucky-hello">you are invited!</p>
          <p className="lucky-label">what</p>
          <p className="lucky-line">
            a party in the backseat of the brain. a little gathering, once you
            have found the way in.
          </p>
          <p className="lucky-label">where</p>
          <p className="lucky-line">
            the internet. disco fish is a gathering space, and you are already
            here.
          </p>
          <p className="lucky-label">when</p>
          <p className="lucky-line">
            whenever you arrive. drop in. stay as long as you like.
          </p>
          <p className="lucky-label">bring</p>
          <p className="lucky-line">yourself. that is the whole list.</p>
          <p className="lucky-signoff">see u soon besties ^_^</p>
          <Link className="lucky-home" href="/" referrerPolicy="no-referrer">
            swim home
          </Link>
        </div>
      </div>
    </main>
  )
}
