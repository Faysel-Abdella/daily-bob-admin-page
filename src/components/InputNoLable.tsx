import { Input } from "@nextui-org/react";

const InputNoLabel = ({
  defaultValue,
  handelChangeText,
  mainStyles,
  inputParentStyles,
  inputStyles,
  placeholder,
  type = "text",
}: {
  defaultValue?: string;
  handelChangeText?: any;
  mainStyles?: string;
  inputParentStyles?: string;
  inputStyles?: string;
  placeholder?: string;
  type?: "text" | "number" | "date";
}) => {
  return (
    <section className={`flex items-center gap-7 ${mainStyles}`}>
      <div className="w-full">
        <div className={`${inputParentStyles} `}>
          <Input
            placeholder={placeholder}
            defaultValue={defaultValue}
            type={type}
            onValueChange={handelChangeText}
            classNames={{
              input: [
                "placeholder:text-[#A1A9A3] placeholder:text-[14px] text-[15px]",
              ],
              inputWrapper: [
                `${inputStyles}  bg-[#ffffff] border-[1px] border-[#D2D5D6] rounded-[5px] `,
              ],
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default InputNoLabel;
