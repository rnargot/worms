import Link from 'next/link';
import './page.css'
import folder from './folder.png'
import document from './document.png'
import Image from 'next/image'

export default function cool() {
  return (
    <main className='main'>
      <div className='title'>"usual heart" (1/3)</div>
      <a href="https://www.margo.cool" target="_blank" rel="noreferrer">
      <Image className='logo'
               src={folder}
               alt="folder Logo"
                width={200}
                height={200}
              />
              <h2 className='website'>{"margo.cool (2/3)"}</h2>
        </a>
        <a href="https://www.worms.cool" target="_blank" rel="noreferrer">
      <Image className='logo'
               src={document}
               alt="folder Logo"
                width={200}
                height={200}
              />
              <h2 className='website'>{"worms.cool (3/3)"}</h2>
        </a>
    </main>
  );
}