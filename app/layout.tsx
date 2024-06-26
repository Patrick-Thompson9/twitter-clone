import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import clsx from "clsx";
import { NextAuthProvider } from "./components/NextAuthProvider";

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
    <NextAuthProvider>
      <html lang="en">
        <body
          className={clsx(
            inter.className,
            "bg-slate-900/0 text-white min-h-screen w-auto mt-10 flex flex-col"
          )}
        >
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </body>
      </html>
    </NextAuthProvider>
  );
}
