'use client'

import { useState } from 'react'
import { TbArrowBarToLeft, TbArrowBarToRight } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiAddLine } from "react-icons/ri";

const Table = ({ 
    schema, 
    results, 
    setShowForm,
    setClearForm,
    addBtn=true,
    editBtn=true,
    deleteBtn=true,
    setDefaultValues,
    tableName=""
}: { 
    schema: string[], 
    results: Record<string, string | number | null>[] ,
    setShowForm?: React.Dispatch<boolean>,
    setClearForm?: React.Dispatch<boolean>,
    addBtn?: boolean,
    editBtn?: boolean,
    deleteBtn?: boolean,
    tableName?:string,
    setDefaultValues?: React.Dispatch<Record<string, string | number | null>>
}) => {
    const [rowsPerPage, setRowsPerPage] = useState<number>(20);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [selected, setSelected] = useState<Set<number>>(new Set());

    const totalPages = Math.ceil(results.length / rowsPerPage);
    const startIndex = currentPage * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const currentPageData = results.slice(startIndex, endIndex);

    const handleRowSelect = (index: number) => {
        const newSelected = new Set(selected);
        if (newSelected.has(index)) {
            newSelected.delete(index);
        } else {
            newSelected.add(index);
        }
        setSelected(newSelected);
        // if (setDefaultValues) {
        //     const selectedData = results[index];
        //     setDefaultValues(selectedData);
        // }
    };

    const handleSelectAll = () => {
        const allSelected = new Set(currentPageData.map((_, index) => index + startIndex));
        setSelected(selected.size === currentPageData.length ? new Set() : allSelected);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) setCurrentPage(prev => prev + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 0) setCurrentPage(prev => prev - 1);
    };

    const handleRowsChange = (value: number) => {
        setRowsPerPage(value);
        setCurrentPage(0); // reset to first page
    };

    return (
        <div className="card-bg m-2 p-2 border-radius">
            {tableName && <h1 className='py-5 font-black text-center text-2xl heading-color'>{tableName}</h1>}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <TbArrowBarToLeft onClick={handlePrevPage} className="cursor-pointer" />
                    <input
                        type="number"
                        min={1}
                        className="w-16 p-2 border-radius input-border input-text input-bg outline-none"
                        value={rowsPerPage}
                        onChange={(e) => handleRowsChange(Number(e.target.value))}
                    />
                    <TbArrowBarToRight onClick={handleNextPage} className="cursor-pointer" />
                </div>
                <p className="font-medium hidden md:block">
                    Showing {startIndex + 1} to {Math.min(endIndex, results.length)} of {results.length}
                </p>
                <p className="font-medium hidden md:block">
                    { selected.size > 0 && selected.size + " rows selected"}
                </p>
                <div className="flex gap-4">
                    {
                        addBtn && <button 
                            className="btn btnSecondary text-xl" 
                            title='Add' 
                            onClick={()=>{
                                setShowForm?.(true); 
                                setClearForm?.(true);
                            }}>
                            <RiAddLine />
                        </button>
                    }
                    {
                        editBtn && <button 
                        className="btn btnPrimary" 
                        disabled={selected.size !== 1}
                        onClick={() => {
                            const [firstIndex] = Array.from(selected);
                            if (setDefaultValues && setShowForm) {
                                setDefaultValues(results[firstIndex]);
                                setShowForm(true);
                                setClearForm?.(false);
                            }
                        }}
                        >
                            <FaRegEdit />
                            <span className="pt-1">Edit</span>
                        </button>
                    }
                    {
                        deleteBtn && <button className={`btn btnDelete`} disabled={selected.size === 0}>
                            <MdDelete />
                            <span className="pt-1">Delete</span>
                        </button>
                    }
                </div>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="min-w-[800px] w-full table-auto border border-gray-200 border-radius p-1 mt-5">
                <thead>
                    <tr className="table-border table-header-bg">
                            {
                                (editBtn || deleteBtn) && (
                                    <th className="text-left p-2 flex justify-left items-center">
                                        <label className="custom-checkbox relative cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="opacity-0 absolute left-0 top-0 w-0 h-0"
                                                checked={selected.size === currentPageData.length}
                                                onChange={handleSelectAll}
                                            />
                                            <span
                                                className={`absolute left-0 top-1 w-4 h-4 border-2 rounded-sm transition-all duration-300 
                                                ${selected.size === currentPageData.length ? 'bg-[#0056b3] border-[#0056b3]' : 'bg-white border-gray-400'}`}
                                            ></span>
                                        </label>
                                    </th>
                                    )
                            }
                        {schema.map((key, index) => (
                            <th key={index} className="text-center p-2 table-header-bg">{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentPageData.map((vehicle, index) => (
                        <tr key={index}>
                                {
                                (editBtn || deleteBtn) && (
                                    <td className="table-border p-2 h-full relative pb-8">
                                        <label className="custom-checkbox relative cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="opacity-0 absolute left-0 top-0 w-0 h-0"
                                                checked={selected.has(index + startIndex)}
                                                onChange={() => handleRowSelect(index + startIndex)}
                                            />
                                            <span
                                                className={`absolute left-0 top-1 w-4 h-4 border-2 rounded-sm transition-all duration-300 
                                                ${selected.has(index + startIndex) ? 'bg-[#0056b3] border-[#0056b3]' : 'bg-white border-gray-400'}`}
                                            ></span>
                                        </label>
                                    </td>
                                )
                                }
                            
                            {Object.values(vehicle).map((value, i) => (
                               <td
                               key={i}
                               className="p-2 table-border text-center max-w-[4rem] overflow-hidden text-ellipsis whitespace-nowrap"
                               title={typeof value === 'string' ? value : ''}
                             >
                               {value}
                             </td>
                             
                            ))}
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
            {/* Optional: Page Info or Custom Pagination */}
            <div className="flex justify-end mt-3 text-sm text-gray-500">
                Page {currentPage + 1} of {totalPages}
            </div>
        </div>
    );
}

export default Table;
