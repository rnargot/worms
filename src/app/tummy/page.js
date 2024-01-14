"use client";
import Link from 'next/link';
import './page.css'
import React from 'react';
import { useState } from 'react';

export default function tummy() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <main className='main'>
      <div className='title'>
        does ur tummy hurt? 
      </div>
      <a href="https://tummy.wtf/" target="_blank" rel="noreferrer">
      <button className='btn btn-primary' onClick={() => setButtonPopup(true)}>
            <div className='btn-text'>yes</div>
            </button>
      </a>
      {/* <a href="https://tummy.wtf/" target="_blank" rel="noreferrer">
      <button className='btn btn-primary' onClick={() => setButtonPopup(true)}>
            <div className='btn-text'>no</div>
            </button>
      </a> */}
    </main>
  );
}