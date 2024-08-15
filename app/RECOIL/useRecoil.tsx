"use client"

import { ReactNode } from "react"
import { RecoilRoot } from "recoil"

const UseRecoil:React.FC<{children:ReactNode}> = ({children}) => {
    return (
        <RecoilRoot>
            {children}
        </RecoilRoot>
    )
}

export default UseRecoil