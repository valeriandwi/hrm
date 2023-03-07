import { Tag } from 'antd'
import Typography from 'antd/es/typography/Typography'
import React from 'react'

const JobDetails : React.FC = () => {
  return (
    <div className='flex flex-col space-y-2'>
      <div>
        <Typography className='font-semibold'>Job Description</Typography>
        <Typography className='text-justify'>We are looking for a UI/UX designer with a special place in his heart for designing and the ability to work in a fast-paced entrepreneurial environment. You should get excited about creating beautiful-looking consumer products (Apps/ Websites/Graphics) that are simple to use, intuitive and responsive.</Typography>
      </div>
      <div>
        <Typography className='font-semibold'>Skills Requirement</Typography>
        <Tag color={"blue"}>Frontend Developer</Tag>
      </div>
    </div>
  )
}

export default JobDetails