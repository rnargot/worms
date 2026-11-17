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

const collage = [
  { src: '/invite-bg/bamboo-grove.jpg', className: 'lucky-bg-grove' },
  { src: '/invite-bg/pool-green.jpg', className: 'lucky-bg-pool-green' },
  { src: '/invite-bg/pool-red.jpg', className: 'lucky-bg-pool-red' },
  { src: '/invite-bg/golden-bamboo.jpg', className: 'lucky-bg-golden' },
  { src: '/invite-bg/green-bamboo.jpg', className: 'lucky-bg-green-bamboo' },
  { src: '/invite-bg/fly-agaric.jpg', className: 'lucky-bg-agaric' },
  { src: '/invite-bg/mushroom-circle.jpg', className: 'lucky-bg-mushrooms' },
  { src: '/invite-bg/chick-on-scale.jpg', className: 'lucky-bg-scale' },
  { src: '/invite-bg/clovers.jpg', className: 'lucky-bg-clovers' },
  { src: '/invite-bg/lucky-you-captcha.jpg', className: 'lucky-bg-captcha' },
  { src: '/invite-bg/rabbit-luck.jpg', className: 'lucky-bg-rabbit' },
  { src: '/invite-bg/lucky-slipper.jpg', className: 'lucky-bg-slipper' },
  { src: '/invite-bg/feel-lucky-cartoon.jpg', className: 'lucky-bg-cartoon' },
  { src: '/invite-bg/jade-comb.jpg', className: 'lucky-bg-comb' },
  { src: '/invite-bg/brown-chick.jpg', className: 'lucky-bg-chick' },
]

export default async function InvitePage({ searchParams }) {
  const presented = typeof searchParams?.t === 'string' ? searchParams.t : ''
  if (!(await passesGate(presented))) {
    redirect('/lucky')
  }

  return (
    <main className="lucky-invite">
      <div className="lucky-bg" aria-hidden="true">
        {collage.map((layer) => (
          <img key={layer.src} src={layer.src} alt="" className={layer.className} />
        ))}
        <div className="lucky-bg-tint" />
      </div>
      <div className="lucky-window">
        <div className="lucky-titlebar">you are invited</div>
        <div className="lucky-invite-body">
          <p className="lucky-hello">you are invited!</p>
          <p className="lucky-label">what</p>
          <p className="lucky-line">
            come celebrate easy prosper (yi baat) for Margot&apos;s 28th birthday
          </p>
          <p className="lucky-label">where</p>
          <p className="lucky-line">70 pine</p>
          <p className="lucky-label">when</p>
          <p className="lucky-line">12/12</p>
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
