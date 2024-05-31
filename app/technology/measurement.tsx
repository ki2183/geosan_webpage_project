"use client"

import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../REDUX/STORE/hook";
import MachineInfo from "../ui/technology/machineInfo";
import MachineList from "../ui/technology/machineList";
import MachinePhotos from "../ui/technology/machinePhotos";
import { nav_height_handler } from "../REDUX/SLICE/navHeightSlice";

export default function Measurement(){
    const navHeight = useAppSelector(state => state.navHeight)
    const dispatch = useAppDispatch()
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        update_container_scroll_height()
        setTimeout(()=>update_container_scroll_height(),1000)
        window.addEventListener('resize',update_container_scroll_height)
        return ()=>
            window.removeEventListener('resize',update_container_scroll_height)
    },[])

    const update_container_scroll_height = () =>{
        if(containerRef.current){
            dispatch(nav_height_handler({idx:1,height:containerRef.current.offsetHeight}))
        }
    }

    return(
        <div ref={containerRef} className="flex flex-col gap-16 mt-52">
            <MachineInfo/>
            <MachineList/>
            <MachinePhotos/>
        </div>
    )
}