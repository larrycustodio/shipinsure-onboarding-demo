type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
};

export default function TextInput(props: InputProps) {
  const { id, label, required, ...inputProps } = props;

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm text-neutral-midnight-2 py-2.5 ml-4 text-left"
      >
        {label}
        {required && <span className="text-utility-purple">*</span>}
      </label>
      <input
        className="rounded-lg px-4 py-[14px] text-[17px] leading-5 text-neutral-midnight-2 w-full border border-surface-6 focus:border-utility-purple"
        id={id}
        {...inputProps}
      />
    </div>
  );
}
