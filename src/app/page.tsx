
import { useEffect } from 'react'
import Access from './components/Access'
import { Bowlby_One_SC, Share_Tech_Mono  } from 'next/font/google'
import Validate from './components/Validate'
export const bodyFont = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
})
export const displayFont = Bowlby_One_SC({
  weight: '400',
  subsets: ['latin'],
})

export default function Landing() {
  
  return (
    <>
    <Access/>
    </>
  )
}