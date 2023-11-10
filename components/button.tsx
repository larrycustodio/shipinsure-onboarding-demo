import { clsx } from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button(props: ButtonProps) {
  const { children, variant = "primary", ...buttonProps } = props;
  return (
    <button
      {...buttonProps}
      className={clsx(
        "text-center h-14 leading-[56px] rounded-[100px] w-full font-bold text-base border disabled:opacity-50",
        {
          "text-white bg-utility-purple border-utility-purple":
            variant === "primary",
          "text-neutral-midnight-0 bg-purely-heaven border-neutral-midnight-0":
            variant === "secondary",
        }
      )}
    >
      {children}
    </button>
  );
}
