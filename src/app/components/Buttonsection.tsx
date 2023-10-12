"use client";
import React, { useRef } from 'react';
import Impulsknappen from '../design/impulsknappen';

const Buttonsection = () => {
  const clickBtnRef = useRef<HTMLButtonElement>(null);

  const countClicks = () => {
    const countBox = document.getElementById('countBox');
    if (countBox) {
      const count = parseInt(countBox.innerText);
      countBox.innerText = (count + 1).toString();
          const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;
    countBox.style.transform = `translate(${posX}px, ${posY}px)`;
    }

  };



  return (
    <section className="middle-top h-full flex justify-center relative items-center">
      <button className="impulsknappen" id="impulsknappen">
    {/*     <Impulsknappen /> */}
      </button>
      <button ref={clickBtnRef} id="clickBtn" onClick={countClicks}>
        Click me!
      </button>
      <div id="countBox">0</div>
    </section>
  );
};

export default Buttonsection;
