import { Card, Steps, Typography } from "antd";
import React from "react";

type HiringStepProps = {
  currentStep: number;
};

const HiringStep: React.FC<HiringStepProps> = ({ currentStep = 1 }) => {
  const hiringProcess = [
    "Screening",
    "Design Challenge",
    "Interview",
    "Test",
    "Hired",
  ];
  return (
    <Card className="mb-6">
      <Typography className="mb-4">
        Stage of : <b>UI Designer</b>
      </Typography>
      <Steps
        current={currentStep}
        status="error"
        progressDot
        items={hiringProcess.map((process) => ({ title: process }))}
      />
    </Card>
  );
};

export default HiringStep;
