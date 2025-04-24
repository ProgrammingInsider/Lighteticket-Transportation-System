const FormBtn = ({
  content,
  loading,
  name = "action",
  value,
}:{
  content:string,
  loading:boolean,
  name?: string;
  value?: string;
}) => {
  return (
    <div className='my-4'>
        <button 
          type='submit' 
          className='btn btnPrimary w-full'
          name={name}
          value={value}
        >
            {
                loading 
                ? value == "create" ? "Adding..." : "Updating..." 
                : content
            
            }
        </button>
    </div>
  )
}

export default FormBtn