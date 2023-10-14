import React from 'react'
import Buttonsection from './Buttonsection'
import Valuesection from './Valuesection'
import Titlesection from './Titlesection'
import ExplanationPopup from './ExplanationPopup'
import {Roboto } from 'next/font/google';
const roboto = Roboto({ weight: "400", subsets: ['latin'] });


const Main = () => {
  return (
    <main className={`flex flex-col ${roboto.className}`}>
        <Titlesection/>
        <Buttonsection/>
        <Valuesection/>
        <ExplanationPopup/>
    </main>
  )
}

export default Main