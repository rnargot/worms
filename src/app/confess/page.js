"use client";
import React from 'react';
import Link from 'next/link';
import './page.css'
import { useState } from 'react';
import Popup from './Popup';
export default function confess() {
  const [buttonPopup, setButtonPopup] = useState(true)
  return (
    <main className='main'>
      <div className='title'> "confess TM is under construction</div>
      <br></br>
      <Popup className='confession' trigger={buttonPopup} setTrigger={setButtonPopup}> 
        <br></br>
        <div className='card-text'>would you like to be featured in confess TM?</div>
        <br></br>
        <a href="mailto:mother@discofish.cool?subject=a%20confession&body=my%20greatest%20fear%20is%20%0Amy%20greatest%20joy%20is" target="_blank" rel="noreferrer">
        <button className='pbtn pbtn-primary' >
        <div className='btn-text'>confess</div>
        </button>
        </a>
        </Popup>
    </main>
  );
}