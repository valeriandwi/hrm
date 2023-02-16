import { SearchOutlined } from '@ant-design/icons';
import { Avatar, Layout } from 'antd';
import React from 'react'
import SiderLayout from './Sider';

const { Header,Content } = Layout;

type MainLayoutProps = {
  children : React.ReactNode;
}

const MainLayout : React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout className='min-h-[100vh] min-w-full'>
        <SiderLayout/>
        <Layout>
          <Header className='w-full !bg-white'>
            <div className='justify-end items-center h-full flex flex-row'>
              <Avatar>V</Avatar>
            </div>
          </Header>
          <Content className="bg-[#F2F7FA] p-4">
            {children}
          </Content>
        </Layout>
    </Layout>
  )
}

export default MainLayout;