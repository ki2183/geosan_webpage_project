import Location from "../location";

export default function Intro(){
    return(
      <section id="introduce_intro" className="w-full">
          <Location id_name="introduce_location" title="소개"/>
          <div className="flex flex-col gap-16 mt-11">
            <h1 className="text-4xl font-bold text-gray-950">CEO인삿말</h1>
            <div className="flex flex-col text-2xl text-gray-600">
              <span>고객 기대에 부응하는 회사, 신뢰받는 회사가 될 것을</span>
              <span>저희 거산테크가 약속드립니다.</span>
            </div>
          </div> 
        </section>
    )
  }