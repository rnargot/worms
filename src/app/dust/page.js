"use client";
import React from 'react';
import Popup from './Popup.js';
import { useState } from 'react';
// import hurting from 'public/hurting.mp3';
import './page.css';
import words from './dustwords.png'
import Image from 'next/image'
// import useSound from 'use-sound';

export default function dust() {

//   const [playSound] = useSound(hurting);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [buttonPopup1, setButtonPopup1] = useState(false);
    const [buttonPopup2, setButtonPopup2] = useState(false);
    const [buttonPopup3, setButtonPopup3] = useState(false);
    const [buttonPopup4, setButtonPopup4] = useState(false);
    const [buttonPopup5, setButtonPopup5] = useState(false);
    const [buttonPopup6, setButtonPopup6] = useState(false);

  return (
    <main className='main'>
        <button className='btn btn-primary' onClick={() => setButtonPopup(true)}>
            <div className='btn-text'>rush</div>
            </button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}> 
        <br></br>
        <div className='poem'>rush over me</div>
        <div className='poem'>chill down my bones</div>
    
        </Popup>

        <button className='btn btn-primary' onClick={() => setButtonPopup1(true)}>
            <div className='btn-text'>until</div>
        </button>
        <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}> 
        <br></br>
        <div className='poem'>until they crack </div>
        <br></br>
        </Popup>
        <button className='btn btn-primary' onClick={() => setButtonPopup2(true)}>
            <div className='btn-text'>powder</div>
        </button>
        <Popup trigger={buttonPopup2} setTrigger={setButtonPopup2}> 
        <br></br>
        <div className='poem'>powder drains from me</div>
        <div className='poem'>my skin folding over itself</div>
        </Popup>
        <button className='btn btn-primary' onClick={() => setButtonPopup5(true)}>
            <div className='btn-text'>thickness</div>
        </button>
        <Popup trigger={buttonPopup5} setTrigger={setButtonPopup5}> 
        <br></br>
        <div className='poem'>thickness dripping from its creases</div>
        <br></br>
        </Popup>
        <button className='btn btn-primary' onClick={() => setButtonPopup3(true)}>
            <div className='btn-text'>wet</div>
        </button>
        <Popup trigger={buttonPopup3} setTrigger={setButtonPopup3}> 
        <br></br>
        <div className='poem'>wet and empty</div>
        <br></br>
        </Popup>
        <button className='btn btn-primary' onClick={() => setButtonPopup4(true)}>
            <div className='btn-text'>space</div>
        </button>
        <Popup trigger={buttonPopup4} setTrigger={setButtonPopup4}> 
        <br></br>
        <div className='poem'>no amount of space</div>
        <div className='poem'>is small enough</div>
        </Popup>
        <button className='btn btn-primary' onClick={() => setButtonPopup6(true)}>
            <div className='btn-text'>reside</div>
        </button>
        <Popup trigger={buttonPopup6} setTrigger={setButtonPopup6}> 
        <br></br>
        <div className='poem'>for me to reside</div>
        <br></br>
        </Popup>
    </main>
  );
}