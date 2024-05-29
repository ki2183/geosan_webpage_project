"use client"

import MachineIMG from "@/app/IMGs/MachineImg";
import { useEffect, useRef, useState } from "react";
import { machinePhotosFunc } from "@/app/li/machinePhotosFuc";

export default function MachinePhotos(){
    
    const gap = 16
    const minW = 760
    const contentsNum = 3
    const rate = 0.6
    const [w,setW] = useState<number>(0)

    const containerRef = useRef<HTMLDivElement>(null)
    const {compute_grid_auto_rows} = machinePhotosFunc()
    

    useEffect(() => {
        getW();
        window.addEventListener('resize', getW);
        return () => {
          window.removeEventListener('resize', getW);
        };
      }, []);

    const getW = () =>{
        const w = containerRef.current?.clientWidth
        if(w) setW(w)
    }

    const conatiner_style = {
        maxWidth:"1315px",
        width:`80%`,
        gridAutoRows: compute_grid_auto_rows({w,gap,minW,contentsNum,rate}),
        gridTemplateColumns: `repeat(${minW > w ? 2 : 3}, minmax(0, 1fr))`,
        gap:gap
    }
    return (
        <section id="machine-photos">
            <div ref={containerRef} className="grid ml-auto mr-auto container-machine-photos" style={conatiner_style}>
                {
                     Array.from({ length: 4 }).map((_, idx) => (
                        <div className="bg-black overflow-hidden relative">
                            <MachineIMG
                                key={idx}
                                idx={idx}
                            />
                        </div>
                     ))
                }   
                {
                     Array.from({ length: 4 }).map((_, idx) => (
                        <div className="bg-black overflow-hidden relative">
                            <MachineIMG
                                key={idx}
                                idx={idx}
                            />
                        </div>
                     ))
                } 
                {
                     Array.from({ length: 4 }).map((_, idx) => (
                        <div className="bg-black overflow-hidden relative">
                            <MachineIMG
                                key={idx}
                                idx={idx}
                            />
                        </div>
                     ))
                }          
            </div>
        </section>
    )
}