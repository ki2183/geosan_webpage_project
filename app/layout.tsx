// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "거산테크 -CNC 선반 정밀가공 업체",
  description:"산업기계 설비, 반도체 장비 부품, 소재, 정밀가공, MCT, 시화공단, 안산 시화공단",
  authors:[{ name: "김기준", url: "https://github.com/ki2183" }],
  keywords:"산업기계 설비, 반도체 장비 부품, 소재, 정밀가공,MCT, 시화공단, 안산 시화공단",
  
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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
