"use client"

import { useEffect, useRef } from "react";
import MachineInfo from "../ui/technology/machineInfo";
import MachineList from "../ui/technology/machineList";
import MachinePhotos from "../ui/technology/machinePhotos";
import { useAppDispatch, useAppSelector } from "../REDUX/STORE/hook";
import { nav_height_handler } from "../REDUX/SLICE/navHeightSlice";


export default function Machine(){

    const dispatch = useAppDispatch()
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        update_container_scroll_height()
        window.addEventListener('resize',update_container_scroll_height)
        return ()=>
            window.removeEventListener('resize',update_container_scroll_height)
    },[])

    const update_container_scroll_height = () =>{
        if(containerRef.current){
            dispatch(nav_height_handler({idx:0,height:containerRef.current.scrollHeight}))
        }
    }

    return(
        <div ref={containerRef} className="flex flex-col gap-16">
            <MachineInfo/>
            <MachineList/>
            <MachinePhotos/>
        </div>
    )
}