// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

interface Metadata {
  title: string;
  icons: {
    icon: string;
  };
}


export const metadata: Metadata = {
	title: "거산테크",
	icons: {
		icon: "/geosan_logo.webp",
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <link rel="icon" href={metadata.icons.icon} />
        <meta httpEquiv="X-UA_Compatible" content="IE=edge,chrome=1"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="김기준" content="NewmanGrove"/>
        <meta name="keywords" content="정밀가공"/>
        <meta name="description" content="산업기계 설비, 반도체 장비 부품, 소재, 정밀가공"/>
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
