import Image from "next/image";
import parts1 from "./parts1.webp"
import parts2 from "./parts2.webp"
import parts3 from "./parts3.png"
import parts4 from "./parts4.png"
import parts5 from "./parts5.png"
import parts6 from "./parts6.png"

type ImgParts_type = {
    class_name?: string
    alt:string
    idx:number
}
export default function ImgParts({class_name,idx,alt}:ImgParts_type){

    let src

    switch(idx){
        case 0:
            src = parts1
            break
        case 1:
            src = parts2
            break
        case 2:
            src = parts3
            break
        case 3:
            src = parts4
            break
        case 4:
            src = parts5
            break
        case 5:
            src = parts6
            break
        
        default:
            src = null
    }

    return (

        <>
            {
                (src !== undefined && src !== null ) ? 
                    <Image
                        src={src}
                        alt={alt}
                        className={class_name}
                    />
                    : null
            }
        </>
    )
}