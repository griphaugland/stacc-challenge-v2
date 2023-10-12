import React from 'react'
import Impulsknappen from '../design/impulsknappen'

const Buttonsection = () => {
  return (
    <section
    className="middle-top h-full mt-4 flex justify-center relative items-center"
>
    <button className="impulsknappen" id="impulsknappen">
       <Impulsknappen/>
    </button>
</section>
  )
}

export default Buttonsection