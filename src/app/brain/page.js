"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import './page.css'
import PopupPoem from './PopupPoem';
import Popup from './Popup';



export default function brain() {

  const [components, setComponents] = useState([]);

  useEffect(() => {
    const numberOfComponents = 100;

    function Component() {
        return (
                <Popup > 
                <br></br>
                <div className='card-text'>what if i cant breathe</div>
                <br></br>
                </Popup>

        );
      }

    const componentsArray = Array.from({ length: numberOfComponents }, (_, index) => <Component key={index} />);
    setComponents(componentsArray);
  }, []);


  return (
    <main className='main'>
        <div> 
            {components}
        </div>
        <div className='credit'>what if im scared of</div>
        </main>
  );
}

