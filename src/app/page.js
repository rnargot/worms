"use client";
import Image from 'next/image'
import './page.css'
import folder from './components/folder.png'
import cd from './components/cd.png'
import document from './components/document.png'
import image from './components/image.png'
import Link from 'next/link';
import Popup from './Popup.js';
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Analytics } from '@vercel/analytics/react';
// import RainbowText from './RainbowText';

export default function Home() {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  const router = useRouter()
  const [selected, setSelected] = useState(null);
  const toggle = i => {
    if (selected == i) {
      return setSelected(null)
    }
    setSelected(i)
  }
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <main className='main'>
      <div className='title'>
      {/* <RainbowText text="DiscoFish" /> */}
      DiscoFish
        </div>
      <div className='concepts-accordion'>
        {org.map((item, i) => (
          <div className='item'>
            <div className='category' onClick={() => toggle(i)}>
            <Image className='logo'
               src={item.img}
               alt="folder Logo"
                width={200}
                height={200}
              />
              <h2>{item.category}</h2>
              <span>
                {selected==i ? '-' : '+'}
              </span>
            </div>
            <div className={selected==i ? 'content show' : 'content'}>
              <div>|__  <Link href={ item.struct_page } onClick={() => router.reload()}>{item.struct}</Link> </div>
              <div>|__  <Link href={ item.struct1_page } onClick={() => router.reload()}>{item.struct1}</Link></div>
              <div>|__  <Link href={ item.struct2_page } onClick={() => router.reload()}>{item.struct2}</Link></div>
              <div>|__  <Link href={ item.struct3_page } onClick={() => router.reload()}>{item.struct3}</Link></div>
              <div>|__  <Link href={ item.struct4_page } onClick={() => router.reload()}>{item.struct4}</Link></div>
            </div>
          </div>
        ))}
      </div>
      <button className='btn btn-primary' onClick={() => setButtonPopup(true)}>
            <div className='btn-text'>terms & privacy</div>
      </button>
      <div className='child child-1'>
        <Popup  trigger={buttonPopup} setTrigger={setButtonPopup}> 
        <br></br>
        <div className='poem'>discofish is a static website and does not collect any user data.</div>
        </Popup>
        </div>
     <Analytics />
    </main>
  )
}
const org = [
  {
    category: 'words',
    struct: 'river',
    struct_page: "/sub",
    struct1: "dust",
    struct1_page: "/dust",
    struct2: "discoweb",
    struct2_page: "/cool",
    struct3: "well",
    struct3_page: "/well",
    struct4: "brainrot",
    struct4_page: "/brain",
    img: document,
  },
  {
    category: 'audio',
    struct: "hollow",
    struct_page: "/hollow",
    struct1: "confess",
    struct1_page: "/confess",
    struct2: 'well',
    struct2_page: "/well",
    struct3: "path_v1",
    struct3_page: "/path",
    struct4: "find",
    struct4_page: "/find",
    img: cd,
  },
  {
    category: 'concepts',
    struct: "audio souvenir",
    struct_page: "/audio",
    struct1: "artifacts",
    struct1_page: "/artifacts",
    struct2: "tummy",
    struct2_page: "/tummy",
    struct3: "gather",
    struct3_page: "/gather",
    struct4: "brainrotrot",
    struct4_page: "/brain",
    img: folder,
  },
  {
    category: 'about',
    struct: 'i want ur art',
    struct_page: "/me",
    struct1: "other cool shit",
    struct1_page: "/cool",
    struct2: "fishies (busy rn)",
    struct2_page: "/fishies",
    struct3: "...",
    struct3_page: "/patience",
    struct4: ".....",
    struct4_page: "/patience",
    img: image,
  },
]
