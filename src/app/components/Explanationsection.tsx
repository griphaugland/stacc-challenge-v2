import React from 'react'
import { Inter } from 'next/font/google';
const inter = Inter({ weight: "400", subsets: ['latin'] });

const Explanation = () => {
  return (
    <section className="bottom flex flex-row justify-center">
    <div className="content-bottom w-1/2 gap-6 flex flex-col items-start">
        <h3 className="w-full text-m">FORKLARING</h3>
        <p className={`${inter.className} text-xs`}>
            Kjenner du at du sliter med å spare penger fordi det er så mye fett
            å bruke dem på?
        </p>
        <p className={`${inter.className} text-xs`}>
            Med denne widgeten fra EKSEMPELBANK, kan du bare trykke på
            IMPULSKNAPPEN når du skal til å impulshandle!
        </p>
        <p className={`${inter.className} text-xs`}>
            Pengene låses på IMPULSKONTOEN i banken din i minst 2 måneder.
        </p>
        <p className={`${inter.className} text-xs`}>
            Kanskje du kan bruke dem på syden-turen du har tenkt på så lenge?
        </p>
  </div>
</section>
  )
}

export default Explanation