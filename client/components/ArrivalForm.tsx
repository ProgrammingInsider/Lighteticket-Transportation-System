import React from 'react'
import InputElement from './InputElement'
import DropdownElement from './DropdownElement'
import {useActionState, useState} from 'react'
import FormHeader from './FormHeader'
import FormBtn from './FormBtn'
import { startTransition } from "react";
import { createArrival } from '@/actions/createActions'

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

const ArrivalForm = ({setShowForm}:{setShowForm: React.Dispatch<boolean>}) => {
    const [state,formAction] = useActionState(createArrival,initialState)
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
            <FormHeader content="Add Arrival" state={state} />
            <form onSubmit={handleSubmit} className='flex flex-col p-5 mt-3'>
                <div className='flex flex-col gap-4'>
                <div className='flex flex-col md:flex-row gap-2'>    
                        <DropdownElement label="Departure" name="Departure_Location" options={departure} error={state.errors?.Departure_Location?.[0]} />
                    </div>
                    <div className='flex flex-col md:flex-row gap-2'>    
                        <InputElement label="Arrival" name="Arrival_Location" error={state.errors?.Arrival_Location?.[0]} />
                    </div>
                    <div className='flex flex-col md:flex-row gap-2'>    
                        <InputElement type='number' label="Distance" name="Distance" error={state.errors?.Distance?.[0]} />
                    </div>
                    <FormBtn content="Add Arrival" loading={loading} />
                </div>
            </form>
        </div>
    </div>
  )
}

export default ArrivalForm