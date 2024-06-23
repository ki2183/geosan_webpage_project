"use client"

import Navigation from "../ui/navigation/navigation_side";
import KakaoMap from "./kakaomap";
import { notoSansKr } from "../font/font";
import UnderCompanyInfo from "../ui/underCompanyInfo";
import Location from "../ui/location";
import Image from "next/image";
import clap from "../IMGs/introduce/clap.webp"
const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;
export default function Home() {
  return (
    <>
      <main className={`${notoSansKr.className} main`}>
          <Navigation/>
          <div className="mt-12 pt-12 flex flex-col items-center max-w-[1080px] mx-auto w-4/5 gap-12">
            <section className="w-full">
              <Location id_name="introduce_location" title="소개"/>
              <div className="flex flex-col gap-16 mt-11">
                <h1 className="text-4xl font-bold text-gray-950">CEO인삿말</h1>
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
                
                <div className="grid grid-cols-left 1350:grid-cols-1 gap-10">
                 
                  <div className="flex flex-col gap-6 text-[1.2rem] text-gray-500">
                    <span className="text-2xl font-bold text-gray-950">
                      열정적인 기업
                    </span>
                      <span>사이트를 방문해주신 분들 진심으로 감사합니다.</span>
                      <span>거산테크는 각종 기계류의 정밀부품을 가공,개발하는 생산 전문업체로 2014년에 설립하여 지금까지 발전해왔습니다. <br/>지난 10여년 동안의 다양한 제품의 가공경험과 지속적인 설비 투자를 기반으로 고객에게 최상의 경험을 느낄 수 있게 회사가 되도록 매순간 노력하도록 하겠습니다.</span>
                    </div>
                    <div className="flex items-start justify-center w-full h-[350px] bg-white rounded-xl overflow-hidden gap-2">
                      <Image alt="geosan_introduce_img" src={clap}/>
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
