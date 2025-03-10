"use client"
import React from 'react'
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import RequestAppointmentGeneral from '@/app/clinicLocation/[city]/RequestAppointmentGeneral';

const locations = [
  {
    name: "Aster CMI",
    iframeSrc: "https://forms.zohopublic.in/nikhilmindf1/form/ScheduleaConsultationHebbalBangalore/formperma/RqE9YNKl1bYNAryFgvxELvCqhXm8xkK0jJYOcjk0Htc",
    area: "Bangalore North",
    bgColor: "bg-primary-orange",
    location: "Banglore Aster CMI",
    redirect: "Bengaluru-Hebbal",
    whatsapp: +919663095632,
    call: +919663095632,
    officeOpen: 10,
    officeClose: 18,
  },
  {
    name: "Whitefield",
    iframeSrc: "https://forms.zohopublic.in/nikhilmindf1/form/ScheduleaConsultationWhitefieldBangalore/formperma/n7UqoYroFADQJ-HqsYjiuY41_3pJKGRkwARxLp1vVDQ",
    area: "Bangalore East ",
    bgColor: "bg-[#F8A51C]",
    location: "Banglore Whitefield",
    redirect: "Bengaluru-Whitefield",
    whatsapp: +919663095632,
    call: +919663095632,
    officeOpen: 10,
    officeClose: 18,
  },
  {
    name: "Greater Kailash 1",
    iframeSrc: "https://forms.zohopublic.in/nikhilmindf1/form/ScheduleaConsultationLPGK/formperma/ZSzbxKx_hXcJlDGEB0w3ryiWi8oK-NfameMJkXw7mi4",
    area: "Delhi",
    bgColor: "bg-primary-orange",
    redirect: "New-Delhi",
    location: "Delhi",
    whatsapp: +919663095632,
    call: +919663095632,
    officeOpen: 10,
    officeClose: 18,
  }
];

function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const noFooterPaths = ["/ads", '/tests'];
  const shouldHideFooter = noFooterPaths.some((path) => pathname.startsWith(path));

  const LocationCard = ({ location }) => (
    <div style={{ backgroundColor: location.bgColor }} className={`${location.bgColor} py-3 px-3 rounded-lg shadow-lg select-none min-w-[270px]`}>
      <div className='flex flex-col justify-center items-center text-white mb-2'>
        <h1 className='text-2xl font-semibold'>{location.area}</h1>
        <p className='font-semibold text-sm'>{location.name}</p>
      </div>
      <div className='flex justify-center gap-6 mb-2'>
        <div className='cursor-pointer'>
          <RequestAppointmentGeneral iframeSrc={location.iframeSrc}>
            <img
              src="https://ik.imagekit.io/mwpcmpi5v/wassup.jpeg?updatedAt=1734072263762"
              className="w-[60px] h-[60px] object-contain"
              alt="WhatsApp Icon"
              loading="lazy"
            />
          </RequestAppointmentGeneral>
        </div>
      </div>
      <div className='flex justify-center '>
        <button
          onClick={() => router.push(`/clinicLocation/${location.redirect}`)}
          className='text-orange-500 border-2 border-orange-500 bg-white flex gap-3 items-center px-4 py-2 rounded-lg hover:opacity-90 shadow-lg'>
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" fill='orange' width="24" height="24" viewBox="0 0 24 24">
            <g data-name="Circle kanan">
              <path d="M12 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8z" />
              <path d="M11 16a1 1 0 0 1-.707-1.707L12.586 12l-2.293-2.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 11 16z" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <footer className="py-6 footer-gradient">


      <div className="hidden md:block">
        <div className="flex justify-center">
          <img
            className="h-[129px] w-[185px]"
            alt="Footer Logo"
            src="/home/footerLogo.svg"
            loading="lazy"
          />
        </div>

        {!shouldHideFooter && (
          <div className="mb-8 p-4 flex items-center overflow-x-scroll gap-4 md:justify-center">
            {locations.map((location, index) => (
              <LocationCard key={index} location={location} />
            ))}
          </div>
        )}
      </div>

      <div className="md:hidden">
        <div className="flex justify-center">
          <img
            className="h-[129px] w-[185px]"
            alt="Footer Logo"
            src="/home/footerLogo.svg"
            loading="lazy"
          />
        </div>

        {!shouldHideFooter && (
          <div className="mb-8 p-4 flex items-center overflow-x-scroll gap-4 md:justify-center">
            {locations.map((location, index) => (
              <LocationCard key={index} location={location} />
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center mb-3">
        <p className="text-primary-orange text-sm text-center">
          For queries related to careers <Link href="/careers">
            < span className="underline"> Click here </span> to  Explore Career Opportunities
          </Link>

        </p>
      </div>

      <div className="flex justify-center mb-3">
        <p className="text-primary-orange text-sm text-center">
          Copyright © 2024 MindfulTMS | All rights reserved. Developed and Maintained by <Link className="underline" href="https://insideoutconsult.com/">InsideOut</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
