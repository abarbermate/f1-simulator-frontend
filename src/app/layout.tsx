import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/utilities/QueryProvider";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "F1 Simulator",
  description: "Homework for Digital Thinkers",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <QueryProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </QueryProvider>
  );
}
