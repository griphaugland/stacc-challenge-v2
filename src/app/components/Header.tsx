import React from 'react'
import patternTop from '../design/pattern-top.svg'
import arrowBack from '../design/arrow_back.svg'
import { Bowlby_One, Share_Tech_Mono } from 'next/font/google';
const shareTechMono = Share_Tech_Mono({ weight: "400", subsets: ['latin'] });
const bowlbyOne = Bowlby_One({ weight: "400", subsets: ['latin'] });

const Header = () => {
  return (
    <>
    <header className={`flex flex-col items-center justify-center ${shareTechMono.className}`}>
      <button className="return">
        <img src={arrowBack} className="object-cover" />
      </button>
    <div className="top-container ">
      <div className="text-container">
        <h5 className="text-xxs">Eksempelbanken presenter</h5>
        <h1 className={bowlbyOne.className}>IMPULSKNAPPEN</h1>
      </div>
        <div className="top-text text-center text-xxs">
          En krone her, en krone der
          <div id="click" className="text-xl black"></div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header