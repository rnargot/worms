import Link from 'next/link';
import './page.css'
import folder from './folder.png'
import document from './document.png'
import ear from './ear.png'
import tummy from './tummy.png'
import haus from './haus.png'
import vanish from './vanish.png'
import Image from 'next/image'

export default function cool() {
  return (
    <main className='main'>
      <div className='title'>"usual heart" (1/6)</div>
      <div className='site'>
      <a href="https://www.margo.cool" target="_blank" rel="noreferrer">
      <Image className='logo'
               src={folder}
               alt="folder Logo"
                width={200}
                height={200}
              />
              <h2 className='website'>{"margo.cool (2/7)"}</h2>
        </a>
      </div>
      <div className='site'>
        <a href="https://www.worms.cool" target="_blank" rel="noreferrer">
      <Image className='logo'
               src={document}
               alt="folder Logo"
                width={200}
                height={200}
              />
              <h2 className='website'>{"worms.cool (3/7)"}</h2>
        </a>
        </div>
        <div className='site'>
        <a href="https://vanish.love/" target="_blank" rel="noreferrer">
      <Image className='logo'
               src={vanish}
               alt="folder Logo"
                width={200}
                height={200}
              />
              <h2 className='website'>{"vanish.love (4/7)"}</h2>
        </a>
        </div>
<div className='site'>
<a href="https://ear.cool/" target="_blank" rel="noreferrer">
      <Image className='logo'
               src={ear}
               alt="folder Logo"
                width={200}
                height={200}
              />
              <h2 className='website'>{"ear.cool (5/7)"}</h2>
        </a>
</div>
<div className='site'>
<a href="https://rainy.haus/" target="_blank" rel="noreferrer">
      <Image className='logo'
               src={haus}
               alt="folder Logo"
                width={200}
                height={200}
              />
              <h2 className='website'>{"rainy.haus (6/7)"}</h2>
        </a>
</div>
<div className='site'>
<a href="https://tummy.wtf/" target="_blank" rel="noreferrer">
      <Image className='logo'
               src={tummy}
               alt="folder Logo"
                width={200}
                height={200}
              />
              <h2 className='website'>{"tummy.wtf (7/7)"}</h2>
        </a>
</div>

        
    </main>
  );
}