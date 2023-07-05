import Typography from 'antd/es/typography/Typography'
import React from 'react'
import TableCandidates from './components/tableCandidates'

const Candidates : React.FC = () => {
  return (
    <div>
      <div className='mb-4'>
        <Typography className='font-semibold'>Total Candidates : 24</Typography>
      </div>
      <TableCandidates/>
    </div>
  )
}

export default Candidates