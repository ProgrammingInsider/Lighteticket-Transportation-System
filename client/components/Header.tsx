// 'use client'

// import { useEffect, useRef, useState } from 'react'
// import { FaBarsStaggered } from "react-icons/fa6";
// import { IoIosArrowDown } from "react-icons/io";
// import Dropdown from './Dropdown';
// import { useGlobalContext } from '@/context/ContextAPI';

// const Header = () => {
//     const [show, setShow] = useState(false);
//     const dropdownRef = useRef<HTMLDivElement>(null);
//     const { setShowMenu, showMenu } = useGlobalContext();

//     const logoutHandle = () => {
//         alert("Logout");
//     };

//     const lists = [
//         {
//             value: 'Logout',
//             onClick: () => logoutHandle(),
//         },
//     ];

//     useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//                 setShow(false);
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     return (
//         <div className='header-bg h-14 flex justify-between items-center px-5 border-b border-gray-300'>
//             {/* <FaBarsStaggered className={`primary font-medium cursor-pointer text-xl ${showMenu ? "ml-64 xl:ml-0" : "ml-0"}` } onClick={()=>setShowMenu(!showMenu)}/> */}
//             <FaBarsStaggered
//             className={`primary font-medium cursor-pointer text-xl transition-all duration-300 ${showMenu ? "ml-64" : "ml-0"}`}
//             onClick={() => setShowMenu((prev) => !prev)}
//             />
//             <div
//                 className='flex items-center gap-2 cursor-pointer hover:secondary relative'
//                 ref={dropdownRef}
//             >
//                 <div
//                     className='btn-primary-bg btn-primary-text rounded-full p-1 w-8 h-8 flex items-center justify-center font-medium pt-1.5'
//                     onClick={() => setShow(prev => !prev)}
//                 >
//                     AA
//                 </div>
//                 <h1
//                     className='header-text font-medium flex gap-0.5 items-center text-lg'
//                     onClick={() => setShow(prev => !prev)}
//                 >
//                     Amanuel
//                     <IoIosArrowDown className='text-lg' />
//                 </h1>
//                 {show && <Dropdown lists={lists} />}
//             </div>
//         </div>
//     );
// };

// export default Header;




'use client';

import { useEffect, useRef, useState } from 'react';
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';
import Dropdown from './Dropdown';
import { useGlobalContext } from '@/context/ContextAPI';

const Header = () => {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { setShowMenu, showMenu } = useGlobalContext();

  const logoutHandle = () => {
    alert('Logout');
  };

  const lists = [
    {
      value: 'Logout',
      onClick: () => logoutHandle(),
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="header-bg h-14 flex justify-between xl:justify-end items-center px-5 border-b border-gray-300">
      {/* Menu icon only shows on small screens */}
      <FaBarsStaggered
        className={`primary font-medium cursor-pointer text-xl transition-all duration-300 ${
          showMenu ? 'ml-64' : 'ml-0'
        } xl:hidden`} // Only visible on small screens
        onClick={() => setShowMenu((prev) => !prev)}
      />
      <div className="flex items-center gap-2 cursor-pointer hover:secondary relative" ref={dropdownRef}>
        <div
          className="btn-primary-bg btn-primary-text rounded-full p-1 w-8 h-8 flex items-center justify-center font-medium pt-1.5"
          onClick={() => setShow((prev) => !prev)}
        >
          AA
        </div>
        <h1
          className="header-text font-medium flex gap-0.5 items-center text-lg"
          onClick={() => setShow((prev) => !prev)}
        >
          Amanuel
          <IoIosArrowDown className="text-lg" />
        </h1>
        {show && <Dropdown lists={lists} />}
      </div>
    </div>
  );
};

export default Header;
