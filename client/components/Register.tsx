'use client'

import {useActionState, useState} from 'react'
import InputElement from './InputElement'
import DropdownElement from './DropdownElement'
import FormHeader from './FormHeader'
import FormBtn from './FormBtn'
import { startTransition } from "react";
import { Register } from '@/actions/createActions'
import { updateRegister } from '@/actions/updateActions'

const departure = [
    {label: "Select Departure", value: ""},
    {label: "Adama Peacock", value: "Adama Peacock"},
    {label: "Adama Migiraa", value: "Adama Migiraa"},
    {label: "Shashamane", value: "Shashamane"},
    {label: "Hawwaasa", value: "Hawwaasa"},
]

const position = [
    {label: "Admin", value: "1"},
    {label: "Employee", value: "0"}
]

const initialState: { message: string | null; errors?: Record<string, string[] | undefined> } = {
    message: null,
    errors: {},
};

const RegisterForm = ({
    setShowForm,
    defaultValues
}:{
    setShowForm: React.Dispatch<boolean>,
    defaultValues: Record<string, string | number | null >
}) => {
    const [state,formAction] = useActionState(Register,initialState)
    const [updateState,formUpdateAction] = useActionState(updateRegister,initialState)
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
      
        const form = e.currentTarget;
        const formData = new FormData(form);
      
        const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement;
        const action = submitter?.value;
      
        console.log("Submitted by:", action);
      
        startTransition(() => {
          if (action === "create") {
            formAction(formData);
          } else if (action === "edit") {
            formUpdateAction(formData)
          }
      
          setLoading(false);
        });
      };

  return (
    <div className='fixed z-20 top-0 left-0 bottom-0 right-0 flex justify-center items-center p-12 overflow-auto'>
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-black opacity-60 inset-0 z-30' onClick={()=>setShowForm(false)}></div>
        <div className='z-40 w-full md:w-6/7 md:max-w-1/2 card-bg box-shadow border-radius p-3'>
            <FormHeader content={defaultValues?.Admin_Id ? "Update" :"Register"} state={defaultValues?.Admin_Id ? updateState : state} />
            <form onSubmit={handleSubmit} className='flex flex-col p-5 mt-3'>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col md:flex-row gap-2'>
                    {defaultValues?.Admin_Id &&  <input type="hidden" name="Admin_Id" value={defaultValues?.Admin_Id} />}
                        <InputElement 
                            label="First Name" 
                            name="First_Name" 
                            error={state.errors?.First_Name?.[0]} 
                            defaultValue={defaultValues?.First_Name || ""}
                        />
                        <InputElement 
                            label="Last Name" 
                            name="Last_Name" 
                            error={state.errors?.Last_Name?.[0]} 
                            defaultValue={defaultValues?.Last_Name || ""}
                        />
                    </div>
                    <div className='flex flex-col md:flex-row gap-2'>    
                        <InputElement 
                            type='email' 
                            label="Email" 
                            name="Email" 
                            error={state.errors?.Email?.[0]} 
                            defaultValue={defaultValues?.Email || ""}
                        />
                        <DropdownElement 
                            label="Position" 
                            name="Position" 
                            options={position} 
                            error={state.errors?.Position?.[0]} 
                            defaultValue={defaultValues?.Position || ""}
                        />
                    </div>
                    <div className='flex flex-col md:flex-row gap-2'>    
                        <InputElement 
                            type='password' 
                            label="Password" 
                            name="Password" 
                            error={state.errors?.Password?.[0]} 
                            defaultValue={defaultValues?.Password || ""}
                        />
                        <InputElement 
                            type='password' 
                            label="Confirm Password" 
                            name="confirmPassword" 
                            error={state.errors?.confirmPassword?.[0]} 
                            defaultValue={defaultValues?.Password || ""}
                        />
                    </div>
                    <div className='flex flex-col md:flex-row gap-2'>    
                        <DropdownElement 
                            label="Departure (optional)" 
                            name="Departure" 
                            options={departure} 
                            error={state.errors?.Departure_Name?.[0]} 
                            required={false} 
                            defaultValue={defaultValues?.Departure_Name || ""}
                        />
                    </div>
                    <FormBtn 
                        content={ defaultValues?.Admin_Id ? "Update" : "Register"} 
                        loading={loading}
                        value={ defaultValues?.Admin_Id ? "edit" : "create" }
                    />
                </div>
            </form>
        </div>
    </div>
  )
}

export default RegisterForm