import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "거산테크",
  description: "2차 가공",
  keywords:"ssr 렌더링, 키워드,아 몰라"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}/>
        <meta name="keywords" content={metadata.keywords}/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
