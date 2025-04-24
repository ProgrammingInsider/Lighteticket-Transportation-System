const filter = [
    {value: "Today"},
    {value: "Monthly"},
    {value: "Year"}
]

const SummationsCard = ({total, label}:{total:number, label:string}) => {
  return (
    <div className='p-2 border-radius box-shadow card-bg flex flex-col justify-center items-center cols-span-1 gap-4 w-full'>
        <div className='flex gap-1 justify-between w-full p-1 items-end'> 
          <select className='border border-gray-300 rounded-md p-1 outline-none'>
            {filter.map((item, index) => (
              <option key={index} value={item.value}>
                {item.value}
              </option>
            ))}
          </select>
          </div>
        <h1 className='text-3xl font-black heading-color'>{total}</h1> 
        <h1 className='text-lg font-bold primary'>{label}</h1> 
      </div>
  )
}

export default SummationsCard