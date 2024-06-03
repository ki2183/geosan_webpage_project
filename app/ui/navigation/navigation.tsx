import Image from "next/image"
import logo from "../../IMGs/logo.png"
export const nav_height = "2.5rem"

export default function Navigation(){
    const style = {
        color:"white"
    }
    return(
        <section style={style} id="navigation" className=" z-10 noto-sans-kr fixed top-0 w-screen h-12">
            <div className="w-screen h-full flex flex-row items-center justify-between">
                <div className="flex items-center justify-center ml-4 mr-4 gap-2">
                    <Image className="w-8 h-8 " alt="로고" src={logo}/>
                    <span className="text-sm font-bold">거산테크</span>
                </div>
                
                <div className="ml-4 mr-4">
                    기술
                </div>
            </div>
        </section>
    )
}