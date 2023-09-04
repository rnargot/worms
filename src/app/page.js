import Image from 'next/image'
import './page.css'
import folder from './components/folder.png'

export default function Home() {
  return (
    <main className='main'>
      <div className='title'>discofish</div>
      <p>text</p>
      <div>
        <Image className='concepts-logo'
          src={folder}
          alt="folder Logo"
          width={200}
          height={200}
        />
      </div>
    </main>
  )
}


