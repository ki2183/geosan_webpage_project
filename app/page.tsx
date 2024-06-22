import UnderCompanyInfo from "./ui/underCompanyInfo";
import Navigation from "./ui/navigation/navigation";
import MainBanner from "./ui/main/mainBanner";
import Maininfo from "./ui/main/mainInfo";
import { notoSansKr } from "./font/font";
import MainImgs from "./ui/main/mainImgs";
import MainQuality from "./ui/main/mainQuality";

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
