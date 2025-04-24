// 'use client'

// import Table from '@/components/Table'
// import { AdminSchema, admins } from '@/Data/data'
// import {useState, useEffect} from 'react'
// import Register from '@/components/Register'
// import { useGlobalContext } from '@/context/ContextAPI'
// import AddRecord from '@/components/AddRecord'

// const intialValues = {
//   "Admin_Id": "",
//   "Email": "",
//   "First_Name": "",
//   "Last_Name": "",
//   "Password": "",
//   "Position": -1,
//   "RefreshToken": "",
//   "Departure": null
// }

// const AdminPage = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [clearForm, setClearForm] = useState(false);
//   const { exportRecords, setExportRecords, exportName, setExportName } = useGlobalContext();
//   const [defaultValues, setDefaultValues] = useState<Record<string,string | null | number>>(intialValues);

//   useEffect(() => {
//     if (admins.result.length > 0) {
//       setExportRecords(admins.result);
//       setExportName("Admins");
//     }
//   },[exportRecords, setExportRecords, exportName, setExportName])

//   useEffect(() => {
//     setDefaultValues(intialValues);
//   }, [clearForm])

//   return <>
//    {showForm && <Register setShowForm={setShowForm} defaultValues={defaultValues} />}
//     <div className='p-5 overflow-x-auto'>
//       <Table schema={AdminSchema} results={admins.result} setShowForm={setShowForm} setDefaultValues={setDefaultValues} clearForm={clearForm} setClearForm={setClearForm} />
//     </div>
//   </>
// }

// export default AdminPage



'use client'

import Table from '@/components/Table'
import { AdminSchema, admins } from '@/Data/data'
import {useState, useEffect} from 'react'
import { useGlobalContext } from '@/context/ContextAPI'
import AddRecord from '@/components/AddRecord'
import { Register } from '@/actions/createActions'
import { updateRegister } from '@/actions/updateActions'
import { AdminFormElements } from '@/utils/elements'

const intialValues = {
  "Admin_Id": "",
  "Email": "",
  "First_Name": "",
  "Last_Name": "",
  "Password": "",
  "Position": -1,
  "RefreshToken": "",
  "Departure": null
}

const AdminPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [clearForm, setClearForm] = useState(false);
  const { exportRecords, setExportRecords, exportName, setExportName } = useGlobalContext();
  const [defaultValues, setDefaultValues] = useState<Record<string,string | null | number>>(intialValues);

  useEffect(() => {
    if (admins.result.length > 0) {
      setExportRecords(admins.result);
      setExportName("Admins");
    }
  },[exportRecords, setExportRecords, exportName, setExportName])

  useEffect(() => {
    setDefaultValues(intialValues);
  }, [clearForm])


  return <>
   {showForm && <AddRecord 
        setShowForm={setShowForm} 
        defaultValues={defaultValues} 
        clearForm={clearForm} 
        FormElements={AdminFormElements} 
        FormOf="Admin"
        identifier="Admin_Id"
        updateAction={updateRegister}
        createAction={Register}
      />}
    <div className='p-5 overflow-x-auto'>
      <Table schema={AdminSchema} results={admins.result} setShowForm={setShowForm} setDefaultValues={setDefaultValues} setClearForm={setClearForm} />
    </div>
  </>
}

export default AdminPage