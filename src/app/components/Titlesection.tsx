import React from 'react'
import { Bowlby_One } from 'next/font/google';
const bowlbyOne = Bowlby_One({ weight: "400", subsets: ['latin'] });


const Titlesection = () => {
  return (
    <section className='title-section w-100 flex justify-center'>
    <div className="top-container ">
    <div className="text-container">
      <h5 className="text-s">Eksempelbanken presenter</h5>
      <h1 className={`mainLogo ${bowlbyOne.className}`}>IMPULSKNAPPEN</h1>
    </div>
      <div className="top-text text-center text-xs">
        En krone her, en krone der
        <div id="click" className="text-xl black"></div>
      </div>
    </div>
    </section>
  )
}

export default Titlesection