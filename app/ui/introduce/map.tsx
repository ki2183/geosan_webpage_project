import KakaoMap from "./kakaomap";

export default function Map(){
    return(
      <section id="introduce_map" className="w-full">
        <div className="w-full h-[360px] flex flex-col gap-3">
            <KakaoMap/>
            <span className="text-gray-400">경기도 시흥시 공단 3대로 185(정왕동, 시화공단 2바 1004호)</span>
        </div> 
      </section>
    )
  }