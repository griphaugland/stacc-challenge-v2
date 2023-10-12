import React from 'react'
import Buttonsection from './Buttonsection'
import Valuesection from './Valuesection'
import Explanation from './Explanationsection'
import Titlesection from './Titlesection'
import { Bowlby_One, Share_Tech_Mono } from 'next/font/google';
const shareTechMono = Share_Tech_Mono({ weight: "400", subsets: ['latin'] });

const Main = () => {
  return (
    <main className={`flex flex-col ${shareTechMono.className}`}>
        <Titlesection/>
        <Buttonsection/>
        <Valuesection/>
    </main>
  )
}

export default Main