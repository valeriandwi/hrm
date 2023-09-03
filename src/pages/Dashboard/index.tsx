import { Col, Row, Typography } from "antd";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import EmployeesInfo from "./EmployeesInfo";
import HiringPipeline from "./HiringPipeline";

const { Title } = Typography;

const Dashboard: React.FC = () => {
  return (
    <MainLayout>
      <Title level={2}>Dashboard</Title>
      <Row gutter={16}>
        <Col span={16}>
          <HiringPipeline />
        </Col>
        <Col span={8}>
          <EmployeesInfo />
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Dashboard;
