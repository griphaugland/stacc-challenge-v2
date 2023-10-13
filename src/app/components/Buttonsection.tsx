"use client";
import React, { useRef, useEffect } from 'react';
import Impulsappen from '../design/impuls-appen';
import getProducts from '../components/Api'


interface Product {
  name: string;
  price: number;
      id: number;
      image: string;
      current_price: number;
}

interface ProductData {
  data: Product[];
}

export function mainProduct(): Product | null {
  const mainProduct = localStorage.getItem('product');
  if (mainProduct) {
    return JSON.parse(mainProduct);
  }
  return null;
}


const Buttonsection = () => {
  const productImageRef = useRef<HTMLImageElement>(null);
  const parsedMain = mainProduct();

  useEffect(() => {
    if (productImageRef.current && parsedMain) {
      productImageRef.current.src = parsedMain.image;
    }
  }, [parsedMain]);


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
        <img id='productImage' ref={productImageRef} />
      </button>
    </section>
  );
};

export default Buttonsection;

