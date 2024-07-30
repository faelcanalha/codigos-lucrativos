import "@/styles/globals.css";

import { FacebookPixel } from "@/app/components";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codigos Lucrativos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <FacebookPixel />
      {children}
    </>
  );
}
