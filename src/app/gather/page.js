import Link from 'next/link';
import './page.css'
import haus from './haus.png'
import Image from 'next/image'

export default function beauty() {
  return (
    <main className='main'>
      <div className='title'> the internet</div>
      <a href="https://rainy.haus/" target="_blank" rel="noreferrer">
      <Image className='logo'
               src={haus}
               alt="folder Logo"
                width={200}
                height={200}
              />
              <h2 className='website'>{"rainy.haus (6/7)"}</h2>
        </a>
      <div className='description1'> is </div>
      <div className='description2'> a </div>
      <div className='description3'> gathering space </div>
    </main>
  );
}