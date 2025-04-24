import { FormType, initialStateType, defaultValuesType } from '@/utils/types'
import DropdownElement from './DropdownElement';
import InputElement from './InputElement';


const DynamicForm = ({
    FormElements, 
    state, 
    defaultValues
}:{
    FormElements:FormType[], 
    state:initialStateType, 
    defaultValues:defaultValuesType
}) => {
  return (
    <div className={`grid ${ (Object.keys(FormElements).length > 0 && Object.keys(FormElements).length < 2) || 'gap-2 sm:grid-cols-2'}`}>
        {FormElements.map((item, index) => {
            const defaultValue = defaultValues?.[item.name] ?? "";
    
            if (item.element === "dropdown") {
                return (
                <DropdownElement
                    key={index}
                    label={item.label}
                    name={item.name}
                    options={item.options || []}
                    error={state.errors?.[item.name]?.[0]}
                    defaultValue={defaultValue}
                    required={item?.required}
                />
                );
            }
    
            return (
                <InputElement
                key={index}
                type={item.type}
                label={item.label}
                name={item.name}
                error={state.errors?.[item.name]?.[0]}
                defaultValue={defaultValue}
                required={item?.required}
                />
            );
            })}
    </div>
  )
}

export default DynamicForm