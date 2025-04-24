'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from './Dropdown';
import { useGlobalContext } from '@/context/ContextAPI';
import ExportBtn from './ExportBtn';

// This can be in the parent component or passed as a prop
  
const Header = () => {
    const [show, setShow] = useState(false);
    const [pageName, setPageName] = useState<string>("");
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { terminal, setTerminal, exportRecords, exportName } = useGlobalContext();

    const lists = [
        {
          value: 'Adama Peacock',
          onClick: () => setTerminal('Adama Peacock')
        },
        {
          value: 'Adama Migiraa',
          onClick: () => setTerminal('Adama Migiraa')
        },
        {
          value: 'Najjo',
          onClick: () => setTerminal('Najjo')
        },
        {
          value: 'Naqamte',
          onClick: () => setTerminal('Naqamte')
        },
        {
          value: 'Shashamene',
          onClick: () => setTerminal('Shashamene')
        },
        {
          value: 'Bishoftu',
          onClick: () => setTerminal('Bishoftu')
        },
        {
          value: 'Addis Ababa',
          onClick: () => setTerminal('Addis Ababa')
        }
      ];



    useEffect(() => {
        if(pathname === '/'){
            setPageName('Dashboard');
        }else if(pathname === '/vehicle'){
            setPageName('Vehicle');
        }else if(pathname === '/admin'){
            setPageName('Admins');
        }else if(pathname === '/departure'){
            setPageName('Departures');
        }else if(pathname === '/fleet'){
            setPageName('Fleet Type');
        }else if(pathname === '/employee'){
            setPageName('Employees');
        }else if(pathname === '/arrival'){
            setPageName('Arrivals');
        }else if(pathname === '/check-in-out'){
            setPageName('Check In-Out');
        }else if(pathname === '/daily-report'){
            setPageName('Daily Report');
        }else{
            setPageName('Report');
        }
    },[pathname]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShow(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className='header-bg h-14 flex justify-between items-center px-5 border-b border-gray-300'>
            <h1 className='header-text font-medium flex gap-0.5 items-center text-xl'>
                {pageName}
            </h1>
            <div className='flex items-center gap-2 relative' ref={dropdownRef}>
                <button className='btn btnSecondary relative flex items-center gap-1 w-36' onClick={() => setShow(!show)}>
                    <span className='pt-1 text-nowrap'>{terminal}</span>
                    <IoIosArrowDown className='text-lg absolute right-1' />
                </button>
                {show && <Dropdown lists={lists} />}
                <ExportBtn records={exportRecords} name={exportName} />
            </div>
        </div>
    )
}

export default Header;
