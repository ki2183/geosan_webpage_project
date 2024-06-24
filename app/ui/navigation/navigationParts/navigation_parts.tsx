import Image from "next/image"
import Link from "next/link"
import logo from "../../../IMGs/logo.png"
import NavigationButton from "./navigationButton"

export interface navi_link {
    link:string
    title:string
}
export interface navi_link_list {
    navi_list:navi_link[]
}

export function NavigationHome(){
    return(
        <Link className="cursor-pointer" href="/">
            <div className="flex items-center justify-center ml-4 mr-4 gap-2">
                <Image className="w-8 h-8 " alt="로고" src={logo}/>
                <span className="text-sm font-bold">거산테크</span>
            </div>
        </Link>
    )
}
export function NavigationLink(){

    const navi_list:navi_link[] = [
        {
            link:"introduce",
            title:"소개",
        },{
            link:"cnc",
            title:"설비",
        },{
            link:"vendor",
            title:"거래처",
        },
    ]
    
    return (
        <div className="ml-4 mr-10 flex gap-4">
            {
                (navi_list && navi_list.length > 0 ) &&
                    navi_list.map(({link,title},idx)=>(
                        <NavigationButton 
                            key={idx}
                            link={link}
                            title={title}
                        />
                ))
            }
        </div>
    )
}