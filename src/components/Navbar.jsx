"use client"
import PractoWidget from "@/app/clinicLocation/[city]/PractoWidget";
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem, Select, FormControl, InputLabel, Button, Container, Popover } from '@mui/material';
import React, { useEffect, useState } from "react";
import Drawer from '@mui/material/Drawer';
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronDown } from 'lucide-react'
import RequestAppointment from "@/app/clinicLocation/[city]/RequestAppointment";


const links = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    active: '/',
  },
  // {
  //   id: 2,
  //   title: 'Blogs',
  //   path: '/blogs',
  //   active: '/blogs',
  // },
  {
    id: 2,
    title: 'rTMS',
    path: '/pages/tms',
    active: '/pages/tms',
  },
  {
    id: 3,
    title: 'Services',
    path: '/service',
    active: '/service',
    child: [
      {
        id: 1,
        title: 'Therapy',
        path: '/services/therapy',
        active: '/services/therapy',
      },
      // {
      //   id: 2,
      //   title: 'TMS Treatment',
      //   path: '/pages/tmsPage',
      //   active: '/pages/tmsPage',
      // },
      {
        id: 3,
        title: 'Psychiatry',
        path: '/services/psychiatry',
        active: '/services/psychiatry',

      },
      {
        id: 13,
        title: 'Clinical Assessments',
        path: '/clinicalAssessment',
        active: '/clinicalAssessment',
      },
    ]
  },

  {
    id: 4,
    title: 'Our Clinic Locations',
    path: '/location',
    active: '/location',
    child: [
      {
        id: 1,
        title: 'Greater Kailash, New Delhi',
        path: '/clinicLocation/New-Delhi',
        active: '/clinicLocation/New-Delhi',
      },
      {
        id: 2,
        title: 'Whitefield, Bengaluru',
        path: '/clinicLocation/Bengaluru-Whitefield',
        active: '/clinicLocation/Bengaluru-Whitefield',
      },
      {
        id: 3,
        title: 'Hebbal, Bengaluru',
        path: '/clinicLocation/Bengaluru-Hebbal',
        active: '/clinicLocation/Bengaluru-Hebbal',
      },
    ]
  },
  {
    id: 5,
    title: 'Our Experts',
    path: '/pages/ourExpert',
    active: '/pages/ourExpert',
  },
  // {
  //   id: 51,
  //   title: 'Health Library',
  //   path: '/healthLibrary',
  //   active: '/healthLibrary',
  // },
]


const locations = [
  {
    name: "Aster CMI",
    area: "Bangalore North",
    bgColor: "bg-primary-orange",
    location: "Banglore Aster CMI",
    whatsapp: +919663095632,
    call: +919663095632,
    params: "Bengaluru-Hebbal"
  },
  {
    name: "Whitefield",
    area: "Bangalore North",
    bgColor: "bg-[#F8A51C]",
    location: "Banglore Whitefield",
    whatsapp: +919663095632,
    call: +919663095632,
    params: "Bengaluru-Whitefield"
  },
  {
    name: "Greater Kailash 1",
    area: "Delhi",
    bgColor: "bg-primary-orange",
    location: "Delhi",
    whatsapp: +919663095632,
    call: +919663095632,
    params: "New-Delhi"
  }
];

