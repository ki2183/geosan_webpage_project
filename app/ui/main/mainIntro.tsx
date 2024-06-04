import Image from "next/image"
import cnc_icon from "../../IMGs/mainbanner/cnc_icon.png"
import keli_icon from "../../IMGs/mainbanner/caliper.png"
import handshake_icon from "../../IMGs/mainbanner/handshake.jpg"
import intro_icon from "../../IMGs/mainbanner/intro.jpg"
import measure_icon from "../../IMGs/mainbanner/measure.jpg"
import MainIntroBox from "./mainIntroBox"


export default function Maininfo(){
    const maxWidth_style = {
        maxWidth :"1080px"
    }
    const box_style = {
        width:"5rem",
        height:"5rem",
    }
    const info = [
        {
            title:"설비",
            info:"cnc,탬핑기계등 보유 기계 현황",
            url:intro_icon.src
        },
        {
            title:"측정",
            info:"cnc,탬핑기계등 보유 기계 현황",
            url:measure_icon.src
        },{
            title:"거래처",
            info:"거래중인 회사 목록",
            url:handshake_icon.src
        },
    ]
    return(
        <section id="main-info" className="noto-sans-kr">
            <div className="w-screen h-auto flex flex-col items-center justify-center">
                <div>
                    <h1 className="text-3xl font-bold pt-12 color-main">
                        서비스
                    </h1>
                    <div className="w-8 h-1 bg-main mt-2 bg-main opacity-60" id="title-line"/>
                </div>
               <div className="w-full h-auto">
                    <div className="mr-auto ml-auto flex pt-9 gap-9 items-center justify-center">        
                        {
                            info.map(({title,url,info},idx)=>(
                                <MainIntroBox
                                    key={idx}
                                    url={url}
                                    info={info}
                                    title={title}
                                />
                            ))
                        }
                    </div>
               </div>
            </div>
        </section>
    )
}
