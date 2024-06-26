import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { color } from "framer-motion";
import Navbar from "./sections/navbar";

const spaceGrotesk = Space_Grotesk  ({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevPls",
  description: "WebDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={spaceGrotesk.className}>
        {/* <Navbar/> */}
        {children}
        </body>
    </html>
  );
}
