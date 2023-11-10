type RadioGroupProps = React.PropsWithChildren & {
  id: string;
  label: string;
};

export default function RadioGroup(props: RadioGroupProps) {
  const { label, id, children } = props;
  return (
    <div role="group" aria-labelledby={id}>
      <div className="hidden" id={id}>
        {label}
      </div>
      <div className="grid gap-2.5 grid-cols-1">{children}</div>
    </div>
  );
}
