import SummationsCard from "@/components/SummationsCard"

const TotalDatas = [
  {
      total:126243,
      label: "Total Trip"
  },
  {
      total:994,
      label: "Total Vehicles"
  },
  {
      total:19,
      label: "Total Employees"
  },
]

const Totals = () => {
  return (
    <div className="flex flex-1 gap-4 max-w-5xl justify-center items-center mt-8 mx-auto">
      {
        TotalDatas.map((item, index)=>{
          return <SummationsCard key={index} total={item.total} label={item.label}/>
        })
      }
    </div>

  )
}

export default Totals