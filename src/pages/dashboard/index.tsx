import { Button, Card, Divider, Typography } from 'antd'
import Table, { ColumnsType } from 'antd/es/table';
import React from 'react'
import MainLayout from '../../layouts/MainLayout'

const { Title } = Typography;

const Dashboard : React.FC = () => {
  const dummyData = [
    {
      jobs : {
        name : 'Frontend Developer',
        total : 165
      },
      newApplied : 34,
      screening : 10,
      interview : 10,
      test : 10,
      hired : 10
    }
  ]

  const columns: ColumnsType<any> = [
    {
      title: 'Jobs',
      dataIndex: 'jobs',
      key: 'jobs',
      render: (value : any) => (
        <>
          <Typography className='font-semibold'>{value.name}</Typography>
          <Typography className='font-medium'>
            <span className='text-grey-500-color'>Total Applicants : </span> 
            {value.total}
          </Typography>
        </>
      )
    },
    {
      title: 'New Applied',
      dataIndex: 'newApplied',
      key: 'newApplied',
      className: "bg-[#97B4B1] !text-center",
      render : (value : any) => (
        <div>
          <Typography className='text-white-color'>{value} candidates</Typography>
        </div>
      )
    },
    {
      title: 'Screening',
      dataIndex: 'screening',
      key: 'screening',
      className: "bg-[#3E726F] !text-center",
      render : (value : any) => (
        <div>
          <Typography className='text-white-color'>{value} candidates</Typography>
        </div>
      )
    },
    {
      title : 'Interview',
      dataIndex : 'interview',
      key : 'interview',
      className: "bg-[#FB8E02] !text-center",
      render : (value : any) => (
        <div>
          <Typography className='text-white-color'>{value} candidates</Typography>
        </div>
      )
    },
    {
      title : 'Test',
      dataIndex : 'test',
      key : 'test',
      className: "bg-[#C579CE] !text-center",
      render : (value : any) => (
        <div>
          <Typography className='text-white-color'>{value} candidates</Typography>
        </div>
      )
    },{
      title : 'Hired',
      dataIndex : 'hired',
      key : 'hired',
      className: "bg-[#A6C78D] !text-center",
      render : (value : any) => (
        <div>
          <Typography className='text-white-color'>{value} candidates</Typography>
        </div>
      )
    }
  ];

  return (
    <MainLayout>
      <Title level={2}>Dashboard</Title>
      <Card>
        <div className='flex flex-row justify-between items-center'>
          <Typography className="font-bold text-lg">Hiring Pipeline</Typography>
          <Button type='ghost'>View All Jobs</Button>
        </div>
        <Divider className='mb-3 mt-4'/>
        <Table
          className='pointer-events-none'
          pagination={false}
          size="small"
          columns={columns}
          dataSource={dummyData}
          bordered={false}
        />
      </Card>
    </MainLayout>
  )
}

export default Dashboard