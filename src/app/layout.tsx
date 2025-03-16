import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         {/* <Script
          src="https://cse.google.com/cse.js?cx=a12d5d734668840f7"
          strategy="afterInteractive" // Loads the script after the page becomes interactive
        /> */}
        {children}
      </body>
    </html>
  );
}
