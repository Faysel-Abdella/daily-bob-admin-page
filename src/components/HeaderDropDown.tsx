import React, { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";

const HeaderDropDown = ({
  options,
  defaultSelectedKey,
  value,
  setNewValue,
  styles,
  mainStyles,
}: {
  options: { key: string; label: string }[];
  defaultSelectedKey: string;
  value: string;
  setNewValue: (value: string) => void;
  styles?: string;
  mainStyles?: string;
}) => {
  return (
    <Select
      selectedKeys={[value]}
      disallowEmptySelection={true}
      onChange={(e) => {
        setNewValue(e.target.value);
        console.log(e.target.value);
      }}
      defaultSelectedKeys={[defaultSelectedKey]}
      classNames={{
        innerWrapper: [styles],
        trigger: [mainStyles],
      }}
      aria-label="Toggle selection"
    >
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
};

export default HeaderDropDown;
