import { Montserrat } from "next/font/google";

type HeaderProps = {
  heading: string;
  subheading: string;
};

export default function Heading({ heading, subheading }: HeaderProps) {
  return (
    <div className="max-w-[541px] mx-auto">
      <h1 className="text-slate font-bold mt-2.5 mb-[15px] text-xl tracking-heading leading-6 lg:mb-6 lg:mt-0 lg:text-2xl lg:tracking-lg lg:leading-7">
        {heading}
      </h1>
      <p className="mb-[45px] tracking-base text-sm lg:mb-10 lg:text-base">
        {subheading}
      </p>
    </div>
  );
}
