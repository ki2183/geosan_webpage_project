import gsap from "gsap"
import { useEffect, useRef } from "react"

type MainIntroBox_type = {
    title:string,
    info:string,
    url:string
}

export default function MainIntroBox({
    title,info,url
}:MainIntroBox_type){

    return(
        <div style={{backgroundImage: `url(${url})`,backgroundSize:"cover", backgroundRepeat:'no-repeat' ,backgroundPosition:"center"}} className="relative overflow-hidden main-contents rounded-lg flex flex-col items-center justify-center gap-2">
            <div style={{backgroundColor:"#0000008c"}} className=" cursor-pointer absolute w-full h-full flex flex-col items-center justify-center gap-2">
            <span className="text-xl font-bold text-white">
                {title}
            </span>
            <span className="text-sm font-light text-white">
                {info}
            </span>
            </div>
        </div>
    )
}