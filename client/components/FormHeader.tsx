import {ResponseType} from '@/utils/types';

const FormHeader = ({content, state}:{content:string, state:ResponseType}) => {
  return (
    <div className="my-4">
        <h1 className='heading-color text-center font-medium text-xl'>{content}</h1>
        {(state?.message) && <>
                <div className="flex items-center justify-center gap-2">
                    <p className="success-message text-green-500 mb-4 font-bold text-center mt-2">
                        {state?.message}
                    </p>
                </div>
            </>}
            {(state?.errors?.root) && <>
                <div className="flex items-center justify-center gap-2">
                    <p className="error-message font-bold mb-4 text-sm text-center mt-2">
                        {state?.errors?.root}
                    </p>
                </div>
            </>}
    </div>
  )
}

export default FormHeader