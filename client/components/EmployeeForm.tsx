'use client'

import {useActionState, useState} from 'react'
import InputElement from './InputElement'
import DropdownElement from './DropdownElement'
import FormHeader from './FormHeader'
import FormBtn from './FormBtn'
import { startTransition } from "react";
import { createEmployee } from '@/actions/createActions'

const departure = [
    {label: "Select Departure", value: ""},
    {label: "Adama Peacock", value: "Adama Peacock"},
    {label: "Adama Migiraa", value: "Adama Migiraa"},
    {label: "Shashamane", value: "Shashamane"},
    {label: "Hawwaasa", value: "Hawwaasa"},
]

const initialState: { message: string | null; errors?: Record<string, string[] | undefined> } = {
    message: null,
    errors: {},
};

const EmployeeForm = ({setShowForm}:{setShowForm: React.Dispatch<boolean>}) => {
    const [state,formAction] = useActionState(createEmployee,initialState)
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);

        e.preventDefault();
        // Handle form submission logic here
        const formData = new FormData(e.currentTarget as HTMLFormElement)        

        startTransition(() => {
            formAction(formData);
            setLoading(false);
        });
        
    }

  return (
    <div className='fixed z-20 top-0 left-0 bottom-0 right-0 flex justify-center items-center p-12 overflow-auto'>
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-black opacity-60 inset-0 z-30' onClick={()=>setShowForm(false)}></div>
        <div className='z-40 w-full md:w-6/7 md:max-w-1/2 card-bg box-shadow border-radius p-3'>
            <FormHeader content="Add Employee" state={state} />
            <form onSubmit={handleSubmit} className='flex flex-col p-5 mt-3'>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col md:flex-row gap-2'>
                        <InputElement label="First Name" name="First_Name" error={state.errors?.First_Name?.[0]} />
                        <InputElement label="Last Name" name="Last_Name" error={state.errors?.Last_Name?.[0]} />
                    </div>
                    <div className='flex flex-col md:flex-row gap-2'>    
                        <InputElement label="Phone" name="Phone_Number" error={state.errors?.Phone_Number?.[0]} />
                        <DropdownElement label="Departure (optional)" name="Departure_Name" options={departure} required={false} error={state.errors?.Departure_Name?.[0]} />
                    </div>
                    <div className='flex flex-col md:flex-row gap-2'>    
                        <InputElement type='password' label="Password" name="Password" error={state.errors?.Password?.[0]} />
                        <InputElement type='password' label="Confirm Password" name="confirmPassword" error={state.errors?.confirmPassword?.[0]} />
                    </div>
                    <div className='flex flex-col md:flex-row gap-2'>    
                    </div>
                    <FormBtn content="Add Employee" loading={loading} />
                </div>
            </form>
        </div>
    </div>
  )
}

export default EmployeeForm