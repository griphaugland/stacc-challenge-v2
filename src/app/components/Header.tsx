"use client";
import React, { useEffect, useRef} from 'react'
import Validate from './Validate'
import { Bowlby_One, Share_Tech_Mono } from 'next/font/google';
const shareTechMono = Share_Tech_Mono({ weight: "400", subsets: ['latin'] });

const Header = () => {
  useEffect(() => {
    Validate();
  }, []);

  function startOver() {
    localStorage.clear();
    window.location.href = '/';
  }
  
  return (
    <>
    <header className={`flex flex-col items-center justify-center ${shareTechMono.className}`}>
      <button onClick={startOver} className="return">
      <svg width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM19 3.5L1 3.5L1 4.5L19 4.5L19 3.5Z" fill="black"/>
      </svg>
      </button>
    </header>
    </>
  )
}

export default Header