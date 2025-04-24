'use client'

import {createContext, useContext, useState} from 'react'


interface GlobalContextType {
    terminal: string | null;
    setTerminal: React.Dispatch<React.SetStateAction<string | null>>
    showMenu: boolean, 
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
    exportRecords: Record<string,string | number | null | boolean>[];
    setExportRecords: React.Dispatch<React.SetStateAction<Record<string,string | number | null | boolean>[]>>;
    exportName: string;
    setExportName: React.Dispatch<React.SetStateAction<string>>;
}


const GlobalContext = createContext<GlobalContextType>({
    terminal: "",
    setTerminal: () => {},
    showMenu: true,
    setShowMenu: () => {},
    exportRecords: [],
    setExportRecords: () => {},
    exportName: "",
    setExportName: () => {}
});

const ContextAPI = ({children}:{children:React.ReactNode}) => {
    const [terminal, setTerminal] = useState<string | null>("Adama Peacock");
    const [showMenu, setShowMenu] = useState<boolean>(true);
    const [exportRecords, setExportRecords] = useState<Record<string, string | number | null | boolean>[]>([]);
    const [exportName, setExportName] = useState<string>("");


    return (
        <GlobalContext.Provider value={{terminal, setTerminal, showMenu, setShowMenu, exportRecords, setExportRecords, exportName, setExportName}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ContextAPI

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    // if (!context) {
    //     throw new Error("useGlobalContext must be used within a ContextAPI provider");
    // }
    return context;
};