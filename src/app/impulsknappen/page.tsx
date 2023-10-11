import Header from '../components/Header'
import { Bowlby_One_SC, Share_Tech_Mono  } from 'next/font/google'
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
    <Header/>
    </>
  )
}