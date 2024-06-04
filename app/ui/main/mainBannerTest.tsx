import Image from "next/image"
import factory from "../../IMGs/factory.jpg"
import plan from "../../IMGs/mainbanner/plan.png"
import plan1 from "../../IMGs/mainbanner/plan1.png"
import plan2 from "../../IMGs/mainbanner/plan2.png"
import pattern from "../../IMGs/mainbanner/parttern.png"
import cnc from "../../IMGs/mainbanner/cnc_.png"

export default function MainBanner(){

    const text_color = "#1D3A44"

    return(
        <section id="main-banner">
            <div style={{height:"70vh"}} className=" relative noto-sans-kr w-screen bg-main pt-8 flex item-center justify-center">
                <div style={{backgroundImage: `url(${pattern.src})`, opacity:0.02}} className="absolute w-full h-full top-0"/>
                {/* <div style={{backgroundImage: `url(${cnc.src})`, opacity:1}} className="absolute w-full h-full top-0"/> */}

                <Image
                    alt="img"
                    src={cnc}
                    className="absolute right-0 w-full "
                />
                
                
                <div style={{maxWidth:"1080px"}} className="h-full w-3/4 grid grid-cols-2">
                    <div style={{maxWidth:"420px"}} className="flex flex-col items-star justify-center text-orange-50 gap-5">
                        <h1 className="text-5xl font-bold">
                            거산테크
                        </h1>
                        <span className="text-lg leading-7">거산테크는 설립기간은 길지 않지만 풍부한 경험과 경력을 바탕으로 하여 최고의 품질의 정밀부품가공을 진행하고 있으며 항상 고객감동을 추구 합니다.</span>
                        <div>
                            <Mainbutton/>
                        </div>

                        
                    </div>
                    <div className="flex items-center justify-center" >
                        <div className="w-screen h-full flex relative items-center justify-center">
                            <div className="relative w-full">
                                <Image
                                    src={plan}
                                    className="ml-auto w-full opacity-50"
                                    alt="설계도"
                                />
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Mainbutton(){
    const text_color = "#1D3A44"
    return(
        <button style={{color:text_color}} className="bg-red-50 p-1 pl-3 pr-3 rounded-full font-bold text-gray-600">
            지도 보기
        </button>
    )
}