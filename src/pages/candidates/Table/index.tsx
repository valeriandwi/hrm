import { Table } from "antd";
import React from "react";
import { COLUMNS } from "../constants";

type TableCandidatesProps = {
  toggleDrawer: () => void;
};

const TableCandidates: React.FC<TableCandidatesProps> = ({ toggleDrawer }) => {
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
  return <Table columns={COLUMNS(toggleDrawer)} dataSource={dummyData} />;
};

export default TableCandidates;
