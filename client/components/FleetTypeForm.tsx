'use client'

import {useActionState, useState} from 'react'
import InputElement from './InputElement'
import FormHeader from './FormHeader'
import FormBtn from './FormBtn'
import { startTransition } from "react";
import { createFleetType } from '@/actions/createActions'

const initialState: { message: string | null; errors?: Record<string, string[] | undefined> } = {
    message: null,
    errors: {},
};

const FleetTypeForm = ({setShowForm}:{setShowForm: React.Dispatch<boolean>}) => {
    const [state,formAction] = useActionState(createFleetType,initialState)
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
            <FormHeader content="Add Fleet Type" state={state} />
            <form onSubmit={handleSubmit} className='flex flex-col p-5 mt-3'>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col md:flex-row gap-2'>
                        <InputElement label="Fleet Name" name="Fleet_Name" error={state.errors?.Fleet_Name?.[0]} />
                    </div>
                    <div className='flex flex-col md:flex-row gap-2'>    
                        <InputElement label="Seat Number" name="Seat_Number" error={state.errors?.Seat_Number?.[0]} />
                    </div>
                    <FormBtn content="Add Fleet Type" loading={loading} />
                </div>
            </form>
        </div>
    </div>
  )
}

export default FleetTypeForm;