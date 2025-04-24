// 'use client'

// import Table from '@/components/Table'
// import { FleetSchema, fleettype } from '@/Data/data'
// import {useState, useEffect} from 'react'
// import FleetTypeForm from '@/components/FleetTypeForm'
// import { useGlobalContext } from '@/context/ContextAPI'

// const FleetPage = () => {
//   const [showForm, setShowForm] = useState(false);
//   const { exportRecords, setExportRecords, exportName, setExportName } = useGlobalContext();

//   useEffect(() => {
//     if (fleettype.result.length > 0) {
//       setExportRecords(fleettype.result);
//       setExportName("Fleet Types");
//     }
//   },[exportRecords, setExportRecords, exportName, setExportName])
//   return <>
//    {showForm && <FleetTypeForm setShowForm={setShowForm} />}
//     <div className='p-5 overflow-x-auto'>
//       <Table schema={FleetSchema} results={fleettype.result} setShowForm={setShowForm} editBtn={false} deleteBtn={false} />
//     </div>
//   </>
// }

// export default FleetPage











'use client'

import Table from '@/components/Table'
import { FleetSchema, fleettype } from '@/Data/data'
import {useState, useEffect} from 'react'
import { useGlobalContext } from '@/context/ContextAPI'
import { FleetFormElements } from '@/utils/elements'
import AddRecord from '@/components/AddRecord'
import { createFleetType } from '@/actions/createActions'

const intialValues = {
    "Fleet_Name": "",
    "Seat_Number": 1
}

const FleetPage = () => {
  const [showForm, setShowForm] = useState(false);
  const { exportRecords, setExportRecords, exportName, setExportName } = useGlobalContext();
  const [clearForm, setClearForm] = useState(false);
  const [defaultValues, setDefaultValues] = useState<Record<string,string | null | number>>(intialValues);

  useEffect(() => {
    if (fleettype.result.length > 0) {
      setExportRecords(fleettype.result);
      setExportName("Fleet Types");
    }
  },[exportRecords, setExportRecords, exportName, setExportName])
  return <>
   {showForm && <AddRecord 
        setShowForm={setShowForm} 
        defaultValues={defaultValues} 
        clearForm={clearForm} 
        FormElements={FleetFormElements} 
        FormOf="Fleet Type"
        identifier=""
        createAction={createFleetType}
      />}
    <div className='p-5 overflow-x-auto'>
      <Table schema={FleetSchema} results={fleettype.result} setShowForm={setShowForm} setDefaultValues={setDefaultValues} setClearForm={setClearForm} editBtn={false} deleteBtn={false} />
    </div>
  </>
}

export default FleetPage