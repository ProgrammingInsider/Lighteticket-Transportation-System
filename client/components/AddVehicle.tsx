'use client'

import {useActionState, useState, useRef, useEffect} from 'react'
import InputElement from './InputElement'
import DropdownElement from './DropdownElement'
import FormHeader from './FormHeader'
import FormBtn from './FormBtn'
import { startTransition } from "react";
import { createVehicle } from '@/actions/createActions'
import { updateVehicle } from '@/actions/updateActions'

const departure = [
    {label: "Select Departure", value: ""},
    {label: "Adama Peacock", value: "Adama Peacock Terminal"},
    {label: "Adama Migiraa", value: "Adama Migiraa"},
    {label: "Shashamane", value: "Shashamane"},
    {label: "Hawwaasa", value: "Hawwaasa"},
]

const plateNumbers = [
    {label: "Select Plate Number", value: ""},
    {label: "05512", value: "05512"},
    {label: "01075", value: "01075"},
    {label: "33671", value: "33671"},
    {label: "90876", value: "90876"},
    {label: "00234", value: "00234"},
]

const fleetType = [
    {label: "Select Fleet Type", value: ""},
    {label: "Isuze", value: "Isuze"},
    {label: "Highroof", value: "Highroof"},
    {label: "Dolphine", value: "Dolphine"},
    {label: "TATA 32", value: "TATA 32"},
    {label: "TATA", value: "TATA"},
]

const status = [
    {label: "Active", value: 1},
    {label: "InActive", value: 0}
]

const initialState: { message: string | null; errors?: Record<string, string[] | undefined> } = {
    message: null,
    errors: {},
};

const AddVehicle = ({
    setShowForm,
    defaultValues,
    clearForm
}:{
    setShowForm: React.Dispatch<boolean>,
    defaultValues: Record<string, string | number | null >
    clearForm: boolean
}) => {
    const [state,formAction] = useActionState(createVehicle,initialState)
    const [updateState,formUpdateAction] = useActionState(updateVehicle,initialState)
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
      
        const form = e.currentTarget;
        const formData = new FormData(form);
      
        const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement;
        const action = submitter?.value;
    
        startTransition(() => {
          if (action === "create") {
            formAction(formData);
          } else if (action === "edit") {
            formUpdateAction(formData)
          }
      
          setLoading(false);
        });
    };
    
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
    if (clearForm && formRef.current) {
        formRef.current.reset();
    }
    }, [clearForm]);




  return (
    <div className='fixed z-20 top-0 left-0 bottom-0 right-0 flex justify-center items-center p-12 overflow-auto'>
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-black opacity-60 inset-0 z-30' onClick={()=>setShowForm(false)}></div>
        <div className='z-40 w-full md:w-6/7 md:max-w-1/2 card-bg box-shadow border-radius p-3'>
           <FormHeader content={defaultValues?.Vehicle_Id ? "Update Vehicle" :"Add Vehicle"} state={defaultValues?.Vehicle_Id ? updateState : state} />
            <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col p-5 mt-3'>
                <div className='flex flex-col gap-4'>
                    {defaultValues?.Vehicle_Id &&  <input type="hidden" name="Vehicle_Id" value={defaultValues?.Vehicle_Id} />}
                    <div className='flex flex-col md:flex-row gap-2'>    
                        <DropdownElement 
                            label="Plate Number" 
                            name="Plate_Number" 
                            options={plateNumbers}   
                            error={state.errors?.Plate_Number?.[0]} 
                            defaultValue={defaultValues?.Plate_Number || ""}
                        />
                        <DropdownElement 
                            label="Fleet Type" 
                            name="Fleet_Name" 
                            options={fleetType} 
                            error={state.errors?.Fleet_Name?.[0]} 
                            defaultValue={defaultValues?.Fleet_Name || ""}
                        />
                    </div>
                    <div className='flex flex-col md:flex-row gap-2'>    
                        <InputElement 
                            type='number' 
                            label="Level" 
                            name="Level" 
                            error={state.errors?.Level?.[0]} 
                            defaultValue={defaultValues?.Level || ""}
                        />
                        <DropdownElement 
                            label="Status(off/on)" 
                            name="Status" 
                            options={status} 
                            error={state.errors?.Status?.[0]} 
                            defaultValue={defaultValues?.Status || ""}
                        />
                    </div>
                    <div className='flex flex-col md:flex-row gap-2'>    
                        <InputElement 
                            label="Association Name" 
                            name="Association_Name" 
                            error={state.errors?.Association_Name?.[0]} 
                            defaultValue={defaultValues?.Association_Name || ""}
                        />
                        <InputElement 
                            type='number' 
                            label="Seat Number" 
                            name="Seat_Number" 
                            error={state.errors?.Seat_Number?.[0]} 
                            defaultValue={defaultValues?.Seat_Number || ""}
                        />
                    </div>
                    <div className='flex flex-col md:flex-row gap-2'>    
                        <InputElement 
                            label="Region" 
                            name="Region" 
                            error={state.errors?.Region?.[0]} 
                            defaultValue={defaultValues?.Region || ""}
                        />
                        <DropdownElement 
                            label="Departure" 
                            name="Departure_Name" 
                            options={departure} 
                            error={state.errors?.Departure_Name?.[0]} 
                            defaultValue={defaultValues?.Departure_Name || ""}
                        />
                    </div>
                    <FormBtn 
                        content={ defaultValues?.Vehicle_Id ? "Update Vehicle" : "Add Vehicle"} 
                        loading={loading}
                        value={ defaultValues?.Vehicle_Id ? "edit" : "create" }
                    />
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddVehicle