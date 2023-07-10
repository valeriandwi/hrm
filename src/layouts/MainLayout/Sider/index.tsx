import React from "react";
import { Layout, Menu, Typography } from "antd";
import {
  CalendarOutlined,
  DashboardOutlined,
  LaptopOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const { Sider } = Layout;

const SiderLayout: React.FC = () => {
  const navigate = useNavigate();

  // const getSelectedMenu = () : (string | undefined)[] => {
  //   if(pathname === "/") return ["dashboard"];
  //   const path = pathname.replace("/","");
  //   return [PUBLIC_ROUTES.filter(({key}) => key === path)[0]["key"]] || [];
  // }

  return (
    <div>
      <Sider className="p-2 h-[100vh]">
        <div className="logo h-[50px]" />
        <Menu
          theme="dark"
          // selectedKeys={getSelectedMenu() as string[]}
          mode="inline"
          className="flex flex-col"
        >
          <Menu.Item className="!pr-0 !pl-4" key="dashboard">
            <Link to="/">
              <DashboardOutlined className="mr-4" /> Dashboard
            </Link>
          </Menu.Item>
          <Menu.Item className="!pr-0 !pl-4" key="calendar">
            <CalendarOutlined className="mr-4" /> Calendar
          </Menu.Item>

          <Typography className="m-4 text-gray-400 font-bold">
            RECRUITMENT
          </Typography>
          <Menu.Item
            className="!pr-0 !pl-4"
            key="jobs"
            onClick={() => navigate("/jobs")}
          >
            <LaptopOutlined className="mr-4" /> Jobs
          </Menu.Item>
          <Menu.Item
            className="!pr-0 !pl-4"
            key="candidates"
            onClick={() => navigate("/candidates")}
          >
            <UserOutlined className="mr-4" /> Candidates
          </Menu.Item>

          <Typography className="m-4 text-gray-400 font-bold">
            ORGANIZATION
          </Typography>
          <Menu.Item
            className="!pr-0 !pl-4"
            key="employee"
            onClick={() => navigate("/employee")}
          >
            <UserOutlined className="mr-4" /> Employee
          </Menu.Item>
          <Menu.Item className="!pr-0 !pl-4" key="report">
            <PieChartOutlined className="mr-4" /> Report
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
};

export default React.memo(SiderLayout);
