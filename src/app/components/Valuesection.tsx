"use client";
import React from 'react'
import getProducts from './Api'
import { mainProduct, getAccountDetails } from './Buttonsection'

const Valuesection = () => {
  const parsedMain = mainProduct();
  const accountDetails = getAccountDetails();

  return (
        <section
        className="middle-bottom flex justify-center relative gap-4 items-center flex-col">   
            <div className="flex flex-col items-center justify-center">
            <div className={`text-container__text`}>
        <h2 className="left">Du sparer til</h2><h2>{accountDetails?.accountName}</h2>
      </div>
      <div className={`text-container__text`}>
        <h2 className="left">Låses</h2><h2>{accountDetails?.lockTime} måneder</h2>
      </div>
                <h3 className="text-center">Du har spart</h3>
                <h3 className="text-center" id="countBox">0</h3>
                <button className='fasttrekk-btn'>
                  Fast trekk
                </button>
                <button className='statistikk-btn'>
                  Statistikk
                </button>
            </div>
        </section>
  )
}

export default Valuesection