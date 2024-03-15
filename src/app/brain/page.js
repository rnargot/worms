"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import './page.css'
import PopupPoem from './PopupPoem';
import Popup from './Popup';
import thoughts from './thoughts';



export default function brain() {

    const withRandomString = (Component) => {
    return () => {
      const randomIndex = Math.floor(Math.random() * thoughts.length);
      const randomString = thoughts[randomIndex];
      return <Component randomString={randomString} />;
    };
  };
  
  // Your component that displays the random string
  const DisplayComponent = ({ randomString }) => {
    return (
        <Popup> 
        <br></br>
        <div className='card-text'>{randomString}</div>
        <br></br>
        </Popup>
    )
  };
  
  const RandomStringComponents = [...Array(200)].map((_, index) => {
    const WrappedComponent = withRandomString(DisplayComponent);
    return <WrappedComponent key={index} />;
  });


  return (
    <main className='main'>
        <div> 
            {RandomStringComponents}
        </div>
        <div className='credit'>i love you</div>
        </main>
  );
}

