import type { Metadata } from "next";
import { Bellota, Bellota_Text } from "@next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const bellota = Bellota({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you need
  variable: "--font-bellota",
});

const bellotaText = Bellota_Text({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you need
  variable: "--font-bellota-text",
});

export const metadata: Metadata = {
  title: "Lighthouse Apartment",
  description: "Real Estate Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bellota.variable} ${bellotaText.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}