import Image from "next/image"
import cnc1 from "./cnc1.webp";
import cnc2 from "./cnc2.webp";
import cnc3 from "./cnc3.webp";
import cnc4 from "./cnc4.webp";
import cnc5 from "./cnc5.webp";
import cnc6 from "./cnc6.webp";
import cnc7 from "./cnc7.webp";
import cnc8 from "./cnc8.webp";
import cnc9 from "./cnc9.webp";
import cnc10 from "./cnc10.webp";
import cnc11 from "./cnc11.webp";
import cnc12 from "./cnc12.webp";

type ImgMachine_type = {
    src:string,
    classname?:string
}

export default function ImgMachine({src,classname}:ImgMachine_type){

    let link

    switch (src) {
        case "cnc1":
            link = cnc1;
            break;
        case "cnc2":
            link = cnc2;
            break;
        case "cnc3":
            link = cnc3;
            break;
        case "cnc4":
            link = cnc4;
            break;
        case "cnc5":
            link = cnc5;
            break;
        case "cnc6":
            link = cnc6;
            break;
        case "cnc7":
            link = cnc7;
            break;
        case "cnc8":
            link = cnc8;
            break;
        case "cnc9":
            link = cnc9;
            break;
        case "cnc10":
            link = cnc10;
            break;
        case "cnc11":
            link = cnc11;
            break;
        case "cnc12":
            link = cnc12;
            break;
        default:
            link = undefined;
    }

    return(
        <>
            {
                link !==null && link !== undefined ? 
                    <Image 
                        src={link}
                        alt={src}
                        className={classname}
                    />      
                    : null
            }
            
        </>
    )
}