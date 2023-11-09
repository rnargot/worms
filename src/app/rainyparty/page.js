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
        <div className='card-text'>do you know that you are dearly loved?</div>
        <br></br>
        <button className='btn btn-primary' onClick={() => setButtonPopup(true) & setButtonPopup1(false)}>
        <div className='btn-text'>yes</div>
        </button>
        </Popup>
        <PopupPoem trigger={buttonPopup} setTrigger={setButtonPopup}>

<br></br>
<div className='poem1'>who</div>
<div className='poem'>margo's beloved friends</div>
<br></br>
<div className='poem1'>what</div>
<div className='poem'>powerpoint/karaoke party!</div>
<div className='poem'>we want to hear about your hobbies, life altering media tier lists, cursed tweet drafts & terrible date stories</div>
<div className='poem'>bring your favorite food and drink!</div>
<div className='poem'></div>
<br></br>
<div className='poem1'>where</div>
<div className='poem'>RainyHaus</div>
<div className='poem'>1600 2nd Ave</div>
<br></br>
<div className='poem1'>when</div>
<div className='poem'>Saturday, Nov 10 @ 8pm</div>
<br></br>
<div className='poem1'>why</div>
<div className='poem'>to share laughs, passions & love</div>
<div className='poem'>& make my dearest friend grace feel special during their visit in seattle!</div>
<br></br>
<div className='poem'>txt margo with questions or help with ideas</div>
<br></br>
<br></br>
</PopupPoem>
            <div className='credit'>see u soon besties ^_^</div>
        </main>
  );
}