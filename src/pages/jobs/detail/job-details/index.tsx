import Typography from 'antd/es/typography/Typography'
import React from 'react'

const JobDetails : React.FC = () => {
  return (
    <div>
      <Typography className='font-semibold'>Job Details</Typography>
      <Typography className='font-semibold'>Job Description</Typography>
      <Typography className='text-justify'>We are looking for a UI/UX designer with a special place in his heart for designing and the ability to work in a fast-paced entrepreneurial environment. You should get excited about creating beautiful-looking consumer products (Apps/ Websites/Graphics) that are simple to use, intuitive and responsive.</Typography>
    </div>
  )
}

export default JobDetails