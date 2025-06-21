"use client";
import React from 'react';
import Link from 'next/link';
import './page.css'
import { useState } from 'react';
import PopupPoem from './PopupPoem';
import Popup from './Popup';

export default function bighaus() {
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
<div className='poem'>celebrating our new home in pioneer square!</div>
<br></br>
<div className='poem1'>where</div>
<div className='poem'>Quilt Builting</div> 
<div className='poem'>318 1st Ave S Apt 506</div>
<br></br>
<div className='poem1'>when</div>
<div className='poem'>Sunday, June 29</div>
<div className='poem'>food & drinks @ 4pm*</div>
<div className='poem'>optional clothing repair workshop @ 6pm*</div>
<div className='poem'>optional life updates ppt @ 8pm*</div>
<div className='poem'>prob a jam sesh at some point</div>
<br></br>
<div className='poem'>drop in whenever you can!</div>

<br></br>
<div className='poem1'>RSVP</div>
<div className='poem'>pls email mother@discofish.cool+ </div>
<br></br>
<div className='poem'>*all times are in GST (girlie standard time)</div>
<div className='poem'>+u can text me too but im a fiend for the email dopamine hit</div>
<br></br>
</PopupPoem>
            <div className='credit'>see u soon besties ^_^</div>
        </main>
  );
}
