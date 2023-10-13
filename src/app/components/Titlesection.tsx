"use client";
import React, { useRef, useEffect, useState } from 'react';
import { Bowlby_One, Roboto } from 'next/font/google';
import productRender from './productRender';
import getProducts from './Api';
import { timeEnd } from 'console';
import Impulsappenlogo from '../design/impulsappenlogo'

const bowlbyOne = Bowlby_One({ weight: '400', subsets: ['latin'] });
const roboto = Roboto({ weight: '400', subsets: ['latin'] });

const Titlesection = () => {
  const search = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');
  const [products, setProducts] = useState([]);

  const root = useRef<HTMLDivElement>(null);

  function displayLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.classList.add('show');
    }
  }
  function hideLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.classList.remove('show');
    }
  }
  useEffect(() => {
    if (root.current) {
      productRender({ data: products }, root.current);
    }
  }, [products]);

  useEffect(() => {
    let typingTimer: ReturnType<typeof setTimeout>;

    const handleKeyUp = () => {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(() => {
        if (search.current && search.current.value.length >= 3) {
          displayLoader();
          getProducts(search.current.value)
            .then((response) => {
              setProducts(response.data);
              hideLoader();
            })
            .catch((error) => {
              hideLoader();
              console.error('Error fetching products:', error);
            });
        }
      }, 1000);
    };

    if (search.current) {
      search.current.addEventListener('keyup', handleKeyUp);
    }

    return () => {
      if (search.current) {
        search.current.removeEventListener('keyup', handleKeyUp);
      }
      hideLoader();
    };
  }, []);

  useEffect(() => {
    if (value.length === 0) {
      setProducts([]);
    }
    hideLoader();
  }, [value]);

  const handleChange = () => {
    if (search.current) {
      setValue(search.current.value);
    }
  };
    
  return (
    <section className="title-section w-100 flex justify-center">
      <div className="top-container">
        <div className="text-container">
          <h1 className={`mainLogo ${bowlbyOne.className}`}><Impulsappenlogo/></h1>

        </div>
        <div className="input-container__wrapper">
          <div className="input-container__input">
            <input
              type="text"
              ref={search}
              className={`${roboto.className}`}
              id="search"
              placeholder="Søk på det som frister..."
              onChange={handleChange}
            />
            <div  className='loader'>
              <div className="dot dot1"></div>
              <div className="dot dot2"></div>
            </div>
          </div>
          <div className="" ref={root} id="products"></div>
        </div>
      </div>
    </section>
  );
};

export default Titlesection;
