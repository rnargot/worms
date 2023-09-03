import Image from 'next/image'
import styles from './page.css'
import folder from 'public/folder.png'

export default function Home() {
  return (
    <main className='main'>
      <div className='title'>discofish</div>
      <div>
        <Image className='concepts-logo'
          src={folder}
          alt="folder Logo"
        />

      </div>
    </main>
  )
}


