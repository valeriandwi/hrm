import { CloseOutlined } from "@ant-design/icons";
import React from "react";
import { TModalState } from "../../hooks/useModal";

type TitleProps = {
  label: string;
  modal?: TModalState;
};

const Title: React.FC<TitleProps> = ({ modal, label }) => {
  return (
    <div className="flex justify-between items-center font-bold pt-2 pb-5">
      <p className="w-full text-center">{label}</p>
      <CloseOutlined onClick={modal.onCancel} className="cursor-pointer" />
    </div>
  );
};

export default Title;
