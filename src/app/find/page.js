"use client";
import { useEffect, useState } from 'react';
import './page.css'
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';

export default function find() {
    const bucket = 'discofish'
    const key = 'worms/audio/woman.mp3'
    // const [isPlaying, setIsPlaying] = useState(false);
    const [sound, setSound] = useState(null);
    useEffect(() => {
        function handleScroll() {
          const scrollFraction = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
          const backgroundOpacity = Math.min(0.99, scrollFraction); // Maximum background opacity set to 0.5
          document.documentElement.style.setProperty('--background-opacity', backgroundOpacity);
          if (sound) {
            const scrollFraction = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            const volume = Math.min(1, Math.max(0, scrollFraction)); // Ensure volume is between 0 and 1
            sound.volume = volume;
          }
        }
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, [sound]);

      useEffect(() => {
        const fetchSound = async () => {
          try {
    
            // Configure AWS SDK
            const s3 = new S3Client({
              region: 'us-east-2',
              credentials: {
                accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
              },
            });
            
            // Fetch the audio file
            const { Body } = await s3.send(new GetObjectCommand({ Bucket: bucket, Key: key }));
    
            const blob = await streamToBlob(Body);
            const objectUrl = URL.createObjectURL(blob);
    
            var audio = new Audio(objectUrl);
            
            setSound(audio);
          } catch (error) {
            console.error('Error fetching mp3:', error);
          }
        };
    
        fetchSound();
      }, []);

    useEffect(() => {
        if (sound) {
        sound.play();
        sound.volume = 0;
        }
    }, [sound]);
    
      // Function to convert a ReadableStream to a Blob
      async function streamToBlob(readableStream) {
        const reader = readableStream.getReader();
        const chunks = [];
    
        while (true) {
          const { done, value } = await reader.read();
    
          if (done) {
            break;
          }
    
          if (!(value instanceof Uint8Array)) {
            throw new Error('Invalid value type in ReadableStream');
          }
    
          chunks.push(value);
        }
    
        return new Blob(chunks, { type: 'audio/mpeg' });
      }
    
  return (
    <main className='main'>
      <div className='container'>
      <div className='text'> oh hello again i </div>
      <div className='text'>see u are here because</div>
      <div className='text'>well i</div>
      <div className='text'>guess i wont pretend i dont know </div>
      <div className='text'>im sorry this keeps happening i</div>
      <div className='text'>thought i was strong enough for</div>
      <div className='text'>u to maybe</div>
      <div className='text'>prefer me like this but</div>
      <div className='text'>that was stupid of me i </div>
      <div className='text'>you were right all along but</div>
      <div className='text'>have i misunderstood again? im </div>
      <div className='text'>sorry but i </div>
      <div className='text'>remember how you like it now</div>
      <div className='text'>packaged and palatable how</div>
      <div className='text'>could i forget please </div>
      <div className='text'>go ahead i </div>
      <div className='text'>deserve it this time too  </div>
      <div className='text'>ill try my best to </div>
      <div className='text'>stay as you prefer me i</div>
      <div className='text'>mean it this time i </div>
      <div className='text'>finally understand i </div>
      <div className='text'>hope next time u </div>
      <div className='text'>wont even be able to </div>
      <div className='text'>find</div>
      <div className='text'>me</div>
      <div className='credit'>margot murvihill</div>
        </div>
    </main>
  );
}