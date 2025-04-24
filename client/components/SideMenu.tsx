// 'use client'

// import React, { useState } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { GrHomeRounded } from "react-icons/gr";
// import { RiBusLine, RiAdminFill } from "react-icons/ri";
// import { MdDepartureBoard, MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { TbTargetArrow } from "react-icons/tb";
// import { ImLocation2 } from "react-icons/im";
// import { IoPerson } from "react-icons/io5";
// // import { FaListCheck } from "react-icons/fa6";
// import { BsFlag } from "react-icons/bs";
// import { useGlobalContext } from '@/context/ContextAPI';

// const links = [
//   { href: '/', label: 'Dashboard', icon: <GrHomeRounded /> },
//   { href: '/vehicle', label: 'Vehicle', icon: <RiBusLine /> },
//   { href: '/admin', label: 'Admin', icon: <RiAdminFill /> },
//   { href: '/departure', label: 'Departure', icon: <MdDepartureBoard /> },
//   { href: '/fleet', label: 'Fleet Type', icon: <TbTargetArrow /> },
//   { href: '/arrival', label: 'Arrival', icon: <ImLocation2 /> },
//   { href: '/employee', label: 'Employees', icon: <IoPerson /> },
//   // { href: '/check-in-out', label: 'Check-In-Out', icon: <FaListCheck /> },
//   {
//     label: 'Report',
//     icon: <BsFlag />,
//     hasArrow: true,
//     children: [
//       { href: '/report', label: 'Get Trip Report' },
//       { href: '/daily-report', label: 'Daily Report' },
//     ]
//   },
// ];

// const SideMenu = () => {
//   const pathname = usePathname();
//   const { showMenu } = useGlobalContext();
//   const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

//   const toggleMenu = (key: string) => {
//     setOpenMenus(prev => ({ ...prev, [key]: !prev[key] }));
//   };

//   return (
//     <div className={`side-menu-bg ${showMenu ? 'absolute' : 'hidden xl:block'} xl:fixed top-0 left-0 bottom-0 w-64`}>
//       <header>
//         <div className='flex items-center side-menu-active-text justify-center h-16 border-b-2 border-gray-300'>
//           <h1 className='text-2xl font-bold'>Lighteticket.com</h1>
//         </div>
//       </header>

//       <nav className='mt-6 overflow-y-auto h-[calc(100vh-6rem-2rem)] px-1 custom-scroll'>
//         <ul className='flex flex-col gap-1'>
//           {links.map(({ href, label, icon, hasArrow, children }) => {
//             const isActive = pathname === href;

//             return (
//               <React.Fragment key={label}>
//                 {hasArrow ? (
//                   <div
//                     onClick={() => toggleMenu(label)}
//                     className={`py-2 px-6 cursor-pointer flex justify-between items-center side-menu-hover-bg ${
//                       openMenus[label] ? 'side-menu-active-text' : 'side-menu-text'
//                     }`}
//                   >
//                     <div className="flex items-center gap-2">
//                       {icon}
//                       <span className='pt-2'>{label}</span>
//                     </div>
//                     <MdOutlineKeyboardArrowRight
//                       className={`transition-transform duration-300 ${
//                         openMenus[label] ? 'rotate-90' : ''
//                       }`}
//                     />
//                   </div>
//                 ) : (
//                   <Link
//                     href={href!}
//                     className={`py-2 px-6 cursor-pointer flex gap-2 items-center side-menu-hover-bg ${
//                       isActive ? 'side-menu-active-text' : 'side-menu-text'
//                     }`}
//                   >
//                     {icon}
//                     <span className='pt-2'>{label}</span>
//                   </Link>
//                 )}

//                 {children && openMenus[label] && (
//                   <ul className="ml-12 flex flex-col">
//                     {children.map((child) => (
//                       <Link
//                         key={child.href}
//                         href={child.href}
//                         className={`py-2 px-4 text-sm cursor-pointer side-menu-hover-bg ${
//                           pathname === child.href ? 'side-menu-active-text' : 'side-menu-text'
//                         }`}
//                       >
//                         {child.label}
//                       </Link>
//                     ))}
//                   </ul>
//                 )}
//               </React.Fragment>
//             );
//           })}
//         </ul>
//       </nav>

