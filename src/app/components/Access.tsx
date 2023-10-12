"use client";
import React, { useState, ChangeEvent, useRef, useEffect } from 'react';
import { Bowlby_One, Share_Tech_Mono } from 'next/font/google';
import Validate from './Validate';
const shareTechMono = Share_Tech_Mono({ weight: "400", subsets: ['latin'] });
const bowlbyOne = Bowlby_One({ weight: "400", subsets: ['latin'] });
let additionalClassNames = 'box-border h-screen w-full flex flex-col justify-center items-center';

const Access = () => {
  useEffect(() => {
    Validate();
  }, []);
  const formRef = useRef<HTMLFormElement>(null);
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const accountName = document.querySelector<HTMLInputElement>('#access__container__form__input-account-name');
    let data = {
      lockTime: currentValue,
      accountName: accountName?.value,
    };
    let stringified = JSON.stringify(data);
    if (accountName) {
      localStorage.setItem('account', stringified);
      window.location.href = '/impuls-appen';
    }
  };

  const [currentValue, setCurrentValue] = useState(0);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 12) {
      setCurrentValue(newValue);
    }
  };

  const increment = () => {
    if (currentValue < 12) {
      setCurrentValue(prevValue => prevValue + 1);
    }
  };

  const decrement = () => {
    if (currentValue > 0) {
      setCurrentValue(prevValue => prevValue - 1);
    }
  };

  return (
    <div className={`${additionalClassNames} ${shareTechMono.className}`}>
      <div className="access__container p-4">
        <div className="access__container__title">
          <h1>Sett opp</h1><b className={bowlbyOne.className}>IMPULSKNAPPEN</b>
        </div>
        <form ref={formRef} className="access__container__form gap-2 grid mt-6" onSubmit={handleFormSubmit}>
          <label className='col' htmlFor="access__container__form__input-lock-time">Hvor lenge skal pengene dine låses?(antall mnd)</label>
          <div className='inputCounter p-3 py-5 flex align-center justify-center'>
            <button className='counter-btn decrement' onClick={(e) => {
              e.preventDefault();
              decrement()
            }}>-</button>
            <input
              className='col counter-input'
              type="number"
              value={currentValue}
              min={0}
              max={12}
              id="access__container__form__input-lock-time"
              onChange={handleInputChange}
            />
            <button className='counter-btn increment' onClick={(e) => {
              e.preventDefault();
              increment()
            }}>+</button>
          </div>
          <label className='col' htmlFor="access__container__form__input-account-name">Hva skal impulssparepengene dine gå til?</label>
          <input className='col saving-target' type="text" id="access__container__form__input-account-name" />
          <button className='col saving-target-button' type="submit">Lag konto</button>
        </form>
      </div>
    </div>
  );
};

export default Access;
