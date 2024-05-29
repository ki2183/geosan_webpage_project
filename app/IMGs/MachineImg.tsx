'use client'
import Image from "next/image"
import machine0 from "../IMGs/machine/CNC현장1.jpg"
import machine1 from "../IMGs/machine/CNC현장2.jpg"
import machine2 from "../IMGs/machine/CNC현장3.jpg"
import machine3 from "../IMGs/machine/CNC현장4.jpg"

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