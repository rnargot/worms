"use client";
import Link from 'next/link';
import './page.css'
import { useRouter } from 'next/navigation'

export default function audio() {
  const router = useRouter()
  return (
    <main className='main'>
      <div className='title'> "coming soon</div>
      <h2>
        <Link className='return' href="/" onClick={() => router.reload()}>swim home</Link>
      </h2>
    </main>
  );
}