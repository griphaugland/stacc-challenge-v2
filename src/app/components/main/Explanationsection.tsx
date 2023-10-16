import React from 'react'
import { Roboto, Bowlby_One } from 'next/font/google';
const bowlbyOne = Bowlby_One({ weight: "400", subsets: ['latin'] });
const roboto = Roboto({ weight: "400", subsets: ['latin'] });
const Explanation = () => {
  return (
    <section className="bottom flex justify-center">
    <div className="content-bottom w-1/2 gap-6 flex flex-col items-start">
        <h3 className={`${bowlbyOne.className} w-full text-m`}>Forklaring</h3>
        <p className={`${roboto.className}`}>
            Har du en ting som du er svak for hver gang du er på butikken?
        </p>
        <p className={`${roboto.className}`}>
            Med denne appen fra EKSEMPELBANK kan du sette opp en widget som du kan trykke på hver gang du klarer å holde deg!
        </p>
        <p className={`${roboto.className}`}>
            På denne måten sparer du penger ved å øve deg på selvkontroll. Etter at tiden er gått ut blir pengene dine + renter tilgjengelig i banken igjen!
        </p>
        <p className={`${roboto.className}`}>
            Begynn å spare nå!
        </p>

  </div>
</section>
  )
}

export default Explanation