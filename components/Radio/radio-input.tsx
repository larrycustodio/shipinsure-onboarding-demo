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
    <div>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
