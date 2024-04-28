import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Howl",
  description: "Twitter Clone Chat App Howl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-800 text-white h-screen w-auto">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
