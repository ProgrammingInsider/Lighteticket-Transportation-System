// 'use client'

// import Table from '@/components/Table'
// import { EmployeeSchema, employees } from '@/Data/data'
// import {useState, useEffect} from 'react'
// import EmployeeForm from '@/components/EmployeeForm'
// import { useGlobalContext } from '@/context/ContextAPI'

// const EmployeePage = () => {
//   const [showForm, setShowForm] = useState(false);
//   const { exportRecords, setExportRecords, exportName, setExportName } = useGlobalContext();

//   useEffect(() => {
//     if (employees.result.length > 0) {
//       setExportRecords(employees.result);
//       setExportName("Employees");
//     }
//   },[exportRecords, setExportRecords, exportName, setExportName])
//   return <>
//    {showForm && <EmployeeForm setShowForm={setShowForm} />}
//     <div className='p-5 overflow-x-auto'>
//       <Table schema={EmployeeSchema} results={employees.result} setShowForm={setShowForm} />
//     </div>
//   </>
// }

// export default EmployeePage















'use client'

import Table from '@/components/Table'
import { EmployeeSchema, employees } from '@/Data/data'
import {useState, useEffect} from 'react'
import { useGlobalContext } from '@/context/ContextAPI'
import AddRecord from '@/components/AddRecord'
import { EmployeeFormElements } from '@/utils/elements'
import { createEmployee } from '@/actions/createActions'
import { updateEmployee } from '@/actions/updateActions'

const intialValues = {
  "Agent_Id": "",
  "First_Name": "",
  "Last_Name": "",
  "Phone_Number": "",
  "Password": "",
  "Departure_Name": "",
}

const EmployeePage = () => {
  const [showForm, setShowForm] = useState(false);
  const { exportRecords, setExportRecords, exportName, setExportName } = useGlobalContext();
  const [clearForm, setClearForm] = useState(false);
  const [defaultValues, setDefaultValues] = useState<Record<string,string | null | number>>(intialValues);

  useEffect(() => {
    if (employees.result.length > 0) {
      setExportRecords(employees.result);
      setExportName("Employees");
    }
  },[exportRecords, setExportRecords, exportName, setExportName])
  return <>
   {showForm && <AddRecord 
      setShowForm={setShowForm} 
      defaultValues={defaultValues} 
      clearForm={clearForm} 
      FormElements={EmployeeFormElements} 
      FormOf="Employee"
      identifier="Agent_Id"
      updateAction={updateEmployee}
      createAction={createEmployee}
    />}
    <div className='p-5 overflow-x-auto'>
      <Table schema={EmployeeSchema} results={employees.result} setShowForm={setShowForm} setDefaultValues={setDefaultValues} setClearForm={setClearForm} />
    </div>
  </>
}

export default EmployeePage