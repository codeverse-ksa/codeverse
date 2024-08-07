import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
          <Footer />
        </div>
      </body>
    </html>
  );
};