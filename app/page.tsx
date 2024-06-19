import { Metadata } from "next";
import UnderCompanyInfo from "./ui/underCompanyInfo";
import Navigation from "./ui/navigation/navigation";
import MainBanner from "./ui/main/mainBannerTest";
import Maininfo from "./ui/main/mainInfo";
import { notoSansKr } from "./font/font";
import MainImgs from "./ui/main/mainImgs";
import MainQuality from "./ui/main/mainQuality";

const metadata: Metadata = {
  title: "거산테크",
  description: "2차 가공",
  keywords:"ssr 렌더링, 키워드,아 몰라"
};

export const cls = (...classnames: string[]) => {
  return classnames.join(" ");
};
58 
export default function Home() {
  return (
      <main className={`${notoSansKr.className} relative min-h-screen w-screen flex flex-col`}>
        <Navigation/>
        <MainBanner/>
        <Maininfo/>
        <MainQuality/>
        <MainImgs/>
        <div className="w-[80%] mx-auto max-w-[1080px]">
          <UnderCompanyInfo/>
        </div>
        
      </main>
  );
}
