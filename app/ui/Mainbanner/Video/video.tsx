"use client"
import useVideoHeight from "@/app/RECOIL/videoHeight/videoHeightHooks"
import { forwardRef, useEffect, useRef } from "react"
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import VideoComponent from "./videoComponenet"
import UseRecoil from "@/app/RECOIL/useRecoil"

export interface IVideo extends React.VideoHTMLAttributes<HTMLVideoElement>{
    src:string
}

const Video:React.FC<IVideo> = (props)=> {
    return (
        <UseRecoil>
            <VideoPresentation {...props} />
        </UseRecoil>
    )
}

const VideoPresentation:React.FC<IVideo> = (props)=> {
    //this ref is for height of video
    const videoRef = useRef<HTMLVideoElement>(null)
    const { updateVideoHeight } = useVideoHeight()

    //resize handler
    const handleResize = () => {
        if(videoRef.current){
            const height = videoRef.current?.clientHeight
            updateVideoHeight(height)
        }        
    }
    
    //for Resize
    useEffect(()=>{
        const ref = videoRef.current
        if(ref)
            window.addEventListener('resize',handleResize)

        return ()=>{
            if(ref)
                window.removeEventListener('resize',handleResize)
        }
    },[])

    return (
        <VideoComponent ref={videoRef} {...props}/>
    )
}
export default Video