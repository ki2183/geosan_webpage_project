"use client"

import gsap from "gsap";
import { useEffect, useRef, useState } from "react"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useAppSelector } from "../REDUX/STORE/hook";
gsap.registerPlugin(ScrollTrigger)

export default function SideNav(){

    const contents_num = 2
    const navHeight = useAppSelector(state => state.navHeight)

    const style_conatiner = {
        background: "linear-gradient(312deg, rgb(218 218 218 / 70%), rgba(238, 238, 238, 0.39))",
        borderRight: "1px solid #8080803b",
        borderBottom: "1px solid #8080803b",
        boxShadow: "0px 10px 29px #b6b6b645",
        transform: "translate(-50%,0%)",
        left: "50%"
    }   

    const liRef = useRef<HTMLLIElement>(null)
    const liRefArr = useRef<Array<HTMLLIElement | null>>([]);
    const box = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [scrollVar,setScrollVar] = useState<number>(0)
    const [totalHeight,setTotalHeight] = useState<number>(0)

    useEffect(()=>{
        get_scrollHeight()

        window.addEventListener('scroll',get_scrollHeight)
        return ()=>{
            window.removeEventListener('scroll',get_scrollHeight)
        }
    },[])

    const get_scrollHeight = () => {
        setScrollVar(window.scrollY)
    }

    useEffect(()=>{
        gsap.to(containerRef.current,{
            top:scrollVar,
            duration:0.5,
        })
    },[scrollVar])

    useEffect(()=>{
        if(liRefArr.current[0]){
            gsap.to(box.current,{
                duration:1,
                top:44+40-40,
                ease:"power3.out"
            })
        }   
    },[])

    useEffect(()=>{
        let sum = 0
        navHeight.forEach((item,idx)=>{
            const sumHeight = sum+item
            if(sum < scrollVar && scrollVar < sumHeight){
                console.log(idx)
                console.log(sumHeight,scrollVar)
            }

            sum = sumHeight

        })
        // if(navHeight.length > 0){
            
        //     for (const item of navHeight) {
        //         const sumHeight = sum + item;
        //         if (sum <= scrollVar && scrollVar < sumHeight) {
        //             console.log(navHeight.indexOf(item), sumHeight);
        //             return;
        //         }
        //         sum = sumHeight;
        //     }
        // }
    },[scrollVar,navHeight])

    const tl = gsap.timeline()
    tl.to(containerRef.current,{
        top:scrollVar,
        duration:0.5,
        
    })

    return (
        <div id="side-nav" className="relative">
            <div ref={containerRef}  style={style_conatiner} id="side-nav-container" className="absolute rounded-lg w-4/5 h-auto ml-auto mr-auto overflow-hidden" >
                <div>
                    <div ref={box} style={{width:`100%`,height:`${liRef.current?.clientHeight}px`}} className="absolute w-10 h-10 bg-white mix-blend-difference"/>
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
        </div>
    )
}