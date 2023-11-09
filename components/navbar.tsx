"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navList = [
    {
      label: "Personal Info",
      href: "/onboarding/user-profile",
      isRequired: false,
    },
    {
      label: "Monthly Orders",
      href: "/onboarding/store-profile",
      isRequired: true,
    },
    { label: "Billing", href: "/onboarding/billing", isRequired: true },
  ];

  return (
    <nav className="lg:shadow-nav">
      <div className="bg-calming-breeze-tint-0 pt-[39px] pb-[19px] px-4 text-white lg:px-8 lg:pt-[70px] lg:pb-[27px]">
        <div className="text-xl leading-6	mb-1 font-bold">Onboarding</div>
        <div className="text-2xs leading-3.5">2/3 steps complete!</div>
      </div>

      <ul className="hidden lg:flex flex-col gap-10 px-8 py-10">
        {navList.map(({ href, label, isRequired }) => (
          <li
            key={href}
            className={`${
              pathname === href
                ? "text-utility-purple font-bold"
                : "text-neutral-midnight-0"
            } text-sm leading-4`}
          >
            <Link href={href}>
              {label}
              {isRequired && (
                <span className="text-2xs text-utility-purple leading-4 tracking-widest font-bold ml-2">
                  Required
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
