import Image from "next/image"
import cnc_icon from "../../IMGs/mainbanner/cnc_icon.png"
import keli_icon from "../../IMGs/mainbanner/caliper.png"
import handshake_icon from "../../IMGs/mainbanner/handshake.png"

export default function Maininfo(){
    const maxWidth_style = {
        maxWidth :"1080px"
    }
    const box_style = {
        width:"5rem",
        height:"5rem"
    }
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
                    <div style={maxWidth_style} className="mr-auto ml-auto flex pt-9 gap-9 items-center justify-center">
                        <div className="main-contents rounded-lg flex flex-col items-center justify-center gap-2">
                            <Image className="w-1/3" alt="cnc가공" src={cnc_icon}/>
                            <span className="text-lg">
                                설비관련
                            </span>
                            <span className="text-sm font-light">
                                cnc,탬핑기계등 보유 기계 현황
                            </span>
                        </div>
                        <div className="main-contents rounded-lg flex flex-col items-center justify-center gap-2">
                            <Image className="w-1/3" alt="cnc가공" src={keli_icon}/>
                            <span className="text-lg">
                                측정관련
                            </span>
                            <span className="text-sm font-light">
                                cnc,탬핑기계등 보유 기계 현황
                            </span>
                        </div>
                        <div className="main-contents rounded-lg flex flex-col items-center justify-center gap-2">
                            <Image className="w-1/3" alt="cnc가공" src={handshake_icon}/>
                            <span className="text-lg">
                                협력업체
                            </span>
                            <span className="text-sm font-light">
                                cnc,탬핑기계등 보유 기계 현황
                            </span>
                        </div>                
                    </div>
               </div>
            </div>
        </section>
    )
}