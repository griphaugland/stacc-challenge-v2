import React from 'react'
import Arrowdown from '../design/arrowdown'
import Arrowup from '../design/arrowup'


const Valuesection = () => {
  return (
    <section
    className="middle-bottom flex justify-center relative gap-4 items-center flex-col"
>
    <div className="button-container gap-5 flex items-center justify-center">
        <button
            id="arrowDown"
            className="arrow arrowdown flex items-center justify-center"
        >
        {/*     <Arrowdown/> */}
        </button>
        <div className="button-container flex flex-col">
            <div className="flex flex-row items-center justify-around">
                <p className="text-l" id="inputValue"></p>
                <p className="text-s">KR</p>
            </div>
            <p className="text-xs">per trykk</p>
        </div>
        <button
            id="arrowUp"
            className="arrow arrowup flex items-center justify-center"
        >
         {/*    <Arrowup/> */}
        </button>
    </div>
    <p id="toBeCharged" className=""></p>
    <div className="w-20 black"></div>
</section>
  )
}

export default Valuesection