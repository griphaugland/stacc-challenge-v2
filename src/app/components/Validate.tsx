"use client";
import { use, useEffect } from 'react';
import { Bowlby_One} from 'next/font/google';
import React from 'react'
const bowlbyOne = Bowlby_One({ weight: "400", subsets: ['latin'] });

const Validate = () => {
  useEffect(() => {
 if(!localStorage.getItem('account')) {
      setTimeout(() => {
        window.location.href = '/access';
      }, 2000);
  }
   else {
    setTimeout(() => {
       window.location.href = '/impuls-appen';
      }, 2000);
  }
}, []);


  return (
  <div className="validate-wrapper flex flex-col align-center justify-center">
    <div className="validate-container p-4">
        <div  className='validate-loader'>
          <div className="dot dot1"></div>
          <div className="dot dot2"></div>
        </div>
      <div className="access__container__title">
        <b className={bowlbyOne.className}>IMPULSKNAPPEN</b>
      </div>
    </div>
  </div>
  )
}


export default Validate