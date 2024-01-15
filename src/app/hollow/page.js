"use client";
import { useEffect, useState } from 'react';
import React from 'react';
import './page.css'
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';


export default function hollow() {
  const bucket = 'discofish'
  const key = 'worms/audio/quincie.mp3'
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

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

  const handlePlaySound = () => {
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
  const [selected, setSelected] = useState(null);
  const toggle = i => {
    if (selected == i) {
      return setSelected(null)
    }

    setSelected(i)
  }
  return (
    <main className='main'>
    <div>
      <div className='audio' onClick={handlePlaySound}>{isPlaying ? 'step 1: drown-' : 'step 1: drown+'}</div>
    </div>
    <div>
    <div className='hollow' onClick={() => toggle(0)}>
              step 2: hollow
              <span>
                {selected==0 ? '-' : '+'}
              </span>
            </div>
            </div>
            <div className={selected==0 ? 'content show' : 'content'}>
              <p>she had been hollow, barrel and rag doll</p>
              <p>enabler and giver</p>
              <p>she is willing, open armed and mouth</p>
              <p>loose lipped and soft jawed</p>
              <p>bruises are all that remain</p>
              <p>from what was once a brush with passion</p>
            </div>
            <div>
    <div className='free' onClick={() => toggle(1)}>
              step 3: free
              <span>
                {selected==1 ? '-' : '+'}
              </span>
            </div>
            </div>
            <div className={selected==1 ? 'content show' : 'content'}>
              <p>doubtful and deceitful as can be</p>
              <p>stares at special leaves on every tree</p>
              <p>oranges peeled in one stroke, always does the most</p>
              <p>but could  your love set her free?</p>
            </div>
    </main>
  );
}