"use client";
import React from 'react'
import Explanation from './Explanationsection'
import { useRef, useEffect } from 'react'

const ExplanationPopup = () => {
    const btnRef = useRef<HTMLButtonElement>(null)
    const popUpRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Hide the popUpRef by default
        popUpRef.current?.classList.add('hide')
    }, [])

    const togglePopUp = () => {
        // Toggle the show/hide class of the popUpRef
        popUpRef.current?.classList.toggle('show')
        popUpRef.current?.classList.toggle('hide')
    }

    return (
        <>
            <button ref={btnRef} className='info-icon' onClick={togglePopUp}>
            </button>
            <div ref={popUpRef} className="popUp">
                <Explanation/>
            </div>
        </>
    )
}

export default ExplanationPopup