import { Table } from "antd";
import React from "react";
import { COLUMNS } from "../constants";

const TableCandidates: React.FC = () => {
  const dummyData = [
    {
      candidateName: "Valerian",
      stages: {
        name: "Screening",
        number: 2,
      },
      appliedDate: "2023-02-28",
      hiredBy: "HR",
    },
  ];
  return <Table columns={COLUMNS} dataSource={dummyData} />;
};

export default TableCandidates;
