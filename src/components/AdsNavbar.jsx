import { useParams } from 'next/navigation'
import React from 'react'
import {adsPageContent} from '../adsPageContent'
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
  const expertService = params.service;
  const current_condition = params.condition?.toLowerCase();

   const currentPageContent = adsPageContent[city]?.[expertService]?.[current_condition];

  //  console.log("adsPageContent[city]?.[expertService]?.[current_condition]", adsPageContent[city]?.[expertService]?.[current_condition].headline_2_pinned)
  return (
    <header className="flex items-center justify-between px-6 md:px-16 py-0">
{/* Logo on the left */}
  <div className="cursor-pointer w-[100px] h-[70px] md:w-[120px] md:h-[100px]">
    <img className="cursor-pointer w-full h-full" src="/home/logoMainCropped.svg" />
  </div>
      {/* {
        locationContent[city]?.price &&
        <div className="text-xs md:text-lg hidden md:block  text-orange-500 font-semibold mt-1 text-start whitespace-nowrap">
          {locationContent[city]?.price}
        </div>
      } */}

{/* put price at top */}
      {/* Headline on the right */}
  {currentPageContent?.headline_2_pinned && (
    <div className="text-xs md:text-base text-orange-500 font-semibold mt-1 text-end whitespace-nowrap">
      {currentPageContent.headline_2_pinned}
    </div>
  )}



    </header>
  )
}

export default AdsNavbar