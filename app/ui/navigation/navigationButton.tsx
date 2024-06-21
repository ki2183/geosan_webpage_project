"use client"

import React from "react"
import style from "./navigationButton.module.scss"
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"

interface NavigationButtonInterface {
    scrollY?:number
    title:string
    link:string
}
 const NavigationButton:React.FC<NavigationButtonInterface> = ({link,title,scrollY}) => {
    const pathname = usePathname();
    return(
        <Link href={`/${link}`}>
            {/* <div className={`
                ${style.button} 
                ${!scrollY ? "after:bg-[#1D3A44]" :
                    scrollY > 48 ? "after:bg-[#1D3A44]":""
                }
            `}> */}
            <div className={clsx(
                `${style.button}`,
                {
                    "font-bold after:h-[2px]": pathname === "/"+link
                }
            )}
            >

                {title}
            </div>
        </Link>
    )
}

export default NavigationButton