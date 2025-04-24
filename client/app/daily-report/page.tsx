'use client'

import Table from '@/components/Table'
import {useEffect} from 'react'
import { DailyReportSchema, DailyReport } from '@/Data/data'
import { useGlobalContext } from '@/context/ContextAPI'

const DailyReportPage = () => {
  const { exportRecords, setExportRecords, exportName, setExportName } = useGlobalContext();

  useEffect(() => {
    if (DailyReport.result.length > 0) {
      setExportRecords(DailyReport.result);
      setExportName("Daily Report");
    }
  },[exportRecords, setExportRecords, exportName, setExportName])
  return <>

    <div className='p-5 overflow-x-auto'>
      <Table schema={DailyReportSchema} results={DailyReport.result} addBtn={false} editBtn={false} deleteBtn={false} />
    </div>
  </>
}

export default DailyReportPage