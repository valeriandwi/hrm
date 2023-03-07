import { DatePicker, Typography } from 'antd'
import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import TableCandidates from './components/tableCandidates'

const { RangePicker } = DatePicker;

const Candidates = () => {
  return (
    <MainLayout>
        <div className='flex justify-between mb-6'>
            <Typography className='text-2xl'>99 Candidates</Typography>
            <div className='flex flex-row space-x-2 items-center'>
                <Typography className='font-semibold'>Filter by applied date :</Typography>
                <RangePicker picker="month"/>
            </div>
        </div>
        <TableCandidates/>
    </MainLayout>
  )
}

export default Candidates