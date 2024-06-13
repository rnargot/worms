import Link from 'next/link';
import './page.css'
import vanish from './vanish.png'
import Image from 'next/image'

export default function artifacts() {
  return (
    <main className='main'>
      <div className='title'> "an appeal to artifacts"</div>
      <a href="https://vanish.love/" target="_blank" rel="noreferrer">
      <Image className='logo'
               src={vanish}
               alt="folder Logo"
                width={200}
                height={200}
              />
              <h2 className='website'>{"vanish.love (4/7)"}</h2>
        </a>
      <div className='description'> to exist beyond purpose. outliving necessary companions. i wish to keep the obsolete in good company. </div>
    </main>
  );
}