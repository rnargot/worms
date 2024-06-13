"use client";
import './page.css';
import { useState } from 'react';
import linkedin from './linkedin.png';
import twitter from './twitter.png';
import ig from './ig.png';
import git from './git.png';
import spotify from './spotify.png';
import Image from 'next/image'
export default function beauty() {
    const [selected, setSelected] = useState(null);
    const toggle = i => {
      if (selected == i) {
        return setSelected(null)
      }
  
      setSelected(i)
    }
  return (
    <main className='main'>
      <div className='title'> about disco fish</div>
      <div className='description'>
        <h2> disco fish is a  </h2>
        <div className='category' onClick={() => toggle(0)}>
              <h2>gathering space</h2>
              <span>
                {selected==0 ? '-' : '+'}
              </span>
            </div>
            <div className={selected==0 ? 'content show' : 'content'}>
              <p>|__  a small contribution towards recentering web space around art and community</p>
            </div>
            <div className='by'>created by </div>
            <div className='category1' onClick={() => toggle(1)}>
              <h2>margot murvihill</h2>
              <span>
                {selected==1 ? '-' : '+'}
              </span>
            </div>
            <div className={selected==1 ? 'content show' : 'content'}>
            <a href="https://www.linkedin.com/in/mmurvihill/" target="_blank" rel="noreferrer">
            <Image className='icon'
               src={linkedin}
               alt="linkedin"
                width={50}
                height={50}
              />
              </a>
            <a href="https://open.spotify.com/user/1236936804?si=3d5aa69bc8b642da" target="_blank" rel="noreferrer">
            <Image className='icon'
               src={spotify}
               alt="spotify"
                width={50}
                height={50}
              />
              </a>
            <a href="https://twitter.com/rnargot" target="_blank" rel="noreferrer">
            <Image className='icon'
               src={twitter}
               alt="twitter"
                width={50}
                height={50}
              />
            </a>
            <a href="https://github.com/rnargot" target="_blank" rel="noreferrer">
            <Image className='icon'
               src={git}
               alt="git"
                width={50}
                height={50}
              />
              </a>
            <a href="https://instagram.com/rnargot" target="_blank" rel="noreferrer">
            <Image className='icon'
               src={ig}
               alt="ig"
                width={50}
                height={50}
              />
              </a>
            </div>
          </div>
<div className='email'>
  your art deserves space on the internet.
</div>
      <div className='inspo'>send your vision to mother@discofish.cool. inspired by ambient creators. </div>
      {/* <div className='description1'> a small contribution towards reinventing web space  </div>
      <div className='description2'> you are safe here  </div> */}
      <>
      </>
    </main>
  );
}
