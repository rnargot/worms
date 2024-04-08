"use client";
import React, { useEffect } from 'react';
import './page.css'

export default function find() {
    useEffect(() => {
        function handleScroll() {
          const scrollFraction = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
          const backgroundOpacity = Math.min(0.99, scrollFraction); // Maximum background opacity set to 0.5
          document.documentElement.style.setProperty('--background-opacity', backgroundOpacity);
        }
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
  return (
    <main className='main'>
      <div className='container'>
      <div className='text'> oh hello again i </div>
      <div className='text'>see u are here because</div>
      <div className='text'>well i</div>
      <div className='text'>guess i wont pretend i dont know </div>
      <div className='text'>im sorry this keeps happening i</div>
      <div className='text'>thought i was strong enough for</div>
      <div className='text'>u to maybe</div>
      <div className='text'>prefer me like this but</div>
      <div className='text'>that was stupid of me i </div>
      <div className='text'>you were right all along but</div>
      <div className='text'>have i misunderstood again? im </div>
      <div className='text'>sorry but i </div>
      <div className='text'>remember how you like it now</div>
      <div className='text'>packaged and palatable how</div>
      <div className='text'>could i forget please </div>
      <div className='text'>go ahead i </div>
      <div className='text'>deserve it this time too  </div>
      <div className='text'>ill try my best to </div>
      <div className='text'>stay as you prefer me i</div>
      <div className='text'>mean it this time i </div>
      <div className='text'>finally understand i </div>
      <div className='text'>hope next time u </div>
      <div className='text'>wont even be able to </div>
      <div className='text'>find</div>
      <div className='text'>me</div>
      <div className='credit'>margot murvihill</div>
        </div>
    </main>
  );
}