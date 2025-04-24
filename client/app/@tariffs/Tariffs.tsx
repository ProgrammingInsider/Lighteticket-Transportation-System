'use client'

import Table from '@/components/Table'
import { ArrivalSchema, arrivals } from '@/Data/data'

const Tariffs = () => {

  return <>
    <div className='p-5 overflow-x-auto'>
      <Table 
        schema={ArrivalSchema} 
        results={arrivals.result} 
        deleteBtn={false} 
        editBtn={false} 
        addBtn={false} 
        tableName="Tariffs"
      />
    </div>
  </>
}
export default Tariffs