import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Love_Ya_Like_A_Sister } from "next/font/google";
import "./globals.css";
import "./style.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const indie = Love_Ya_Like_A_Sister({
  subsets: ["latin"],
  weight: "400", // Specify the weight here
  variable: "--font-indie", // Also correct the variable name to match the font
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${indie.variable}`}>
        {" "}
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
