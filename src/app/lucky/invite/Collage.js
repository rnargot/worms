'use client'

import { useEffect, useState } from 'react'

const layers = [
  { src: '/invite-bg/rabbit-luck.jpg', className: 'lucky-bg-rabbit', depth: 0 },
  { src: '/invite-bg/jade-comb.jpg', className: 'lucky-bg-comb', depth: 0 },
  { src: '/invite-bg/lucky-you-captcha.jpg', className: 'lucky-bg-captcha', depth: 1 },
  { src: '/invite-bg/lucky-slipper.jpg', className: 'lucky-bg-slipper', depth: 1 },
  { src: '/invite-bg/feel-lucky-cartoon.jpg', className: 'lucky-bg-cartoon', depth: 1 },
  { src: '/invite-bg/brown-chick.jpg', className: 'lucky-bg-chick', depth: 1 },
  { src: '/invite-bg/clovers.jpg', className: 'lucky-bg-clovers', depth: 2 },
  { src: '/invite-bg/fly-agaric.jpg', className: 'lucky-bg-agaric', depth: 3 },
  { src: '/invite-bg/chick-on-scale.jpg', className: 'lucky-bg-scale', depth: 3 },
  { src: '/invite-bg/bamboo-grove.jpg', className: 'lucky-bg-grove', depth: 4 },
  { src: '/invite-bg/golden-bamboo.jpg', className: 'lucky-bg-golden', depth: 4 },
  { src: '/invite-bg/green-bamboo.jpg', className: 'lucky-bg-green-bamboo', depth: 4 },
  { src: '/invite-bg/mushroom-circle.jpg', className: 'lucky-bg-mushrooms', depth: 4 },
  { src: '/invite-bg/pool-green.jpg', className: 'lucky-bg-pool-green', depth: 5 },
  { src: '/invite-bg/pool-red.jpg', className: 'lucky-bg-pool-red', depth: 5 },
]

const depths = [0, 1, 2, 3, 4, 5]
const startAt = [0, 160, 340, 560, 840, 1180]

function preload(src) {
  return new Promise((resolve) => {
    const img = new Image()
    const done = () => resolve()
    img.onload = done
    img.onerror = done
    img.src = src
    if (img.complete) done()
  })
}

export default function Collage() {
  const [shown, setShown] = useState([])

  useEffect(() => {
    let cancelled = false
    const ready = Object.fromEntries(layers.map((layer) => [layer.src, preload(layer.src)]))
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce) {
      Promise.all(Object.values(ready)).then(() => {
        if (!cancelled) setShown(layers.map((layer) => layer.src))
      })
      return () => {
        cancelled = true
      }
    }

    const started = performance.now()
    ;(async () => {
      for (const depth of depths) {
        const group = layers.filter((layer) => layer.depth === depth).map((layer) => layer.src)
        const elapsed = performance.now() - started
        const hold = new Promise((resolve) => {
          setTimeout(resolve, Math.max(0, startAt[depth] - elapsed))
        })
        await Promise.all([hold, ...group.map((src) => ready[src])])
        if (cancelled) return
        setShown((current) => [...current, ...group])
      }
    })()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="lucky-bg" aria-hidden="true">
      {layers.map((layer) => (
        <img
          key={layer.src}
          src={layer.src}
          alt=""
          data-depth={layer.depth}
          className={shown.includes(layer.src) ? `${layer.className} is-in` : layer.className}
        />
      ))}
      <div className="lucky-bg-tint" />
    </div>
  )
}
