"use client";
import Image from 'next/image'
import './page.css'
import folder from './components/folder.png'
import cd from './components/cd.png'
import document from './components/document.png'
import image from './components/image.png'
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter()

  const [selected, setSelected] = useState(null);

  const toggle = i => {
    if (selected == i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <main className='main'>
      <div className='title'>discofish</div>
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
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

const org = [
  {
    category: 'concepts',
    struct: "audio souvenir",
    struct_page: "/audio",
    struct1: "artifacts",
    struct1_page: "/artifacts",
    struct2: "beauty for harness",
    struct2_page: "/beauty",
    struct3: "gather",
    struct3_page: "/gather",
    img: folder,
  },
  {
    category: 'audio',
    struct: 'well',
    struct_page: "/well",
    struct1: "...",
    struct1_page: "/patience",
    struct2: "...",
    struct2_page: "/patience",
    struct3: "...",
    struct3_page: "/patience",
    img: cd,
  },
  {
    category: 'words',
    struct: 'dust',
    struct_page: "/dust",
    struct1: "well",
    struct1_page: "/well",
    struct2: "...",
    struct2_page: "/patience",
    struct3: "...",
    struct3_page: "/patience",
    img: document,
  },
  {
    category: 'about',
    struct: 'me',
    struct_page: "/me",
    struct1: "other cool shit",
    struct1_page: "/cool",
    struct2: "...",
    struct2_page: "/patience",
    struct3: "...",
    struct3_page: "/patience",
    img: image,
  },
]
