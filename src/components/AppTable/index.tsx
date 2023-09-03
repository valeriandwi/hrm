import { Table } from "antd";
import React from "react";

const AppTable: React.FC<any> = ({ data, columns }) => {
  return (
    <div>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default AppTable;
