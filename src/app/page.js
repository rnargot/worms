import Image from 'next/image'
import './page.css'
import folder from './components/folder.png'
import cd from './components/cd.png'
import Link from 'next/link';

export default function Home() {
  return (
    <main className='main'>
      <div className='title'>discofish</div>
      <div>
        <Image className='concepts-logo'
          src={folder}
          alt="folder Logo"
          width={200}
          height={200}
        />
      </div>
      <h1 className="category">
        <Link href="/audio">concepts</Link>
      </h1>
      <div>
        <Image className='audio-logo'
          src={cd}
          alt="cd Logo"
          width={200}
          height={200}
        />
      </div>
    </main>
  )
}


