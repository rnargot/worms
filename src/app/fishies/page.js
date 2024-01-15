"use client";
import Link from 'next/link';
import './page.css'
import React from 'react';
import { useState } from 'react';
import Image from 'next/image'
import sparkledisco from './sparkledisco.gif'
import marctoast from './marctoast.gif'
import mother from './mother.gif'
import gracefish from './gracefish.gif'
import skyfish from './skyfish.gif'

export default function fishies() {
  return (
    <main className='main'>
            <Image className='disco'
               src={sparkledisco}
               alt="disco ball"
                width={300}
                height={300}
                unoptimized={true}
              />
            <Image className='mother'
               src={mother}
               alt="mother"
                width={150}
                height={150}
                unoptimized={true}
              />
              <div className='mother'>margot murvihill (mother)</div>
            <Image className='marctoast'
               src={marctoast}
               alt="marctoast"
                width={100}
                height={100}
                unoptimized={true}
              />
              <div className='marctoast'>marcos montes de oca</div>
            <Image className='grace'
               src={gracefish}
               alt="gracefish"
                width={150}
                height={150}
                unoptimized={true}
              />
            <div className='grace'>grace isabel gius</div>
            <Image className='skyfish'
               src={skyfish}
               alt="skyfish"
                width={150}
                height={150}
                unoptimized={true}
              />
            <div className='skyfish'>sky kistler</div>
    </main>
  );
}