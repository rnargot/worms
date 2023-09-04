import Link from 'next/link';
import './page.css'

export default function audio() {
  return (
    <main className='main'>
      <div className='title'> "coming soon</div>
      <h2>
        <Link className='return' href="/">Back to home</Link>
      </h2>
    </main>
  );
}