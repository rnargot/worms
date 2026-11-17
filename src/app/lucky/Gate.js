'use client'

import { useEffect, useRef, useState } from 'react'
import { feelLucky } from './actions'
import './gate.css'

export default function Gate() {
  const [query, setQuery] = useState('')
  const [searching, setSearching] = useState(false)
  const cancelRef = useRef(null)

  useEffect(() => {
    if (!searching) return undefined
    cancelRef.current?.focus()
    const onKey = (event) => {
      if (event.key === 'Escape') setSearching(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
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

  function stay(event) {
    event.preventDefault()
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
        <a href="#about" onClick={stay}>
          About Google!
        </a>
      </p>
      <p className="lucky-sublinks">
        <a href="#stanford" onClick={stay}>
          Stanford Search
        </a>
        <a href="#linux" onClick={stay}>
          Linux Search
        </a>
      </p>

      <section className="lucky-band lucky-band-lower">
        <p className="lucky-prompt">Get Google! updates monthly!</p>
        <form className="lucky-subscribe" onSubmit={stay}>
          <input
            type="text"
            defaultValue="your e-mail"
            aria-label="Email"
            autoComplete="off"
          />
          <button type="submit">Subscribe</button>
          <a href="#archive" onClick={stay}>
            Archive
          </a>
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
                <span />
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
