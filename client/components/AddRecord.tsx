'use client'

import {useActionState, useState, useRef, useEffect} from 'react'
import FormHeader from './FormHeader'
import FormBtn from './FormBtn'
import { startTransition } from "react";
import { FormType, initialStateType, defaultValuesType } from '@/utils/types'
import DynamicForm from './DynamicForm'


const initialState: initialStateType = {
    message: null,
    errors: {},
};

const AddRecord = ({
    setShowForm,
    defaultValues,
    clearForm,
    FormElements,
    FormOf,
    identifier,
    createAction,
    updateAction
}:{
    setShowForm: React.Dispatch<boolean>,
    defaultValues: defaultValuesType,
    clearForm: boolean,
    FormElements:FormType[]
    FormOf: string,
    identifier: string,
    createAction: (
        state: { message: string | null, errors?: Record<string, string[] | undefined> },
        formData: FormData
    ) => Promise<{ message: string | null, errors?: Record<string, string[] | undefined> }>,
    updateAction?: (
        state: { message: string | null, errors?: Record<string, string[] | undefined> },
        formData: FormData
    ) => Promise<{ message: string | null, errors?: Record<string, string[] | undefined> }>
}) => {
    const [state,formAction] = useActionState(createAction,initialState)
    // {const [updateState,formUpdateAction] = useActionState(updateAction,initialState)}
    const [updateState, formUpdateAction] = useActionState(
        updateAction || ((state: initialStateType) => state),
        initialState
      )
    const [loading, setLoading] = useState(false);

    const isEditMode = !clearForm;

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
          } else if (action === "edit" && formUpdateAction) {
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
           <FormHeader content={isEditMode ? `Update ${FormOf}` : `Add ${FormOf}` } state={isEditMode ? updateState : state} />
            <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col p-5 mt-3'>
            {isEditMode &&  <input type="hidden" name={identifier} value={defaultValues?.[identifier] ?? ''} />}
                <DynamicForm 
                    FormElements={FormElements} 
                    state={isEditMode ?  updateState : state } 
                    defaultValues={defaultValues}
                />

                <FormBtn 
                    content={ isEditMode ? `Update ${FormOf}` : `Add ${FormOf}`  } 
                    loading={loading}
                    value={ isEditMode ? "edit" : "create" }
                />
            </form>
        </div>
    </div>
  )
}

export default AddRecord
