import React from 'react'
import { Roboto } from 'next/font/google';
const roboto = Roboto({ weight: "400", subsets: ['latin'] });
const Explanation = () => {
  return (
    <section className="bottom flex justify-center">
    <div className="content-bottom w-1/2 gap-6 flex flex-col items-start">
        <h3 className="w-full text-m">FORKLARING</h3>
        <p className={`${roboto.className} text-xs`}>
            Kjenner du at du sliter med å spare penger fordi alt i butikken frister?
        </p>
        <p className={`${roboto.className} text-xs`}>
            Med denne appen fra EKSEMPELBANK, kan du bare velge produktet du skal til å kjøpe
            og trykke på knappen hver gang du vil spare penger.
        </p>
        <p className={`${roboto.className} text-xs`}>
            Pengene låses på IMPULSKONTOEN i banken din i en valgfri periode opptil 1 år.
        </p>
  </div>
</section>
  )
}

export default Explanation