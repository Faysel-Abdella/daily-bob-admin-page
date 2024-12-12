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
    <div className="flex items-center w-full">
      <h4 className={`${titleStyles} text-mainBlack text-base text-nowrap `}>
        {title}
      </h4>
      <div className="flex-grow">
        <Select
          classNames={{
            base: "w-full",
            mainWrapper: [
              `${selectStyles} border-1 border-[#D2D5D6] rounded-[5px] text-mainGray`,
            ],
            trigger: [`${insideStyles} bg-[#ffffff] w-full`],
            value: ["text-[15px] text-nowrap"],
          }}
          className="max-w-full"
          disallowEmptySelection={true}
          defaultSelectedKeys={[defaultSelectedKeys]}
          aria-label="Toggle selection"
        >
          {options.map((option) => (
            <SelectItem key={option.key} className="text-nowrap">
              {option.label}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default DropDownWithLabel;
