import Image from "next/image";
import { Fragment } from "react";
import Head from "next/head";
import { Metadata } from "next";
import Nav from "./ui/nav";
import Mainbanner from "./ui/main/mainBanner";
import MainTechnologys from "./ui/main/mainTechnologys";
import UnderCompanyInfo from "./ui/underCompanyInfo";
import Navigation from "./ui/navigation/navigation";
import Main from "./ui/main/mainBannerTest";
import MainBanner from "./ui/main/mainBannerTest";
import Maininfo from "./ui/main/mainIntro";

const metadata: Metadata = {
  title: "거산테크",
  description: "2차 가공",
  keywords:"ssr 렌더링, 키워드,아 몰라"
};

export default function Home() {
  return (
      <main className="relative min-h-screen w-screen flex flex-col">
        {/* <Nav/> */}
        <Navigation/>
        {/* <Mainbanner/> */}
        <MainBanner/>
        <Maininfo/>
        <UnderCompanyInfo/>
      </main>
  );
}
