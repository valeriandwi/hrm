import AppButton from "@/components/AppButton";
import { Form, Input } from "antd";
import React from "react";

const InterviewForm: React.FC = () => {
  return (
    <Form layout="vertical">
      <Form.Item name="purpose" label="Purpose">
        <Input placeholder="Purpose" />
      </Form.Item>
      <Form.Item name="linkMeeting" label="Link Meeting">
        <Input placeholder="Link Meeting" />
      </Form.Item>
      <Form.Item className="justify-center flex">
        <AppButton type="default" className="mr-2">
          Cancel
        </AppButton>
        <AppButton type="primary">Submit</AppButton>
      </Form.Item>
    </Form>
  );
};

export default InterviewForm;
