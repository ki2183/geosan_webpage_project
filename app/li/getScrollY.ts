import { Dispatch, SetStateAction } from "react";

export function getScrollY(setScrollY: Dispatch<SetStateAction<number>>){
    setScrollY(window.scrollY)
}