import { Montserrat } from "next/font/google";

type HeaderProps = {
  heading: string;
  subheading: string;
};

export default function Heading({ heading, subheading }: HeaderProps) {
  return (
    <div className="max-w-[541px] mx-auto">
      <h1 className="text-slate font-bold mt-2.5 mb-[15px] text-xl lg:mb-5 lg:text-2xl">
        {heading}
      </h1>
      <p className="mb-[45px] tracking-base text-sm lg:mb-10 lg:text-base">
        {subheading}
      </p>
    </div>
  );
}
