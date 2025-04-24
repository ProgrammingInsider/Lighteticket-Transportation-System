import React from 'react'
import ExportBtn from './ExportBtn';
const departure = [
    {value: "All"},
    {value: "Adama Peacock"},
    {value: "Adama Migiraa"},
    {value: "Shashamane"},
    {value: "Hawwaasa"},
  ]

const ReportCard = ({type, rows, records}:{type:string, rows:string, records:Record<string,string | number | null | boolean>[]}) => {
  return (
    <div className='p-2 border-radius box-shadow card-bg flex flex-col justify-center items-center cols-span-1 gap-4'>
        <div className='flex gap-1 justify-between w-full p-1'>
          <h1 className='text-lg font-bold header-text'>{type}</h1>  
          <select className='border border-gray-300 rounded-md p-1 outline-none'>
            {departure.map((item, index) => (
              <option key={index} value={item.value}>
                {item.value}
              </option>
            ))}
          </select>
          </div>
        <ExportBtn records={records} name={type} />
        <p className="font-medium md">
            {rows} number of records
        </p>
      </div>
  )
}

export default ReportCard