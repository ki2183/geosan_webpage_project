import Image from "next/image"
import NavConainer from "./navContainer"
import NavTitle from "./navTitle"
import NavMenu from "./navMenu"

const Nav = ()=> {
    return (
        <NavConainer>
            <NavTitle/>
            <NavMenu/>
        </NavConainer>
    )
}

export default Nav
