import { useParams } from 'next/navigation'
import React from 'react'

const AdsNavbar = () => {
  // const city = params.location;
  const params = useParams()
  // console.log("nav params", params)
  const city = params.location;
  const expertCondition = params.general;
  const location = city === 'gk' ? 'New Delhi - Greater Kailash 1' : city === 'wf' ? 'Bengaluru - Whitefield' : city === 'hb' ? 'Bengaluru - Hebbal' : '';
  const expertText = expertCondition === 'psychologist' ? 'Psychologist' : expertCondition === 'psychiatrist' ? 'Psychiatrist' : expertCondition === 'therapist' ? "therapist" : 'Psychologist';
  const locationContent = {
    "gk": {
      city: 'New Delhi',
      area: "Greater Kailash 1",
      price: expertText === "therapist" ? "Therapy from Rs. 1800 to Rs. 2500 per session" : "",
    },
    "wf": {
      city: 'Bengaluru',
      area: "Whitefield (Varthur Road)",
      price: expertText === "therapist" ? "Therapy at Rs. 1750 per session" : "",
    },
    "hb": {
      city: 'Bengaluru',
      area: "Hebbal (Aster CMI Hospital)",
      price: expertText === "therapist" ? "First therapy session at Rs. 1500!" : "",
    }
  }
  return (
    <header className="flex items-center justify-between px-6 md:px-16 py-0">

      <div className="cursor-pointer  w-[129px] h-[90px] ">
        <img className="cursor-pointer w-full h-full" src="/home/logoMain.svg" />
      </div>
      {
        locationContent[city]?.price &&
        <div className="text-xs md:text-lg hidden md:block  text-orange-500 font-semibold mt-1 text-start whitespace-nowrap">
          {locationContent[city]?.price}
        </div>
      }

    </header>
  )
}

export default AdsNavbar