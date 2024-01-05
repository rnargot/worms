"use client";
import React from 'react';
import Link from 'next/link';
import './page.css'
import { useState } from 'react';
import PopupPoem from './PopupPoem';
import Popup from './Popup';

export default function sub() {
    const [buttonPopup, setButtonPopup] = useState(false)
    const [buttonPopup1, setButtonPopup1] = useState(true)

  return (
    <main className='main'>
        <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}> 
        <br></br>
        <div className='card-text'>Do you know that I am always with you?</div>
        <br></br>
        <button className='pbtn pbtn-primary' onClick={() => setButtonPopup(true) & setButtonPopup1(false)}>
        <div className='btn-text'>Yes</div>
        </button>
        </Popup>


            <PopupPoem trigger={buttonPopup} setTrigger={setButtonPopup}>

            <br></br>
            <div className='poem'>From the other side of a frosted glass, you wave to me</div>
            <div className='poem'>a smile like the sun</div>
            <br></br>
            <div className='poem'>Cheek in my hand, I watch you feeding yourself from a field</div>
            <div className='poem'>Your movement beckons me</div>
            <br></br>
            <div className='poem'>I cannot move, I am here with the moon</div>
            <div className='poem'>A waning crescent in my kitchen I must first learn how to make space for</div>
            <br></br>
            <div className='poem'>But when you swallow another handful of earth</div>
            <div className='poem'>I can taste it too</div>
            <br></br>
            <div className='poem'>I wave back while your eyes are shut,</div>
            <div className='poem'>head thrown back in a laugh or a cry</div>
            <br></br>
            <div className='poem'> It doesn't matter if you saw it</div>
            <div className='poem'>The water rushes beneath your feet</div>
            <br></br>
            </PopupPoem>
            <div className='credit'>Written by Grace Isabel Gius</div>
        </main>
  );
}