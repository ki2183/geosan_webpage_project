// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

interface Metadata {
  title: string;
  description: string;
  keywords:string;
  icons: {
    icon: string;
  };
}


export const metadata: Metadata = {
	title: "거산테크",
	description: "2차 가공",
  keywords:"cnc가공 주물",
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
      {/* <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}/>
        <meta name="keywords" content={metadata.keywords}/>
      </head> */}
      <Head>
        <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <link rel="icon" href={metadata.icons.icon} />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
