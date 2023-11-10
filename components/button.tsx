type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  const { children, ...buttonProps } = props;
  return (
    <button
      {...buttonProps}
      className="text-center leading-[56px] text-white bg-utility-purple rounded-[100px] w-full font-bold text-base disabled:opacity-50"
    >
      {children}
    </button>
  );
}
