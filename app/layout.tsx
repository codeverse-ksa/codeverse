import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/navbar";

const garet = localFont({
  src: "./Garet-Heavy.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Codeverse.org",
  description: "",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={garet.className}>
        <div className="m-4">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
};