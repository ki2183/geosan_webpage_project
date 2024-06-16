import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "거산테크",
  description: "2차 가공",
  keywords:"ssr 렌더링, 키워드,아 몰라"
};

declare global {
  interface Window {
    kakao: any;
  }
  const kakao: any;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const key = "263e15a06788d9ffb0b6279c49dd2c56"
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}/>
        <meta name="keywords" content={metadata.keywords}/>
      </head>
      <body className={inter.className}>
        <Script
          strategy="beforeInteractive"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${key}&libraries=services&autoload=false`}
        ></Script>
        {children}
      </body>
    </html>
  );
}
