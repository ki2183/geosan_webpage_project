'use client'
import Image from "next/image"
import machine0 from "../IMGs/machine/cnc1.webp"
import machine1 from "../IMGs/machine/cnc2.webp"
import machine2 from "../IMGs/machine/cnc3.webp"
import machine3 from "../IMGs/machine/cnc4.webp"

type machine_type={
    idx:number
}
export default function MachineIMG({idx}:machine_type){

    let src

    if(idx === 0){
        src = machine0
    }else if(idx === 1){
        src = machine1
    }else if(idx === 2){
        src = machine2
    }else if(idx === 3){
        src = machine3
    }

    const style = {
        width:"100%",
        height:"100%",
    }

    return (
        <>
            {
                ( src !== undefined && src !== null) ? 
                <Image 
                    src={src}
                    alt="machine-img"
                    style={style}
                    className="absolute"
                />
                :null
            }
        </>
    )
}