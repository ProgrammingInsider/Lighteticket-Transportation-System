import ReportCard from '@/components/ReportCard'
import React from 'react'

const ReportPage = () => {
  return <>

    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2 m-4'>
      <ReportCard type="Vehicles" rows="1905" records={[]} />
      <ReportCard type="Employees" rows='31' records={[]} />
      <ReportCard type="Trips" rows='138185' records={[]} />
    </div>
  </>
}

export default ReportPage