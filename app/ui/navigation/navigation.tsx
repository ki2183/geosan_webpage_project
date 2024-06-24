"use client"
import gsap from "gsap"
import clsx from "clsx"
import { getScrollY } from "@/app/li/getScrollY"
import { useEffect, useRef, useState } from "react"
import { NavigationHome, NavigationLink } from "./navigationParts/navigation_parts"

export default function Navigation(){

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
        return ()=>gsap.killTweensOf(currentNavRef)
    },[scrollY])

    return(
        <section id="navigation" className={`z-20 fixed top-0 w-screen h-12`}>
            <div ref={navRef}className="nav-bg fixed w-screen h-12"/>
            <div className={clsx(
                    `w-screen h-full flex flex-row items-center justify-between`,
                    scrollY > 48 ? "text-[#1d3a44]" : "text-gray-100"
                )}>
                <NavigationHome/>
                <NavigationLink/>
            </div>
        </section>
    )
}

