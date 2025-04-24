// 'use client'

// import Table from '@/components/Table'
// import { ArrivalSchema, arrivals } from '@/Data/data'
// import {useEffect, useState} from 'react'
// import ArrivalForm from '@/components/ArrivalForm'
// import { useGlobalContext } from '@/context/ContextAPI'


// const ArrivalPage = () => {
//   const [showForm, setShowForm] = useState(false);
//   const { exportRecords, setExportRecords, exportName, setExportName } = useGlobalContext();

//   useEffect(() => {
//     if (arrivals.result.length > 0) {
//       setExportRecords(arrivals.result);
//       setExportName("Arrivals");
//     }
//   },[exportRecords, setExportRecords, exportName, setExportName])
//   return <>
//    {showForm && <ArrivalForm setShowForm={setShowForm} />}
//     <div className='p-5 overflow-x-auto'>
//       <Table schema={ArrivalSchema} results={arrivals.result} setShowForm={setShowForm} deleteBtn={false} />
//     </div>
//   </>
// }

// export default ArrivalPage




'use client'

import Table from '@/components/Table'
import { ArrivalSchema, arrivals } from '@/Data/data'
import {useEffect, useState} from 'react'
import { useGlobalContext } from '@/context/ContextAPI'
import AddRecord from '@/components/AddRecord'
import { ArrivalFormElements } from '@/utils/elements'
import { createArrival } from '@/actions/createActions'
import { updateArrival } from '@/actions/updateActions'

const intialValues = {
    "Arrival_Id": "",
    "Departure_Location": "",
    "Arrival_Location": "",
    "Distance": 0,
}

const ArrivalPage = () => {
  const [showForm, setShowForm] = useState(false);
  const { exportRecords, setExportRecords, exportName, setExportName } = useGlobalContext();
  const [clearForm, setClearForm] = useState(false);
  const [defaultValues, setDefaultValues] = useState<Record<string,string | null | number>>(intialValues);


  useEffect(() => {
    if (arrivals.result.length > 0) {
      setExportRecords(arrivals.result);
      setExportName("Arrivals");
    }
  },[exportRecords, setExportRecords, exportName, setExportName])
  return <>
   {showForm && <AddRecord 
        setShowForm={setShowForm} 
        defaultValues={defaultValues} 
        clearForm={clearForm} 
        FormElements={ArrivalFormElements} 
        FormOf="Arrival"
        identifier="Arrival_Id"
        updateAction={updateArrival}
        createAction={createArrival}
      />}
    <div className='p-5 overflow-x-auto'>
      <Table schema={ArrivalSchema} results={arrivals.result} setShowForm={setShowForm} setDefaultValues={setDefaultValues} setClearForm={setClearForm} deleteBtn={false} />
    </div>
  </>
}

export default ArrivalPage