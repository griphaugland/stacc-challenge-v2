"use client";
import React, { useRef } from 'react';
import Impulsappen from '../design/impuls-appen';
import getProducts from '../components/Api'

export function mainProduct(chosenProduct: any){
  const main = sessionStorage.getItem('product');
  if (main) {
    const parsedMain = JSON.parse(main);
    parsedMain.chosenProduct = chosenProduct;
    console.log(parsedMain)
    console.log(chosenProduct)
    sessionStorage.setItem('product', JSON.stringify(parsedMain));
    /* if (ProductImage.current) {
      ProductImage.current.src = chosenProduct.image;
    } */
  }
}

const Buttonsection = () => {


  const clickBtnRef = useRef<HTMLButtonElement>(null);
  const countClicks = () => {
    const countBox = document.getElementById('countBox');
    if (countBox) {
      const count = parseInt(countBox.innerText);
      countBox.innerText = (count + 1).toString();
      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;
      countBox.style.position = 'absolute';
      countBox.style.fontSize = `${Math.random() * 10 + 2}rem`;
      countBox.style.transform = `translate(${posX}px, ${posY}px)`;
    }
  };

  return (
    <section className="middle-top h-full flex justify-center relative items-center">
      <button className="impulsappen" ref={clickBtnRef} onClick={countClicks} id="impulsappen">
        <img /* ref={ProductImage} */ ></img>
        <Impulsappen />
      </button>
    </section>
  );
};

export default Buttonsection;
