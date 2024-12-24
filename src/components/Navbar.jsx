"use client"
import React, { useEffect, useState, useCallback } from "react";
import Drawer from '@mui/material/Drawer';
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronDown } from 'lucide-react'
import RequestAppointment from "@/app/clinicLocation/[city]/RequestAppointment";

const links = [
  { id: 1, title: 'Home', path: '/', active: '/' },
  { id: 2, title: 'rTMS', path: '/pages/tms', active: '/pages/tms' },
  {
    id: 3, title: 'Services', path: '/service', active: '/service', child: [
      { id: 1, title: 'Therapy', path: '/services/therapy', active: '/services/therapy' },
      { id: 3, title: 'Psychiatry', path: '/services/psychiatry', active: '/services/psychiatry' },
      { id: 13, title: 'Clinical Assessments', path: '/clinicalAssessment', active: '/clinicalAssessment' }
    ]
  },
  {
    id: 4, title: 'Our Clinic Locations', path: '/location', active: '/location', child: [
      { id: 1, title: 'Greater Kailash, New Delhi', path: '/clinicLocation/New-Delhi', active: '/clinicLocation/New-Delhi' },
      { id: 2, title: 'Whitefield, Bengaluru', path: '/clinicLocation/Bengaluru-Whitefield', active: '/clinicLocation/Bengaluru-Whitefield' },
      { id: 3, title: 'Hebbal, Bengaluru', path: '/clinicLocation/Bengaluru-Hebbal', active: '/clinicLocation/Bengaluru-Hebbal' }
    ]
  },
  { id: 5, title: 'Our Experts', path: '/pages/ourExpert', active: '/pages/ourExpert' },
];

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  
  const [open, setOpen] = useState(false);
  const [activeParent, setActiveParent] = useState(null);
  const [drawerAnchor, setDrawerAnchor] = useState("left");

  // Update drawer anchor based on screen size
  useEffect(() => {
    const updateAnchor = () => {
      setDrawerAnchor(window.innerWidth < 640 ? "right" : "left");
    };
    updateAnchor();
    window.addEventListener("resize", updateAnchor);
    return () => window.removeEventListener("resize", updateAnchor);
  }, []);

  const handleNavigate = useCallback((path, hasChildren, id) => {
    if (hasChildren) {
      setActiveParent(activeParent === id ? null : id);
    } else {
      router.push(path);
      setOpen(false); // Close the drawer after navigation
    }
  }, [activeParent, router]);

  const handleNavigateButton = useCallback((path) => {
    router.push(path);
    setOpen(false); // Close the drawer after navigation
  }, [router]);

  const MobileView = () => (
    <>
      <header className="flex items-center flex-row-reverse md:flex-row justify-between px-6 md:px-16 py-0">
        <div onClick={() => setOpen(true)} className="cursor-pointer">
          <img src="/home/menu.svg" alt="Menu" />
        </div>
        <div onClick={() => router.push("/")} className="cursor-pointer w-[129px] h-[90px]">
          <img className="cursor-pointer w-full h-full" src="/home/logoMain.svg" alt="Logo" />
        </div>
      </header>
      <Drawer anchor={drawerAnchor} open={open} onClose={() => setOpen(false)}>
        <div className="w-[261px] px-2 py-6 select-none md:w-auto">
          <div className="flex justify-end">
            <img onClick={() => setOpen(false)} className="w-[30px] h-[30px] cursor-pointer" src="/home/close.svg" alt="Close Menu" />
          </div>
          <div className="py-4">
            {links.map((link) => (
              <div key={link.id}>
                <div
                  className={`flex cursor-pointer justify-between px-8 py-4 mb-2 ${link.active === pathname ? "font-bold bg-[#F8A51C] rounded-lg text-white" : "text-gray-500"}`}
                  onClick={() => handleNavigate(link.path, link.child, link.id)}
                >
                  <div>
                    <p className="font-semibold">{link.title}</p>
                  </div>
                  {link.child && <p>{activeParent === link.id ? "v" : ">"}</p>}
                </div>
                {link.child && activeParent === link.id && (
                  <div className="ml-11 flex flex-col">
                    {link.child.map((child) => (
                      <span
                        key={child.id}
                        onClick={() => handleNavigate(child.path, false)}
                        className={`mb-2 cursor-pointer ${child.active === pathname ? "font-bold bg-[#F8A51C] rounded-lg p-2 text-white" : "text-gray-400"}`}
                      >
                        <span className="text-sm whitespace-nowrap"><span className="font-bold text-xl">-</span>{child.title}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mb-4">
            <button onClick={() => handleNavigateButton('/assesment')} className="bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg w-full py-3 mb-4 text-white text-sm font-semibold">
              SELF ASSESSMENT
            </button>
            <RequestAppointment name={'SCHEDULE CONSULTATION'} customStyle="bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg w-full py-3 mb-4 text-white text-sm font-semibold" />
            <RequestAppointment name={'CONTACT US'} customStyle="bg-[#F8A51C] hover:bg-yellow-500 active:bg-yellow-600 rounded-lg w-full py-3 text-white text-sm font-semibold" />
          </div>
        </div>
      </Drawer>
    </>
  );

  const DesktopView = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);

    const toggleDropdown = useCallback((event, id) => {
      if (openDropdown === id) {
        setAnchorEl(null);
        setOpenDropdown(null);
      } else {
        setAnchorEl(event.currentTarget);
        setOpenDropdown(id);
      }
    }, [openDropdown]);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (anchorEl && !anchorEl.contains(event.target)) {
          setOpenDropdown(null);
          setAnchorEl(null);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [anchorEl]);

    return (
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0" onClick={() => router.push("/")}>
              <div className="cursor-pointer w-[129px] h-[90px]">
                <img className="cursor-pointer w-full h-full" src="/home/logoMain.svg" alt="Logo" />
              </div>
            </div>
            <div className="hidden md:flex items-center">
              {links.map((link) => (
                <div key={link.id} className="relative">
                  {link.child ? (
                    <div>
                      <button
                        onClick={(event) => toggleDropdown(event, link.id)}
                        className={`flex items-center space-x-1 text-black px-3 py-2 rounded-md text-base font-semibold ${pathname === link.active ? "underline decoration-2" : ""}`}
                      >
                        <span>{link.title}</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      {openDropdown === link.id && (
                        <div ref={setAnchorEl} className="absolute z-10 -ml-4 mt-3 transform px-2 w-[300px]">
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid bg-white">
                              {link.child.map((childLink) => (
                                <Link key={childLink.id} href={childLink.path} className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === childLink.active ? "bg-orange-500 text-white" : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"}`}>
                                  {childLink.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={link.path} className={`px-3 py-2 rounded-md text-base font-semibold ${pathname === link.active ? "underline decoration-2 text-orange-500 hover:text-orange-500" : ""}`}>
                      {link.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div>
              <RequestAppointment name={"CONTACT US"} customStyle="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500" />
            </div>
          </div>
        </div>
      </nav>
    );
  };

  return (
    <div className='bg-white p-0 top-0 left-0 right-0 z-50'>
      <div className="select-none">
        <div className="md:hidden">
          <MobileView />
        </div>
      </div>
      <div className="hidden md:block">
        <DesktopView />
      </div>
    </div>
  );
}

export default Navbar;
