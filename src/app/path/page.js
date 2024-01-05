"use client";
import React from 'react';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import './page.css'
import speaker from './speaker.png'
import martini from './martini.png'
import Popup from './Popup';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';

export default function path() {
    const [buttonPopup, setButtonPopup] = useState(false)
    const [buttonPopup2, setButtonPopup2] = useState(false)
    const bucket = 'discofish'
    const stuffKey = 'worms/audio/stuff.mp3'
    const lookKey = 'worms/audio/look.mp3'
    const [isPlaying, setIsPlaying] = useState(false);
    const [stuffSound, setStuffSound] = useState(null);
    const [lookSound, setLookSound] = useState(null);
    const [selected, setSelected] = useState(null);

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
          const { Body } = await s3.send(new GetObjectCommand({ Bucket: bucket, Key: stuffKey }));
          const blob = await streamToBlob(Body);
          const objectUrl = URL.createObjectURL(blob);
          var audio = new Audio(objectUrl);
          setStuffSound(audio);
        } catch (error) {
          console.error('Error fetching mp3:', error);
        }
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
          const { Body } = await s3.send(new GetObjectCommand({ Bucket: bucket, Key: lookKey }));
          const blob = await streamToBlob(Body);
          const objectUrl = URL.createObjectURL(blob);
          var audio = new Audio(objectUrl);
          setLookSound(audio);
        } catch (error) {
          console.error('Error fetching mp3:', error);
        }
      };
      fetchSound();
    }, []);
  
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
  
    const handlePlaySound = (sound) => {
      if (sound) {
        if (isPlaying) {
          sound.pause(); // Pause the audio
        } else {
          sound.play(); // Play the audio
        }
      }
      // Toggle the playback status
      setIsPlaying(!isPlaying);
    };
  
    return (
      <main className='main'>
            <Image className='speaker'
                src={speaker}
                alt="speaker"
                  width={150}
                  height={150}
                  onClick={() => setButtonPopup(true)}
                />
              <Image className='martini'
                src={martini}
                alt="martini"
                  width={150}
                  height={150}
                  onClick={() => setButtonPopup2(true)}
                />
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}> 
          <div className='card-header'>
                  <div className="header-text">the sound of my grandfather trying to relate to me</div>
          </div>
          <br></br>
          <div className='card-text'>
          <button className='pbtn pbtn-primary' onClick={() => handlePlaySound(stuffSound)}>{isPlaying ? 'silence' : 'listen'}</button>
          </div>
          <br></br>
          </Popup>
          <Popup trigger={buttonPopup2} setTrigger={setButtonPopup2}> 
          <div className='card-header'>
                  <div className="header-text">the sound of my mother dancing in the summer breeze</div>
          </div>
          <br></br>
          <div className='card-text'>
          <button className='pbtn pbtn-primary' onClick={() => handlePlaySound(lookSound)}>{isPlaying ? 'silence' : 'listen'}</button>
          </div>
          <br></br>
          </Popup>

          </main>
    );
}