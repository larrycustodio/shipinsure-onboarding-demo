type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button(props: ButtonProps) {
  const { children, ...buttonProps } = props;
  return (
    <button
      className="text-center leading-[56px] text-white bg-utility-purple rounded-[100px] w-full font-bold text-base disabled:opacity-50"
      {...buttonProps}
    >
      {children}
    </button>
  );
}
