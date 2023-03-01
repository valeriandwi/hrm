import { Table } from 'antd';
import React from 'react'
import { columns } from '../constants/columns';

const TableCandidates : React.FC = () => {
  const dummyData = [
    {
      candidateName : "Valerian",
      stages : {
        name : "Screening",
        number : 2
      },
      appliedDate : "2023-02-28",
      hiredBy : "HR" 
    }
  ]
  return (
    <Table columns={columns} dataSource={dummyData}/>
  )
}

export default TableCandidates