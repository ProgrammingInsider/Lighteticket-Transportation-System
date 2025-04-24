// 'use client'

// import Table from '@/components/Table'
// import DepartureForm from '@/components/DepartureForm'
// import { DepartureSchema, departures } from '@/Data/data'
// import {useState, useEffect} from 'react'
// import { useGlobalContext } from '@/context/ContextAPI'
// import { DepartureFormElements } from '@/utils/elements'

// const DeparturePage = () => {
//   const [showForm, setShowForm] = useState(false);
//   const { exportRecords, setExportRecords, exportName, setExportName } = useGlobalContext();

//   useEffect(() => {
//     if (departures.result.length > 0) {
//       setExportRecords(departures.result);
//       setExportName("Departures");
//     }
//   },[exportRecords, setExportRecords, exportName, setExportName])
//   return <>
//    {showForm && <DepartureForm setShowForm={setShowForm} />}
//     <div className='p-5 overflow-x-auto'>
//       <Table schema={DepartureSchema} results={departures.result} setShowForm={setShowForm} editBtn={false} deleteBtn={false} />
//     </div>
//   </>
// }

// export default DeparturePage








'use client'

import Table from '@/components/Table'
import { DepartureSchema, departures } from '@/Data/data'
import {useState, useEffect} from 'react'
import { useGlobalContext } from '@/context/ContextAPI'
import { DepartureFormElements } from '@/utils/elements'
import AddRecord from '@/components/AddRecord'
import { createDeparture } from '@/actions/createActions'

const intialValues = {
    "Departure_Id": -1,
    "Departure_Name": ""
}

const DeparturePage = () => {
  const [showForm, setShowForm] = useState(false);
  const { exportRecords, setExportRecords, exportName, setExportName } = useGlobalContext();
  const [clearForm, setClearForm] = useState(false);
  const [defaultValues, setDefaultValues] = useState<Record<string,string | null | number>>(intialValues);

  useEffect(() => {
    if (departures.result.length > 0) {
      setExportRecords(departures.result);
      setExportName("Departures");
    }
  },[exportRecords, setExportRecords, exportName, setExportName])
  return <>
   {showForm && <AddRecord 
        setShowForm={setShowForm} 
        defaultValues={defaultValues} 
        clearForm={clearForm} 
        FormElements={DepartureFormElements} 
        FormOf="Departure"
        identifier=""
        createAction={createDeparture}
      />}
    <div className='p-5 overflow-x-auto'>
      <Table schema={DepartureSchema} results={departures.result} setShowForm={setShowForm} setDefaultValues={setDefaultValues} setClearForm={setClearForm} editBtn={false} deleteBtn={false} />
    </div>
  </>
}

export default DeparturePage