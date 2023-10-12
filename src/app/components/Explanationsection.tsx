import React from 'react'

const Explanation = () => {
  return (
    <section className="bottom flex flex-row mt-16">
    <div className="w-1/3 min-h-screen">
        <img
            className="pattern-bottom"
            alt="colorful pattern"
            src="./design/svg/pattern-long.svg"
        />
    </div>
    <div className="w-2/3 content-bottom gap-6 flex flex-col items-start pr-6">
        <h3 className="font-display w-full text-m">FORKLARING</h3>
        <p className="text-s">
            Kjenner du at du sliter med å spare penger fordi det er så mye fett
            å bruke dem på?
        </p>
        <p className="text-s">
            Med denne widgeten fra EKSEMPELBANK, kan du bare trykke på
            IMPULSKNAPPEN når du skal til å impulshandle!
        </p>
        <p className="text-s">
            Pengene låses på IMPULSKONTOEN i banken din i minst 2 måneder.
        </p>
        <p className="text-s">
            Kanskje du kan bruke dem på syden-turen du har tenkt på så lenge?
        </p>
        <div className="showAccountCard">
            <p>Du sparer til:</p>
            <div className="account-card gap-2">
                <div className="container">
                    <h5 className="savings-goal-account text-xs">0</h5>
                </div>
                <div className="container">
                    <div className="total-saved text-xs text-end">0</div>
                    <p className="total-saved-timeLock text-xs text-end">0</p>
                </div>
            </div>
            <div
                className="button-container w-100 flex align-center justify-center gap-7 mt-5"
            >
                <button className="endre">Endre</button>
    </div>
  </div>
</div>
</section>
  )
}

export default Explanation