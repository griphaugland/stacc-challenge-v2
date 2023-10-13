"use client";
import React, { useRef, useEffect } from 'react';
import Impulsappen from '../design/impuls-appen';
import getProducts from '../components/Api'

interface AccountInfo {
  lockTime: string;
  accountName: string;
}

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

export function getAccountDetails(): AccountInfo | null {
  const accountDetails = localStorage.getItem('account');
  if (accountDetails) {
    return JSON.parse(accountDetails);
  }
  return null;
}

const Buttonsection = () => {
  const productImageRef = useRef<HTMLImageElement>(null);
  const parsedMain = mainProduct();
  const parsedAccount = getAccountDetails();

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
      countBox.style.fontSize = `${2}rem`;
      countBox.style.transform = `translate(${posX}px, ${posY}px)`;
    }
  };

  return (
    <div className="button-container flex flex-col">
      <div className={`text-container__text`}>
        <h2 className="productName">{parsedMain?.name}</h2>
      </div>
      <section className="middle-top h-full flex justify-center flex-col relative items-center">
        <button className="impulsappen" ref={clickBtnRef} onClick={countClicks} id="impulsappen">
          <img id='productImage' ref={productImageRef} />
          <h2 className="productPrice">{parsedMain?.current_price ? parsedMain?.current_price + "kr" : ""}</h2>
        </button>
      </section>
    </div>
  );
};

export default Buttonsection;

