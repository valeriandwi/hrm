import { Tabs, TabsProps } from "antd";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import ActiveJobs from "./ActiveJobs";
import InactiveJobs from "./InactiveJobs";

const Jobs: React.FC = () => {
  const items: TabsProps["items"] = [
    {
      key: "activeJobs",
      label: `ACTIVE JOBS`,
      children: <ActiveJobs />,
    },
    {
      key: "inactiveJobs",
      label: `INACTIVE JOBS`,
      children: <InactiveJobs />,
    },
  ];

  return (
    <MainLayout>
      <Tabs defaultActiveKey="1" items={items} />
    </MainLayout>
  );
};

export default Jobs;
