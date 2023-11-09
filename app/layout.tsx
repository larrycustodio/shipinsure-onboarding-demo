import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/navbar";
import "./globals.css";
import TestimonialFooter from "@/components/testimonial-footer";

const openSans = Open_Sans({
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShipInsure Onboarding",
  description: "Sample Code for ShipInsure Onboarding",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} h-screen grid grid-rows-layout lg:grid-rows-none lg:grid-cols-layout`}
      >
        <Navbar />
        <main className="text-center p-4 lg:py-[78px]">
          {children}
          <TestimonialFooter />
        </main>
      </body>
    </html>
  );
}
