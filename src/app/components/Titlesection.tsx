"use client";
import React, { useRef, useEffect, useState } from 'react';
import { Bowlby_One, Inter } from 'next/font/google';
import productRender from './productRender';
import getProducts from './Api';

const bowlbyOne = Bowlby_One({ weight: '400', subsets: ['latin'] });
const inter = Inter({ weight: '400', subsets: ['latin'] });

const Titlesection = () => {
  const search = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (value.length >= 3) {
      getProducts(value)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        });
    }
  }, [value]);

  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (root.current) {
      productRender({ data: products }, root.current);
    }
  }, [products]);

  const handleChange = () => {
    if (search.current) {
      setValue(search.current.value);
    }
  };

  return (
    <section className="title-section w-100 flex justify-center">
      <div className="top-container">
        <div className="text-container">
          <h5 className="text-s">Eksempelbanken presenter</h5>
          <h1 className={`mainLogo ${bowlbyOne.className}`}>IMPULS-APPEN</h1>
        </div>
        <div className="top-text text-center text-xs">En krone her, en krone der</div>
        <div className="input-container__wrapper">
          <div className="input-container__input">
            <input
              type="text"
              ref={search}
              className={`${inter.className}`}
              id="search"
              placeholder="Søk på det som frister..."
              onChange={handleChange}
            />
          </div>
          <div className="" ref={root} id="products"></div>
        </div>
      </div>
    </section>
  );
};

export default Titlesection;
