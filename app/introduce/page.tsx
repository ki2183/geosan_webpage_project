import Navigation from "../ui/navigation/navigation_side";
import { notoSansKr } from "../font/font";
import UnderCompanyInfo from "../ui/underCompanyInfo";
import Intro from "../ui/introduce/intro";
import Map from "../ui/introduce/map";
import EnterpriseIntroduce from "../ui/introduce/enterpriseIntroduce";
export default function Home() {
  return (
    <>
      <main className={`${notoSansKr.className} main`}>
          <Navigation/>
          <div className="mt-12 pt-12 flex flex-col items-center max-w-[1080px] mx-auto w-4/5 gap-12">
            <Intro/>
            <Map/>
            <EnterpriseIntroduce/>
            <div className="w-full border-t-2">
              <UnderCompanyInfo/>
            </div>
          </div>
      </main>
    </>
  );
}



