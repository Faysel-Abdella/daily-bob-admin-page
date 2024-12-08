import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

const DropDownWithLabel = ({
  title,
  options,
  defaultSelectedKeys,
  titleStyles,
  selectStyles,
  insideStyles,
}: {
  title: string;
  options: { key: string; label: string }[];
  defaultSelectedKeys: string;
  titleStyles?: string;
  selectStyles?: string;
  insideStyles?: string;
}) => {
  return (
    <div className="flex items-center">
      <h4 className={`${titleStyles}  text-mainBlack text-base text-nowrap`}>
        {title}
      </h4>
      <div>
        <Select
          classNames={{
            mainWrapper: [
              `${selectStyles} border-1 border-[#D2D5D6]  rounded-[5px] text-mainGray`,
            ],
            trigger: [`${insideStyles}  bg-[#ffffff] `],
            value: ["text-[15px] "],
          }}
          disallowEmptySelection={true}
          defaultSelectedKeys={[defaultSelectedKeys]}
          aria-label="Toggle selection"
        >
          {options.map((option) => (
            <SelectItem key={option.key}>{option.label}</SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default DropDownWithLabel;
