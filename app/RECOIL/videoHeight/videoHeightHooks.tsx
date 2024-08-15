"use client"

import { useRecoilState } from 'recoil';
import { videoHeightState } from './videoHeight';

//use videoHeight custom hook
const useVideoHeight = () => {
    const [videoHeight, setVideoHeight] = useRecoilState(videoHeightState)

    const updateVideoHeight = (height:number) =>{
        if(videoHeight !== height)
            setVideoHeight(height)
    }

    return {
       updateVideoHeight
    }
};

export default useVideoHeight;