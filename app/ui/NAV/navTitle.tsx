import Image from "next/image"
import Link from "next/link"

const NavTitle = () => {
    return (
        <Link href="/">
            <div className="flex flex-row items-center gap-1 select-none cursor-pointer">
                <div className="h-[1.5rem] w-[1.5rem] flex items-center">
                    <Image alt="geosan-logo" width={100} height={100} src="/geosan_logo.webp"/>
                </div>
                <span className="text-gray-50 font-bold">거산테크</span> 
            </div>
        </Link>
    )
}

export default NavTitle