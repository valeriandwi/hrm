import React from 'react'
import { Layout, Menu, MenuProps } from 'antd'
import { AppstoreOutlined, BarChartOutlined, CloudOutlined, ShopOutlined, TeamOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const SiderLayout : React.FC = () => {
  const items: MenuProps['items'] = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
    className: "rounded-md"
  }));
  
  return (
    <div>
      <Sider
        className='p-2 min-h-full'
      >
        <div className="logo" />
        <Menu 
          theme="dark" 
          defaultSelectedKeys={['1']} 
          mode="inline" 
          items={items} 
        />
      </Sider>
    </div>
  )
}

export default SiderLayout