"use client";
import React from 'react';
import Link from 'next/link';
import './page.css'
import { useState } from 'react';
import PopupPoem from './PopupPoem';
import Popup from './Popup';

export default function lunar() {
    const [buttonPopup, setButtonPopup] = useState(false)
    const [buttonPopup1, setButtonPopup1] = useState(true)

  return (
    <main className='main'>
            <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}> 
        <br></br>
        <div className='card-text'>you are invited!</div>
        <br></br>
        <button className='btn btn-primary' onClick={() => setButtonPopup(true) & setButtonPopup1(false)}>
        <div className='btn-text'>open</div>
        </button>
        </Popup>
        <PopupPoem trigger={buttonPopup} setTrigger={setButtonPopup}>

{/* <br></br>
<div className='poem1'>who</div>
<div className='poem'>margo's beloved friends</div> */}
<br></br>
<div className='poem1'>what</div>
<div className='poem'>a cozy day of cooking & giggling to celebrate the year of the snake</div>
<br></br>
<div className='poem1'>where</div>
<div className='haus'>Bad Bunny's</div> 
<div className='poem'>MrascoHaus</div> 
<div className='poem'>715 E Pine St</div>
<br></br>
<div className='poem1'>when</div>
<div className='poem'>Saturday, Feb 1</div>
<div className='poem'>Cooking @ 2pm*</div>
<div className='poem'>Dinner @ 7pm*</div>
<div className='poem'>~Special Activity~ @ 8pm*</div>
<div className='poem'>drop in whenever you can!</div>

<br></br>
<div className='poem1'>RSVP</div>
<div className='poem'>pls email mother@discofish.cool & include:</div>
<div className='poem'>- your birthday and year</div>
<div className='poem'>- [old] a photo of something you want to do more of this year</div>
<div className='poem'>- [new] a photo of something you want to learn or try this year</div>
<br></br>
<div className='poem'>*all times are in GST (girlie standard time)</div>
<br></br>
</PopupPoem>
            <div className='credit'>see u soon besties ^_^</div>
        </main>
  );
}