//       <footer className='mt-auto self-end'>
//         <div className='flex items-center justify-center absolute bottom-0 w-full h-8'>
//           <h1 className='text-center text-gray-400 text-sm'>© 2025 Lighte ticket. All Rights Reserved.</h1>
//         </div>
//       </footer>
//     </div>
//   )
// }

// export default SideMenu



'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GrHomeRounded } from 'react-icons/gr';
import { RiBusLine, RiAdminFill } from 'react-icons/ri';
import { MdDepartureBoard, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { TbTargetArrow } from 'react-icons/tb';
import { ImLocation2 } from 'react-icons/im';
import { IoPerson } from 'react-icons/io5';
import { BsFlag } from 'react-icons/bs';
import { useGlobalContext } from '@/context/ContextAPI';

const links = [
  { href: '/', label: 'Dashboard', icon: <GrHomeRounded /> },
  { href: '/vehicle', label: 'Vehicle', icon: <RiBusLine /> },
  { href: '/admin', label: 'Admin', icon: <RiAdminFill /> },
  { href: '/departure', label: 'Departure', icon: <MdDepartureBoard /> },
  { href: '/fleet', label: 'Fleet Type', icon: <TbTargetArrow /> },
  { href: '/arrival', label: 'Arrival', icon: <ImLocation2 /> },
  { href: '/employee', label: 'Employees', icon: <IoPerson /> },
  {
    label: 'Report',
    icon: <BsFlag />,
    hasArrow: true,
    children: [
      { href: '/report', label: 'Get Trip Report' },
      { href: '/daily-report', label: 'Daily Report' },
    ],
  },
];

const SideMenu = () => {
  const pathname = usePathname();
  const { showMenu, setShowMenu } = useGlobalContext();
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const toggleMenu = (key: string) => {
    setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 1280) setShowMenu(false); // close on small screen
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.side-menu-container') === null && showMenu) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMenu, setShowMenu]);

  return (
    <>
      {showMenu && (
        <div
          className="fixed inset-0 z-30"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // 40% opacity
          }}
        />
      )}

      <div
        className={`side-menu-container side-menu-bg fixed top-0 left-0 h-screen z-40 transform transition-transform duration-300 ${
          showMenu ? 'translate-x-0' : '-translate-x-full'
        } xl:translate-x-0 xl:w-64 w-full max-w-xs`}
      >
        <header>
          <div className="flex items-center side-menu-active-text justify-center h-16 border-b-2 border-gray-300">
            <h1 className="text-2xl font-bold">Lighteticket.com</h1>
          </div>
        </header>

        <nav className="mt-6 overflow-y-auto h-[calc(100vh-6rem-2rem)] px-1 custom-scroll">
          <ul className="flex flex-col gap-1">
            {links.map(({ href, label, icon, hasArrow, children }) => {
              const isActive = pathname === href;

              return (
                <React.Fragment key={label}>
                  {hasArrow ? (
                    <div
                      onClick={() => toggleMenu(label)}
                      className={`py-2 px-6 cursor-pointer flex justify-between items-center side-menu-hover-bg ${
                        openMenus[label] ? 'side-menu-active-text' : 'side-menu-text'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {icon}
                        <span className="pt-2">{label}</span>
                      </div>
                      <MdOutlineKeyboardArrowRight
                        className={`transition-transform duration-300 ${
                          openMenus[label] ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                  ) : (
                    <Link
                      href={href!}
                      onClick={handleLinkClick}
                      className={`py-2 px-6 cursor-pointer flex gap-2 items-center side-menu-hover-bg ${
                        isActive ? 'side-menu-active-text' : 'side-menu-text'
                      }`}
                    >
                      {icon}
                      <span className="pt-2">{label}</span>
                    </Link>
                  )}

                  {children && openMenus[label] && (
                    <ul className="ml-12 flex flex-col">
                      {children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={handleLinkClick}
                          className={`py-2 px-4 text-sm cursor-pointer side-menu-hover-bg ${
                            pathname === child.href
                              ? 'side-menu-active-text'
                              : 'side-menu-text'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </ul>
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        </nav>

        <footer className="mt-auto self-end">
          <div className="flex items-center justify-center absolute bottom-0 w-full h-8">
            <h1 className="text-center text-gray-400 text-sm">
              © 2025 Lighte ticket. All Rights Reserved.
            </h1>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SideMenu;
