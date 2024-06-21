import plan from "../../IMGs/mainbanner/plan.png"
import pattern from "../../IMGs/mainbanner/pattern.webp"
import cnc_ from "../../IMGs/mainbanner/cnc_.webp"
import Image from "next/image"
import style from "./mainBanner.module.scss"
import Link from "next/link"

export default function MainBanner(){

    const text_color = "#1D3A44"

    return(
        <section id="main-banner">
            <div className={style.container_mainBanner}>
                <div style={{backgroundImage: `url(${pattern.src})`, opacity:0.02}} className="absolute w-full h-full top-0"/>
                <Image
                        src={plan}
                        alt='asd'
                        className={style.main_banner_plan_img}
                    />
                <Image
                        src={cnc_}
                        alt='asd'
                        quality={100}
                        className={style.main_banner_cnc_img}
                />
                <div className={style.main_info_contents_box}>
                    <div className="flex flex-col justify-center text-orange-50 gap-5">
                        <h1 className="text-5xl font-bold">
                            거산테크
                        </h1>
                        <span className="text-lg leading-7">거산테크는 설립기간은 길지 않지만 풍부한 경험과 경력을 바탕으로 하여 최고의 품질의 정밀부품가공을 진행하고 있으며 항상 고객감동을 추구 합니다.</span>
                        <Link href="/introduce">
                        <div className="w-full flex">
                            
                                <Mainbutton/>
                            
                        </div>
                        </Link>

                        
                    </div>
          
                </div>
            </div>
        </section>
    )
}

function Mainbutton(){
    const text_color = "#1D3A44"
    return(
        <button style={{color:text_color}} className="bg-red-50 p-1 pl-3 pr-3 rounded-full font-bold text-gray-600 1060:mt-6 1060:w-full 1060:mx-auto 1060:text-xl 1060:p-2">
            지도보기
        </button>
    )
}