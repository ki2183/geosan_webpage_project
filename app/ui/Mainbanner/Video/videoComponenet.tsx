import { forwardRef } from "react"
import { IVideo } from "./video"

const VideoComponent = forwardRef<HTMLVideoElement,IVideo>((props,ref)=>{
    
    const {src} = props
    
    return (
        <video ref={ref} {...props} className="object-cover filter brightness-50">
            <source src={src} type="video/mp4" />
        </video>
    )
})

export default VideoComponent