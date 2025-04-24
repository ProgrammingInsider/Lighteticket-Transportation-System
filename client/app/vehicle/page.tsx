// 'use client'

// import AddRecord from '@/components/AddRecord'
// import AddVehicle from '@/components/AddVehicle'
// import Table from '@/components/Table'
// import { useGlobalContext } from '@/context/ContextAPI'
// import { VehicleSchema, vehicles } from '@/Data/data'
// import {useState, useEffect} from 'react'



// const intialValues = {
//   "Vehicle_Id": "",
//   "Plate_Number": "",
//   "Level": -1,
//   "Association_Name": "",
//   "Region": "",
//   "Fleet_Name": "",
//   "Status": -1,
//   "Seat_Number":  -1,
//   "Departure_Name": "",
// }

// const VehiclePage = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [clearForm, setClearForm] = useState(false);
//   const [defaultValues, setDefaultValues] = useState<Record<string,string | null | number>>(intialValues);
//   const { exportRecords, setExportRecords, exportName, setExportName } = useGlobalContext();

//   useEffect(() => {
//     if (vehicles.result.length > 0) {
//       setExportRecords(vehicles.result);
//       setExportName("Vehicles");
//     }
//   },[exportRecords, setExportRecords, exportName, setExportName])

//   return <>
//    {showForm && <AddVehicle setShowForm={setShowForm} defaultValues={defaultValues} clearForm={clearForm} />}
//     <div className='p-5 overflow-x-auto'>
//       <Table schema={VehicleSchema} results={vehicles.result} setShowForm={setShowForm} setDefaultValues={setDefaultValues} clearForm={clearForm} setClearForm={setClearForm} />
//     </div>
//   </>
// }

// export default VehiclePage



'use client'

import AddRecord from '@/components/AddRecord'
import Table from '@/components/Table'
import { useGlobalContext } from '@/context/ContextAPI'
import { VehicleSchema, vehicles } from '@/Data/data'
import { VehicleFormElements } from '@/utils/elements'
import {useState, useEffect} from 'react'
import { createVehicle } from '@/actions/createActions'
import { updateVehicle } from '@/actions/updateActions'


const intialValues = {
  "Vehicle_Id": "",
  "Plate_Number": "",
  "Level": -1,
  "Association_Name": "",
  "Region": "",
  "Fleet_Name": "",
  "Status": -1,
  "Seat_Number":  -1,
  "Departure_Name": "",
}



const VehiclePage = () => {
  const [showForm, setShowForm] = useState(false);
  const [clearForm, setClearForm] = useState(false);
  const [defaultValues, setDefaultValues] = useState<Record<string,string | null | number>>(intialValues);
  const { exportRecords, setExportRecords, exportName, setExportName } = useGlobalContext();

  useEffect(() => {
    if (vehicles.result.length > 0) {
      setExportRecords(vehicles.result);
      setExportName("Vehicles");
    }
  },[exportRecords, setExportRecords, exportName, setExportName])

  return <>
   {showForm && <AddRecord 
        setShowForm={setShowForm} 
        defaultValues={defaultValues} 
        clearForm={clearForm} 
        FormElements={VehicleFormElements} 
        FormOf="Vehicle"
        identifier="Vehicle_Id"
        updateAction={updateVehicle}
        createAction={createVehicle}
      />}
    <div className='p-5 overflow-x-auto'>
      <Table schema={VehicleSchema} results={vehicles.result} setShowForm={setShowForm} setDefaultValues={setDefaultValues} setClearForm={setClearForm} />
    </div>
  </>
}

export default VehiclePage