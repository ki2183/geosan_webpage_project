"use client"
import clsx from "clsx"
import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import style from "./navigationButton.module.scss"

interface NavigationButtonInterface {
    title:string
    link:string
}
 const NavigationButton:React.FC<NavigationButtonInterface> = ({link,title}) => {
    const pathname = usePathname();
    return(
        <Link href={`/${link}`}>
            <div className={
                clsx(`${style.button}`,
                pathname === "/"+link ? "font-bold after:h-[2px]" : ''
            )}>
                {title}
            </div>
        </Link>
    )
}

export default NavigationButton