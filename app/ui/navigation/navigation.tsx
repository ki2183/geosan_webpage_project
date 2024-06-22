"use client"

import Image from "next/image"
import logo from "../../IMGs/logo.png"
import { useEffect, useRef, useState } from "react"
import { getScrollY } from "@/app/li/getScrollY"
import gsap from "gsap"
import NavigationButton from "./navigationButton"
import Link from "next/link"
export const nav_height = "2.5rem"

export default function Navigation(){
    const style = {
        color:"white"
    }

    const [scrollY,setScrollY] = useState<number>(0)
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
            top:scrollY > 48 ? 0 : -48
        })

        return ()=>
            gsap.killTweensOf(currentNavRef)
    },[scrollY])

    return(
        <section style={style} id="navigation" className={`z-20 fixed top-0 w-screen h-12`}>
            <div ref={navRef}className="nav-bg fixed w-screen h-12"/>
            <div style={{color:scrollY > 48 ? "black" : "white" }} className="w-screen h-full flex flex-row items-center justify-between">
                <Link className="cursor-pointer" href="/">
                    <div className="flex items-center justify-center ml-4 mr-4 gap-2">
                        <Image className="w-8 h-8 " alt="로고" src={logo}/>
                        <span className="text-sm font-bold">거산테크</span>
                    </div>
                </Link>  
                <div className="ml-4 mr-10 flex gap-4">
                    <NavigationButton 
                        link="introduce"
                        title="소개"
                        scrollY={scrollY}
                    />
                     <NavigationButton 
                        link="cnc"
                        title="설비"
                        scrollY={scrollY}
                    />
                    <NavigationButton 
                        link="vendor"
                        title="거래처"
                        scrollY={scrollY}
                    />
                </div>
            </div>
        </section>
    )
}

