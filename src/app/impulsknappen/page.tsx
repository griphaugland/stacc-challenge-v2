"use client";
import React, { useState, ChangeEvent, useRef, useEffect } from 'react';
import Header from '../components/Header'
import { Bowlby_One_SC, Share_Tech_Mono  } from 'next/font/google'
import Validate from '../components/Validate'
import Main from '../components/Main'
export const bodyFont = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
})
export const displayFont = Bowlby_One_SC({
  weight: '400',
  subsets: ['latin'],
})

export default function Landing() {
  useEffect(() => {
    Validate();
    document.title = 'Impulsknappen';
  }, []);



  return (
    <>
    <Header/>
    <Main/>
    </>
  )
}