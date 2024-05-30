"use client"

import Link from "next/link";
import vercel from "../../public/vercel.svg"
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Nav(){
    const pathname = usePathname()
    const pathArr = [
        {
            title:"기술",
            link:"/technology"
        },{
            title:"거래처",
            link:"/aa"
        },{
            title:"찾아오시는 길",
            link:"/bb"
        }
    ]
    return(
        <>  
        <nav className="fixed top-0 right-0 w-full flex items-center p-6 h-8 z-10 justify-between text-white bg-black">
            <span>GEOSAN TECH</span>
            <ol className="flex flex-row gap-3 z-10 text-sm items-center">
                    {
                        pathArr.map((item,idx)=>{
                            const {title,link} = item
                            const isActive = pathname === link;
                            const linkClasses = clsx(
                                'mr-1 cursor-pointer',
                                {
                                  'text-lg': isActive,
                                }
                              );
                            return (
                                
                                <Link
                                    key={title}
                                    href={link}
                                    className={``}
                                >
                                    <li className={linkClasses}>
                                        {title}
                                    </li>
                                </Link>
                                
                            )
                        })
                    }
            </ol>

            <span className="material-symbols-outlined">
            wb_sunny
            </span>
        </nav>
        </>
    )
}


