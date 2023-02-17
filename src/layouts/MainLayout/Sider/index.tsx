import React from 'react'
import { Layout, Menu, Typography } from 'antd'
import { CalendarOutlined, DashboardOutlined, LaptopOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const SiderLayout : React.FC = () => {
  return (
    <div>
      <Sider
        className='p-2 min-h-full'
      >
        <div className="logo h-[50px]" />
        <Menu 
          theme="dark" 
          defaultSelectedKeys={['1']} 
          mode="inline" 
          className='flex flex-col'
        >
          <Menu.Item className='!pr-0 !pl-4'>
            <DashboardOutlined className='mr-4'/> Dashboard
          </Menu.Item>
          <Menu.Item className='!pr-0 !pl-4'>
            <CalendarOutlined className='mr-4'/> Calendar
          </Menu.Item>

          <Typography className='m-4 text-gray-400 font-bold'>RECRUITMENT</Typography>
          <Menu.Item className='!pr-0 !pl-4'>
            <LaptopOutlined className='mr-4'/> Jobs
          </Menu.Item>
          <Menu.Item className='!pr-0 !pl-4'>
            <UserOutlined className='mr-4'/> Candidates
          </Menu.Item>

          <Typography className='m-4 text-gray-400 font-bold'>ORGANIZATION</Typography>
          <Menu.Item className='!pr-0 !pl-4'>
            <UserOutlined className='mr-4'/> Employee
          </Menu.Item>
          <Menu.Item className='!pr-0 !pl-4'>
            <PieChartOutlined className='mr-4'/> Report
          </Menu.Item>

        </Menu>
      </Sider>
    </div>
  )
}

export default SiderLayout