"use client";
import React from 'react';
import hurting from 'public/hurting.mp3';
import './page.css';
import { handleClientScriptLoad } from 'next/script';
import useSound from 'use-sound';
import { useState } from 'react';

export default function well() {

  const [playSound] = useSound(hurting);
  const [selected, setSelected] = useState(null);

  const toggle = i => {
    if (selected == i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <main className='main'>
    <div>
      <button className='audio' onClick={playSound}>play sound</button>
    </div>
        <div className='container'>
          <div className='stanza1'>
          <div className='poem'>
            I run my fingers over the pebble
          </div>
          <div className='poem'>
            Smooth, cool, warming between my palm
          </div>
          <div className='poem'>
            The air feels different this time
          </div>
          </div>
          <div className='stanza'>
          <div className='poem'>
            I toss it forward, calling out hello
          </div>
          <div className='poem'>
            It clacks its way down the stone walls of the well, deeper and deeper until a dull thud
          </div>
          <div className='poem'>
            I thought I had heard someone call back, but again, it was the echo of my own voice
          </div>
          </div>
          <div className='stanza'>
          <div className='poem'>
            I imagine the warmth fading from the pebble, too far down for me to retrieve
          </div>
          </div>
          <div className='stanza'>
          <div className='poem'>
            When will I learn my lesson?
          </div>
          <div className='category' onClick={() => toggle(0)}>

              <span className='plus'>
                {selected==0 ? '-' : '+'}
              </span>
            </div>
            <div className={selected==0 ? 'content show' : 'content'}>
            <p>poem written by grace isabel guis</p>
            <p>audio produced by sky kistler</p>
            </div>
          </div>
        </div>

    </main>
  );
}

// i run my fingers over the pebble
// smooth, cool, warming between my palm 
// the air feels different this Time

// i toss it forward, calling out hello 
// it clacks its way down the stone walls of the well, deeper and deeper until a dull thud
// i thought i had heard someone call back, but again, it was the echo of my own voice 

// i imagine the warmth fading from the pebble, too far down for me to retrieve 

// when will i learn my lesson? 
