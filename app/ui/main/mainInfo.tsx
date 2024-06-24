import Link from "next/link"
import handshake_icon from "../../IMGs/mainbanner/handshake.webp"
import intro_icon from "../../IMGs/mainbanner/intro.webp"
import measure_icon from "../../IMGs/mainbanner/measure_.webp"
import style from "./mainInfo.module.scss"
import Image, { StaticImageData } from "next/image"

interface contents {
    title:string,
    info:string,
    url:StaticImageData,
    link:string
}

export default function Maininfo(){
    const info:contents[] = [
        {
            title:"소개",
            info:"거산테크 회사소개",
            url:intro_icon,
            link:"/introduce",
        },
        {
            title:"설비/측정",
            info:"cnc,탬핑기계등 보유 기계 현황",
            url:measure_icon,
            link:"/cnc",
        },{
            title:"거래처",
            info:"거래중인 회사 목록",
            url:handshake_icon,
            link:"vendor",
        },
    ]
    return(
        <section id="main-info" className="noto-sans-kr">
            <div className="w-screen h-auto flex flex-col items-center justify-center">
                <MaininfoTitle title="서비스"/>
               <MaininfoContentBox info={info}/>
            </div>
        </section>
    )
}
interface title {
    title:string
}
function MaininfoTitle({title}:title){
    return(
        <div>
            <h1 className="text-3xl font-bold pt-12 color-main">
                {title}
            </h1>
            <div className="w-8 h-1 bg-main mt-2 bg-main opacity-60" id="title-line"/>
        </div>
    )
}
interface maininfoContentBox{
    info:contents[]
}
function MaininfoContentBox({info}:maininfoContentBox){
    return(
        <div className="w-full h-auto">
            <div className="container-box mr-auto ml-auto flex pt-9 gap-9 items-center justify-center">        

                {
                    info.map(({url,info,title,link},idx)=>(
                        <Link
                            href={link}
                            key={idx}
                        >
                            <MaininfoItem
                                url={url}
                                info={info}
                                title={title}
                            />
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}

type MainIntroItem_type = {
    title:string,
    info:string,
    url:StaticImageData,
}
function MaininfoItem({
    url,info,title
}:MainIntroItem_type){
    const styl_ = {
        top: "50%",
        left: "50%",
        transform: 'translate(-50%, -50%)',
        position: 'absolute',

    }
    return(
        <div className={style.container_box}>
            <div className={style.container_box_img}>
                <Image
                    src={url}
                    alt="img"
                    className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] scale-[1.2]"
                />
            </div>
            <div className={style.container_box_text}>
                <span>{title}</span>
                <span>{info}</span>
            </div>            
        </div>
    )
}