import { ChangeEvent } from "react";
import { clsx } from "clsx";

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
      className={clsx(
        "flex items-center px-4 py-[9px] gap-5 border rounded-lg hover:border-calming-breeze-tint-0",
        {
          "border-calming-breeze-tint-0": checked,
          "border-gray-85": !checked,
        }
      )}
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
