"use client"

import Image from "next/image"
import logo from "../../IMGs/logo.png"
import { useEffect, useRef, useState } from "react"
import { getScrollY } from "@/app/li/getScrollY"
import gsap from "gsap"
export const nav_height = "2.5rem"

export default function Navigation(){
    const style = {
        color:"white"
    }

    const [scollY,setScrollY] = useState<number>(0)
    const navRef = useRef<HTMLDivElement>(null)
    

    useEffect(()=>{
        const handleScroll = () => getScrollY(setScrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[])

    useEffect(()=>{
        const currentNavRef = navRef.current;
        gsap.to(currentNavRef,{
            duration:0.2,
            top:scollY > 48 ? 0 : -48
        })

        return ()=>
            gsap.killTweensOf(currentNavRef)
    },[scollY])

    return(
        <section style={style} id="navigation" className={`z-20 fixed top-0 w-screen h-12`}>
            <div ref={navRef}className="nav-bg fixed w-screen h-12"/>
            <div style={{color:scollY > 48 ? "black" : "white" }} className="w-screen h-full flex flex-row items-center justify-between">
                <div className="flex items-center justify-center ml-4 mr-4 gap-2">
                    <Image className="w-8 h-8 " alt="로고" src={logo}/>
                    <span className="text-sm font-bold">거산테크</span>
                </div>  
                <div className="ml-4 mr-7">
                    기술
                </div>
            </div>
        </section>
    )
}