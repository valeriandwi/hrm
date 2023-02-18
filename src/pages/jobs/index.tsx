import { Tabs, TabsProps } from 'antd'
import React from 'react'
import MainLayout from '../../layouts/MainLayout'

const Jobs : React.FC = () => {
    const items: TabsProps['items'] = [
        {
          key: 'activeJobs',
          label: `ACTIVE JOBS`,
          children: `Content of Tab Pane 1`,
        },
        {
          key: 'inactiveJobs',
          label: `INACTIVE JOBS`,
          children: `Content of Tab Pane 2`,
        }
    ];
    
    return (
        <MainLayout>
            <Tabs defaultActiveKey="1" items={items} />
        </MainLayout>
    )
}

export default Jobs