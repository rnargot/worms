import Image from 'next/image'
import styles from './page.module.css'
import folder from 'public/folder.png'

export default function Home() {
  return (
    <main className={styles.main}>
<div>worms</div>
      <div>
        <Image
          src={folder}
          alt="folder Logo"
          width={200}
          height={200}
          priority
        />
      </div>
    </main>
  )
}


