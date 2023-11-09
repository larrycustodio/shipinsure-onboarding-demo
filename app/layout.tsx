import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/navbar";
import "./globals.css";
import TestimonialFooter from "@/components/testimonial-footer";

const inter = Open_Sans({ subsets: ["latin"] });

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
        className={`${inter.className} h-screen grid grid-rows-layout lg:grid-rows-none lg:grid-cols-layout`}
      >
        <Navbar />
        <main className="text-center p-4 mx-auto">
          {children}
          <TestimonialFooter />
        </main>
      </body>
    </html>
  );
}
