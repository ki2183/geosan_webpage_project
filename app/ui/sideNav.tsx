"use client"

import gsap from "gsap";
import { useEffect, useRef } from "react"
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export default function SideNav(){

    const style_conatiner = {
        background: "linear-gradient(312deg, rgb(218 218 218 / 70%), rgba(238, 238, 238, 0.39))",
        borderRight: "1px solid #8080803b",
        borderBottom: "1px solid #8080803b",
        boxShadow: "0px 10px 29px #b6b6b645",
    }   

    const liRef = useRef<HTMLLIElement>(null)
    const liRefArr = useRef<Array<HTMLLIElement | null>>([]);
    const box = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        if(liRefArr.current[0]){
            gsap.to(box.current,{
                duration:1,
                top:44+40,
                ease:"power3.out"
            })
        }   
    },[])

    useEffect(()=>{
        const tl_info = gsap.timeline()
        ScrollTrigger.create({
            id:"scroll-info",
            trigger:containerRef.current,
            animation:tl_info,
            scrub:1,
            start:"1% 10%",
            end: `90% 10%` ,
            markers:true,
            pin:true,
        })//INFO PIN
    },[])

    return (
        <div ref={containerRef} id="side-nav" className="relative">
            <div  style={style_conatiner} id="side-nav-container" className="rounded-lg w-4/5 h-auto ml-auto mr-auto overflow-hidden" >
                <div ref={box} style={{width:`80%`,height:`${liRef.current?.clientHeight}px`}} className="absolute w-10 h-10 bg-white mix-blend-difference"/>
                <h1 className="p-2 font-bold text-lg">
                    기술
                </h1>
                <ol>
                    <li ref={el => { liRefArr.current[0] = el }} className="p-2 pl-4">
                        설비
                    </li>
                    <li ref={el => { liRefArr.current[1] = el }} className="p-2 pl-4">
                        측정
                    </li>
                </ol>
            </div>
        </div>
    )
}