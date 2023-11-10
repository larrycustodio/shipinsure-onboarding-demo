import { ChangeEvent } from "react";

type RadioGroupProps = {
  label: string;
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function RadioInput(props: RadioGroupProps) {
  const { id, name, value, label, checked, onChange } = props;
  return (
    <div
      className={`flex items-center px-4 py-2.5 gap-5 border ${
        checked ? "border-calming-breeze-tint-0 " : "border-gray-85"
      } rounded-lg hover:border-calming-breeze-tint-0`}
    >
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="text-left w-full text-sm leading-[25px] text-gray-10 font-semibold"
      >
        {label}
      </label>
    </div>
  );
}
