import Navigation from "../ui/navigation/navigation_side";
import KakaoMap from "./kakaomap";
import { notoSansKr } from "../font/font";
import UnderCompanyInfo from "../ui/underCompanyInfo";

export default function Home() {
  return (
    <>
      <main className={`${notoSansKr.className} main`}>
          <Navigation/>
          <div className="mt-12 pt-12 flex flex-col items-center max-w-[1080px] mx-auto w-4/5 gap-12">
            <section className="w-full">
              <div className="flex flex-col gap-16">
                <h1 className="text-4xl font-bold">CEO인삿말</h1>
                <div className="flex flex-col text-2xl text-gray-600">
                  <span>고객 기대에 부응하는 회사, 신뢰받는 회사가 될 것을</span>
                  <span>저희 거산테크가 약속드립니다.</span>
                </div>
              </div> 
            </section>
            <section className="w-full">
              <div className="w-full h-[360px] flex flex-col gap-3">
                  <KakaoMap/>
                  <span className="text-gray-400">경기도 시흥시 공단 3대로 185(정왕동, 시화공단 2바 1004호)</span>
              </div> 
            </section>
            <section className="w-full">
              
              <div className="flex flex-col w-full text-gray-800 mt-16 gap-5">
                <span className="text-2xl">
                    오래되었지만 늘 새로운 기업
                  </span>
                <div className="grid grid-cols-right 1060:grid-cols-1">
                 
                  <div className="flex flex-col gap-6">
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa cumque, sint atque, minus debitis maiores doloremque quis earum numquam facere nesciunt distinctio ipsam architecto similique culpa corrupti velit modi!</span>
                    <span>Lorem ipsam architecto similique culpa corrupti velit modi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa cumque, sint atque, minus debitis maiores doloremque quis earum numquam facere nesciunt distinctio ipsam architecto similique culpa corrupti velit modi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa cumque, sint atque, minus debitis maiores doloremque quis earum numquam facere nesciunt distinctio ipsam architecto similique culpa corrupti velit modi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa cumque, sint atque, minus debitis maiores doloremque quis earum numquam facere nesciunt distinctio ipsam architecto similique culpa corrupti velit modi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa cumque, sint atque, </span>
                  </div>
                  <div className="flex items-start justify-center gap-2 1060:hidden">
                    <div className="w-[350px] h-[350px] bg-white rounded-xl"></div>
                  </div>
                </div>
              </div> 
            </section>    
            <div className="w-full border-t-2">
              <UnderCompanyInfo/>
            </div>
            
          </div>
      </main>
    </>
  );
}
