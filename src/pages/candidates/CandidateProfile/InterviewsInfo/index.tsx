import { Button, Typography } from "antd";
import React from "react";
import InterviewCard from "./InterviewCard";
import { PlusCircleOutlined } from "@ant-design/icons";

const InterviewsInfo: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between">
        <Typography className="font-bold mb-4">Interview List</Typography>
        <Button type="ghost" className="text-green-500">
          <PlusCircleOutlined />
          Add Interview Schedule
        </Button>
      </div>
      <InterviewCard />
    </div>
  );
};

export default InterviewsInfo;