function Navbar() {
  const router = useRouter();
  const location = { pathname: usePathname() };
  const [requestModal, setRequestModal] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    doctor: '',
    location: '',
    message: ''
  });
  const [isBusinessHours, setIsBusinessHours] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(location.pathname);
  const [open, setOpen] = useState(false);
  const [activeParent, setActiveParent] = useState(null); // Track which parent link is expanded
  const [drawerAnchor, setDrawerAnchor] = useState("left"); // State to manage drawer anchor position

  // const toggleDropdown = (id) => {
  //   setOpenDropdown(openDropdown === id ? null : id)
  // }


  useEffect(() => {
    setCurrentLocation(location.pathname);
    window.scrollTo(0, 0);

    // Set the drawer anchor based on window width
    const updateAnchor = () => {
      setDrawerAnchor(window.innerWidth < 640 ? "right" : "left");
    };

    // Update anchor on component mount
    updateAnchor();

    // Add event listener to handle window resize
    window.addEventListener("resize", updateAnchor);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateAnchor);
    };
  }, [location.pathname]);

  const toggleDrawer = (open) => (event) => {
    setOpen(open);
  };

  const handleNavigate = (path, hasChildren, id) => {
    if (hasChildren) {
      setActiveParent(activeParent === id ? null : id); // Toggle the active parent link
    } else {
      router.push(path);
      setOpen(false); // Close the drawer after navigation
    }
  };
  const handleNavigateButton = (path) => {
    router.push(path);
    setOpen(false); // Close the drawer after navigation
  };


  useEffect(() => {
    setCurrentLocation(location.pathname);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // const pathname = usePathname()

  // console.log(city, pathname)

  // const currentLocation = locations.find((location)=>{
  //     if(city===location.params){
  //         return location
  //     }
  // })
  useEffect(() => {
    const handlePopState = () => {
      if (requestModal) {
        setRequestModal(false);
      }
    };

    if (requestModal) {
      window.history.pushState(null, '');
      window.addEventListener('popstate', handlePopState);
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [requestModal]);

  useEffect(() => {
    const checkBusinessHours = () => {
      const now = new Date();
      const hours = now.getHours();
      if (hours >= 10 && hours < 18) {
        setIsBusinessHours(true);
      } else {
        setIsBusinessHours(false);
      }
    };
    checkBusinessHours();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    toggleRequestModal();
  }

  const toggleRequestModal = () => {
    setRequestModal(prev => !prev);
    setFormData({
      name: '',
      email: '',
      phone: '',
      doctor: '',
      location: '',
      message: '',
      preferredTime: ''
    });
  }

  const isFormValid = () => {
    return formData.name && formData.email && formData.phone && formData.location;
  }
  const contactUsClick = () => {
    toggleRequestModal()
    // router.push("/contactUs")
  }

  useEffect(() => {
    const newWhatsappNumber = locations?.find((location) => {
      return location.location === formData?.location
    })?.whatsapp
    setFormData((prev) => ({
      ...prev,
      whatsapp: newWhatsappNumber,
    }))
    // console.log(newWhatsappNumber)
  }, [formData?.location])


  const [anchorEl, setAnchorEl] = useState(null);

  const toggleDropdown = (event, id) => {
    if (openDropdown === id) {
      setAnchorEl(null);
      setOpenDropdown(null);
    } else {
      setAnchorEl(event.currentTarget);
      setOpenDropdown(id);
    }
  };

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

  const MobileView = () => {
    return (
      <>

        <header className="flex items-center flex-row-reverse md:flex-row justify-between px-6 md:px-16 py-0">
          <div onClick={() => setOpen(true)} className="cursor-pointer">
            <img src="/home/menu.svg" />
          </div>
          <div onClick={() => router.push("/")} className="cursor-pointer  w-[129px] h-[90px] ">
            <img className="cursor-pointer w-full h-full" src="/home/logoMain.svg" />
          </div>

        </header>
        <Drawer
          anchor={drawerAnchor}
          open={open}
          onClose={toggleDrawer(false)}
          className=""
        >
          <div className="w-[261px] px-2 py-6 select-none md:w-auto">
            <div className="flex justify-end">
              <img
                onClick={() => setOpen(false)}
                className="w-[30px] h-[30px] cursor-pointer"
                src="/home/close.svg"
              />
            </div>
            <div className="py-4 ">
              {links.map((link) => (
                <div key={link.id}>
                  <div
                    className={`flex cursor-pointer justify-between px-8 py-4 mb-2 ${(link.active === currentLocation) ? "font-bold bg-[#F8A51C] rounded-lg text-white" : "text-gray-500"}`}
                    onClick={() => handleNavigate(link.path, link.child, link.id)}
                  >
                    <div>
                      <p className="font-semibold ">{link.title}</p>
                    </div>
                    {link.child && <p>{activeParent === link.id ? "v" : ">"}</p>}
                  </div>
                  {link.child && activeParent === link.id && (
                    <div className=" ml-11 flex flex-col">
                      {link.child.map((child) => (
                        <span
                          key={child.id}
                          onClick={() => handleNavigate(child.path, false)}
                          className={`mb-2  cursor-pointer ${(child.active === currentLocation) ? "font-bold bg-[#F8A51C] rounded-lg p-2  text-white" : "text-gray-400"}`}
                        >
                          <span className="text-sm whitespace-nowrap "><span className="font-bold text-xl">-</span>{child.title}</span>
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
              {/* <button onClick={contactUsClick} className="bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg w-full py-3 mb-4 text-white text-sm font-semibold">
                SCHEDULE CONSULTATION
              </button> */}
              <RequestAppointment name={'SCHEDULE CONSULTATION'} customStyle={`bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg w-full py-3 mb-4 text-white text-sm font-semibold`}/>

              {/* <button onClick={contactUsClick} className="bg-[#F8A51C] hover:bg-yellow-500 active:bg-yellow-600 rounded-lg w-full py-3 text-white text-sm font-semibold">
                CONTACT US
              </button> */}
              <RequestAppointment name={'CONTACT US'} customStyle={`bg-[#F8A51C] hover:bg-yellow-500 active:bg-yellow-600 rounded-lg w-full py-3 text-white text-sm font-semibold`}/>
            </div>
          </div>
        </Drawer>
      </>
    )
  }

  const DesktopView = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const location = { pathname: usePathname() };

    const toggleDropdown = (event, id) => {
      if (openDropdown === id) {
        setAnchorEl(null);
        setOpenDropdown(null);
      } else {
        setAnchorEl(event.currentTarget);
        setOpenDropdown(id);
      }
    };

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
            {/* Logo */}
            <div className="flex-shrink-0">
              <div
                onClick={() => router.push("/")}
                className="cursor-pointer w-[129px] h-[90px]"
              >
                <img
                  className="cursor-pointer w-full h-full"
                  src="/home/logoMain.svg"
                  alt="Logo"
                />
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center ">
              {links.map((link) => (
                <div key={link.id} className="relative">
                  {link.child ? (
                    <div>
                      <button
                        onClick={(event) => toggleDropdown(event, link.id)}
                        className={`flex items-center space-x-1 text-black  px-3 py-2 rounded-md text-base font-semibold ${location.pathname === link.active
                          ? "underline decoration-2"
                          : ""
                          }`}
                      >
                        <span>{link.title}</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      {openDropdown === link.id && (
                        <div
                          ref={setAnchorEl}
                          className="absolute z-10 -ml-4 mt-3 transform px-2 w-[300px]"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid bg-white">
                              {link.child.map((childLink) => (
                                <Link
                                  key={childLink.id}
                                  href={childLink.path}
                                  className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === childLink.active
                                      ? "bg-orange-500 text-white"
                                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                    }`}
                                >
                                  {childLink.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.path}
                      className={` px-3 py-2 rounded-md text-base font-semibold ${location.pathname === link.active
                        ? "underline decoration-2 text-orange-500 hover:text-orange-500"
                        : ""
                        }`}
                    >
                      {link.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Button */}
            <div>
             
              <RequestAppointment name={"CONTACT US"}  customStyle={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500`}/>
            </div>
          </div>
        </div>
      </nav>
    );
  };


  return (
    <div className=' bg-white p-0 top-0 left-0 right-0 z-50'>
      <div className="select-none">
        <div className=" md:hidden">
          <MobileView />
        </div>
      </div>

      <div className="hidden md:block">
        <DesktopView />
      </div>

      <Dialog open={requestModal} onClose={toggleRequestModal}>
        <DialogTitle className='text-center font-semibold'>Request an Appointment</DialogTitle>
        <DialogContent>
          {!isFormValid() && <div>
            <p className='text-center text-red-600 font-semibold'>Please fill in the form below to request an appointment.</p>
          </div>}
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="phone"
            label="Phone Number"
            type="tel"
            fullWidth
            value={formData.phone}
            onChange={handleChange}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel id="location-label">Location</InputLabel>
            <Select
              labelId="location-label"
              name="location"
              value={formData.location || currentLocation?.location}
              onChange={handleChange}
            >
              <MenuItem value="Delhi">Delhi</MenuItem>
              <MenuItem value="Banglore Aster CMI">Banglore Aster CMI</MenuItem>
              <MenuItem value="Banglore Whitefield">Banglore Whitefield</MenuItem>
            </Select>
            <div className='py-4 flex flex-col justify-center items-center gap-5'>
              <div className='w-full mb-3'>
                {!isBusinessHours &&

                  <>
                    <TextField
                      margin="dense"
                      name="preferredTime"
                      label="Preferred Time for Callback"
                      type="time"
                      fullWidth
                      value={formData.preferredTime}
                      onChange={handleChange}
                    />

                    {
                      (!formData?.preferredTime || !isFormValid()) && <p className='text-center text-sm underline font-semibold text-red-500'>Provide  Time For Callback</p>
                    }
                  </>
                }
              </div>

              {isFormValid() ? <div>
                <PractoWidget />
              </div>
                : <div className='w-full'>
                  <button
                    className={`select-none flex gap-2 items-center w-full justify-center text-white rounded-lg  px-4 py-3 font-semibold text-center ${isFormValid() ? 'cursor-pointer active:shadow-xl active:bg-green-600 bg-green-500  ' : 'cursor-not-allowed bg-gray-300'}`}
                    disabled={!isFormValid()}

                  >
                    Request an Appointment
                  </button>
                </div>
              }
              {isBusinessHours ? (
                <button
                  className={`select-none flex gap-2 w-full items-center justify-center text-white rounded-lg px-4 py-2 font-semibold text-center ${isFormValid() ? 'cursor-pointer active:shadow-xl active:bg-green-600 bg-green-500' : 'cursor-not-allowed bg-gray-300'}`}
                  disabled={!isFormValid()}
                  onClick={() => window.open(`https://wa.me/${formData?.whatsapp || currentLocation?.whatsapp}?text=${encodeURIComponent(`Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Location: ${formData.location}, Message: ${formData.message}`)}`, "_blank")}
                >
                  Contact on <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                </button>
              ) : (
                <>

                  <button
                    className={`select-none flex w-full  gap-2 justify-center items-center text-white rounded-lg px-4 py-3  font-semibold text-center ${isFormValid() && formData?.preferredTime ? 'cursor-pointer active:shadow-xl active:bg-blue-600 bg-blue-500' : 'cursor-not-allowed bg-gray-300'}`}
                    disabled={!isFormValid() || !formData?.preferredTime}
                    onClick={handleSubmit}
                  >
                    Request a Callback
                  </button>

                </>
              )}
            </div>
          </FormControl>
        </DialogContent>

      </Dialog>

    </div>
  );
}

export default Navbar;
