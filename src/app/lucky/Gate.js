'use client'

import { useEffect, useRef, useState } from 'react'
import { feelLucky } from './actions'
import './gate.css'

const BLOCKS = 20
const MAIL_LIST = 'mother@discofish.cool'
const EMAIL_HINT = 'your e-mail'

function nextBlockDelay(filled) {
  if (filled >= BLOCKS - 1) return null
  const stallAt = Math.round(BLOCKS * 0.7)
  const next = filled + 1
  if (next <= stallAt) return 280
  const pastStall = next - stallAt
  return Math.round(900 * 2 ** (pastStall - 1))
}

function DeadLink({ children }) {
  return (
    <a
      role="link"
      onClick={(event) => {
        event.preventDefault()
      }}
    >
      {children}
    </a>
  )
}

export default function Gate() {
  const [query, setQuery] = useState('')
  const [searching, setSearching] = useState(false)
  const [blocks, setBlocks] = useState(0)
  const cancelRef = useRef(null)

  useEffect(() => {
    if (!searching) {
      setBlocks(0)
      return undefined
    }
    cancelRef.current?.focus()
    const onKey = (event) => {
      if (event.key === 'Escape') setSearching(false)
    }
    window.addEventListener('keydown', onKey)

    let filled = 0
    let timer
    const tick = () => {
      const delay = nextBlockDelay(filled)
      if (delay == null) return
      timer = window.setTimeout(() => {
        filled += 1
        setBlocks(filled)
        tick()
      }, delay)
    }
    tick()

    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('keydown', onKey)
    }
  }, [searching])

  function openSearch(event) {
    event.preventDefault()
    setSearching(true)
  }

  async function tryLucky() {
    const data = new FormData()
    data.set('q', query)
    await feelLucky(data)
  }

  function subscribe(event) {
    event.preventDefault()
    const email = String(new FormData(event.currentTarget).get('email') ?? '')
    const subject = encodeURIComponent('Get Mother! updates monthly!')
    const body = encodeURIComponent(email)
    window.location.href = `mailto:${MAIL_LIST}?subject=${subject}&body=${body}`
  }

  return (
    <main className="lucky-gate">
      <h1 className="lucky-logo" aria-label="Google!">
        <span className="lucky-blue">G</span>
        <span className="lucky-red">o</span>
        <span className="lucky-yellow">o</span>
        <span className="lucky-blue">g</span>
        <span className="lucky-green">l</span>
        <span className="lucky-red">e</span>
        <span className="lucky-blue lucky-bang">!</span>
      </h1>

      <section className="lucky-band">
        <p className="lucky-prompt">Search the web using Google!</p>
        <form onSubmit={openSearch}>
          <input
            className="lucky-query"
            name="q"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Search query"
            autoComplete="off"
            spellCheck={false}
          />
          <div className="lucky-controls">
            <select name="num" defaultValue="10" aria-label="Number of results">
              <option value="10">10 results</option>
              <option value="30">30 results</option>
              <option value="100">100 results</option>
            </select>
            <button type="submit">Google Search</button>
            <button type="button" onClick={tryLucky}>
              I&apos;m feeling lucky
            </button>
          </div>
          <p className="lucky-index">
            <i>Index contains ~25 million pages (soon to be much bigger)</i>
          </p>
        </form>
      </section>

      <p className="lucky-about">
        <DeadLink>About Google!</DeadLink>
      </p>
      <p className="lucky-sublinks">
        <DeadLink>Stanford Search</DeadLink>
        <DeadLink>Linux Search</DeadLink>
      </p>

      <section className="lucky-band lucky-band-lower">
        <p className="lucky-prompt">Get Mother! updates monthly!</p>
        <form className="lucky-subscribe" onSubmit={subscribe}>
          <input
            name="email"
            type="text"
            defaultValue={EMAIL_HINT}
            aria-label="Email"
            autoComplete="off"
            onFocus={(event) => {
              if (event.target.value === EMAIL_HINT) event.target.value = ''
            }}
            onBlur={(event) => {
              if (event.target.value.trim() === '') event.target.value = EMAIL_HINT
            }}
          />
          <button type="submit">Subscribe</button>
          <DeadLink>Archive</DeadLink>
        </form>
        <p className="lucky-copy">Copyright ©1997-8 Stanford University</p>
      </section>

      {searching ? (
        <div className="lucky-overlay" role="presentation">
          <div
            className="lucky-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lucky-loading-title"
            aria-busy="true"
          >
            <div className="lucky-dialog-bar">
              <span id="lucky-loading-title">Google Search</span>
              <button
                type="button"
                className="lucky-dialog-x"
                onClick={() => setSearching(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="lucky-dialog-body">
              <p>Loading...</p>
              <div className="lucky-progress" aria-hidden="true">
                {Array.from({ length: BLOCKS }, (_, index) => (
                  <span key={index} className={index < blocks ? 'on' : ''} />
                ))}
              </div>
              <button
                ref={cancelRef}
                type="button"
                className="lucky-cancel"
                onClick={() => setSearching(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  )
}
