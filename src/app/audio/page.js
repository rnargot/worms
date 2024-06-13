import Link from 'next/link';
import './page.css'
import ear from './ear.png'
import Image from 'next/image'

export default function audio() {
  return (
    <main className='main'>

      <div className='title'> "audio souvenir TM</div>
      <a href="https://ear.cool/" target="_blank" rel="noreferrer">
      <Image className='logo'
               src={ear}
               alt="folder Logo"
                width={200}
                height={200}
              />
              <h2 className='website'>{"ear.cool (5/7)"}</h2>
        </a>
      <div className='description'> a personal bank of time traveling keys </div>
      <div className='expand'> an unprogrammed frequency is implanted in the ear canal  </div>
      <div className='expand1'> frequency is played at random moments during a specified time interval  </div>
      <div className='expand2'> association between interval memories and audio frequency are created</div>
      <div className='expand3'> audio file is added to a bank of audio souvenirs </div>
      <div className='expand4'> files serve as a portal to time travel back to programmed  interval   </div>
    </main>
  );
}