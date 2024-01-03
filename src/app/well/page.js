"use client";

import { useEffect, useState } from 'react';
import React from 'react';
import './page.css';

import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';

export default function well() {
  const bucket = 'discofish'
  const key = 'worms/audio/hurting.mp3'
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const [selected, setSelected] = useState(null);

  const toggle = i => {
    if (selected == i) {
      return setSelected(null)
    }

    setSelected(i)
  }

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

  return (
    <main className='main'>
    <div>
      <button className='audio' onClick={handlePlaySound}>{isPlaying ? 'pause sound' : 'play sound'}</button>
    </div>
        <div className='container'>
          <div className='stanza1'>
          <div className='poem'>
            I run my fingers over the pebble
          </div>
          <div className='poem'>
            Smooth, cool, warming between my palm
          </div>
          <div className='poem'>
            The air feels different this time
          </div>
          </div>
          <div className='stanza'>
          <div className='poem'>
            I toss it forward, calling out hello
          </div>
          <div className='poem'>
            It clacks its way down the stone walls of the well, deeper and deeper until a dull thud
          </div>
          <div className='poem'>
            I thought I had heard someone call back, but again, it was the echo of my own voice
          </div>
          </div>
          <div className='stanza'>
          <div className='poem'>
            I imagine the warmth fading from the pebble, too far down for me to retrieve
          </div>
          </div>
          <div className='stanza'>
          <div className='poem'>
            When will I learn my lesson?
          </div>
          <div className='category' onClick={() => toggle(0)}>

              <span className='plus'>
                {selected==0 ? '-' : '+'}
              </span>
            </div>
            <div className={selected==0 ? 'content show' : 'content'}>
            <p>poem written by grace isabel gius</p>
            <p>audio produced by sky kistler</p>
            </div>
          </div>
        </div>
    </main>
  );
}

// i run my fingers over the pebble
// smooth, cool, warming between my palm 
// the air feels different this Time

// i toss it forward, calling out hello 
// it clacks its way down the stone walls of the well, deeper and deeper until a dull thud
// i thought i had heard someone call back, but again, it was the echo of my own voice 

// i imagine the warmth fading from the pebble, too far down for me to retrieve 

// when will i learn my lesson? 
