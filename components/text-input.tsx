type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
};

export default function TextInput(props: InputProps) {
  const { id, label, ...inputProps } = props;

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm text-neutral-midnight-2 py-2.5 ml-4 text-left"
      >
        {label}
        {inputProps.required && <span className="text-utility-purple">*</span>}
      </label>
      <input
        className="rounded-lg px-4 py-[14px] font-bold text-[17px] leading-5 text-neutral-midnight-2 w-full border border-surface-6"
        id={id}
        {...inputProps}
      />
    </div>
  );
}
