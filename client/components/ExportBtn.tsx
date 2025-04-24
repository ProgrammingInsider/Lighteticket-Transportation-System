// 'use client'

// import { FiDownload } from "react-icons/fi";
// import * as XLSX from 'xlsx';

// const ExportBtn = ({records, name}:{records:Record<string,string | number | null | boolean>[], name:string}) => {
//     const downloadRecords = () => {
//         if(records.length){

//           const wb = XLSX.utils.book_new();
//           const ws = XLSX.utils.json_to_sheet(records);
//           XLSX.utils.book_append_sheet(wb,ws,name);
//           XLSX.writeFile(wb,`${name}.xlsx`)

//         }else{
//            alert("You can export null Excel document")
//         }
//       }

//   return (
//     <button className='btn btnPrimary flex items-center gap-1' onClick={downloadRecords}>
//         <FiDownload />
//         <span className='pt-1'>Export</span>
//     </button>
//     )
// }

// export default ExportBtn






'use client'

import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import * as XLSX from 'xlsx';

const ExportBtn = ({ records, name }: { records: Record<string, string | number | null | boolean>[], name: string }) => {
    const [loading, setLoading] = useState(false);

    const downloadRecords = async () => {
        if (records.length) {
            try {
                setLoading(true);
                
                const wb = XLSX.utils.book_new();
                const ws = XLSX.utils.json_to_sheet(records);
                XLSX.utils.book_append_sheet(wb, ws, name);
                XLSX.writeFile(wb, `${name}.xlsx`);
            } catch (error) {
                console.error("Error while downloading:", error);
                alert("Something went wrong while exporting.");
            } finally {
                setLoading(false);
            }
        } else {
            alert("You can’t export an empty Excel document");
        }
    };

    return (
        <button
            className="btn btnPrimary flex items-center gap-1 disabled:opacity-60"
            onClick={downloadRecords}
            disabled={loading}
        >
            {loading ? (
                <span>Downloading...</span>
            ) : (
                <>
                    <FiDownload />
                    <span className="pt-1">Export</span>
                </>
            )}
        </button>
    );
};

export default ExportBtn;
