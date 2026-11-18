import Link from 'next/link'
import { redirect } from 'next/navigation'
import { passesGate } from '../session'
import Collage from './Collage'
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
      <Collage />
      <div className="lucky-window">
        <div className="lucky-titlebar">you are invited</div>
        <div className="lucky-invite-body">
          <p className="lucky-hello">you are invited!</p>
          <p className="lucky-label">what</p>
          <p className="lucky-line">
            come celebrate easy prosper (yi baat) for Margot&apos;s 28th birthday!
          </p>
          <p className="lucky-line">gambling not required but encouraged:</p>
          <ul className="lucky-games">
            <li>pounce</li>
            <li>mahjong</li>
            <li>bingo</li>
            <li>poker</li>
            <li>dominos</li>
            <li>trivia</li>
          </ul>
          <p className="lucky-label">where</p>
          <p className="lucky-line">70 pine</p>
          <p className="lucky-label">when</p>
          <p className="lucky-line">12/12 @ 6pm</p>
          <p className="lucky-label">wear</p>
          <p className="lucky-line">something lucky</p>
          <p className="lucky-label">bring</p>
          <p className="lucky-line">a deck of cards and a good luck charm</p>
          <p className="lucky-label">RSVP</p>
          <p className="lucky-line">email mother@discofish.cool by 12/2</p>
          <p className="lucky-signoff">see u soon besties ^_^</p>
          <Link className="lucky-home" href="/" referrerPolicy="no-referrer">
            swim home
          </Link>
        </div>
      </div>
    </main>
  )
}
