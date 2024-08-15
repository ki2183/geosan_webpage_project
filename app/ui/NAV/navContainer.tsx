import { ReactNode } from "react"

const NavConainer:React.FC<{children:ReactNode}> = ({children}) =>{
    return (
        <nav className="w-screen h-[4rem] fixed z-10 flex flex-row items-center justify-between px-8">
            {children}
        </nav>
    )
}

export default NavConainer