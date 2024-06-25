import Image from "next/image";
import clap from "../../IMGs/introduce/clap.webp"

export default function EnterpriseIntroduce(){
    return(
      <section id="introduce" className="w-full"> 
        <div className="flex flex-col w-full text-gray-800 mt-16 gap-5">
          <div className="grid grid-cols-2 1350:grid-cols-1 gap-10 ">
            <div className="flex flex-col gap-6 text-[1.2rem] text-gray-500">
              <span className="text-2xl font-bold text-gray-950">
                열정적인 기업
              </span>
                <span>사이트를 방문해주신 분들 진심으로 감사합니다.</span>
                <span>거산테크는 각종 기계류의 정밀부품을 가공,개발하는 생산 전문업체로 2017년에 설립하여 지금까지 발전해왔습니다. <br/>지난 10여년 동안의 다양한 제품의 가공경험과 지속적인 설비 투자를 기반으로 고객에게 최상의 경험을 느낄 수 있는 회사가 되도록 매순간 노력하도록 하겠습니다.</span>
              </div>
              <div className="flex items-center justify-center w-full h-[350px] 1350:hidden rounded-xl overflow-hidden gap-2">
                <Image className="w-[70%]" alt="geosan_introduce_img" src={clap}/>
              </div>
          </div>
        </div> 
    </section> 
    )
  }