import plan from "../../IMGs/mainbanner/plan.webp"
import pattern from "../../IMGs/mainbanner/pattern.webp"
import cnc from "../../IMGs/mainbanner/cnc.webp"
import Image from "next/image"
import style from "./mainBanner.module.scss"
import Link from "next/link"

export default function MainBanner(){

    return(
        <section id="main-banner">
            <div className={style.container_mainBanner}>
                <MainBannerImgs/>
                <MainBannerIntro/>
            </div>
        </section>
    )
}

function MainBannerImgs(){
    return <>
        <div style={{backgroundImage: `url(${pattern.src})`, opacity:0.02}} className="absolute w-full h-full top-0"/>
        <Image
                src={plan}
                alt='main_banner_img'
                className={style.main_banner_plan_img}
            />
        <Image
                src={cnc}
                alt='main_banner_cnc_machine_img'
                quality={100}
                className={style.main_banner_cnc_img}
        />
    </>
}

function MainBannerIntro(){
    return (
        <div className={style.main_info_contents_box}>
            <div className="flex flex-col justify-center text-orange-50 gap-5">
                <h1 className="text-5xl font-bold">
                    거산테크
                </h1>
                <span className="text-lg leading-7">풍부한 경험과 경력을 바탕으로 하여 최고의 품질의 정밀부품가공을 진행하고 있으며 항상 고객감동을 추구하는 강소기업 입니다.</span>
                <Link href="/introduce">
                    <div className="w-full flex">
                            <Mainbutton/>
                    </div>
                </Link>     
            </div>
        </div>
    )
}

function Mainbutton(){
    const text_color = "#1D3A44"
    return(
        <button className={`box-border py-1 border-2 text-[${text_color}] bg-red-50 px-3 rounded-full font-bold text-gray-600 1060:mt-6 1060:w-full 1060:mx-auto 1060:text-xl 1060:p-2 hover:bg-transparent hover:text-red-50 hover:border-2 hover:border-red-50`}>
            지도보기
        </button>
    )
}