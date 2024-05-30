import vercel from "../../public/vercel.svg"
export default function Nav(){
    return(
        <>  
        <nav className="fixed top-0 right-0 w-full flex items-center p-6 h-8 z-10 justify-between text-white bg-black">
            <span>GEOSAN TECH</span>
            <ol className="flex flex-row gap-3 z-10 text-sm">
                    {/* <li className="flex cursor-pointer">
                        소개 
                    </li> */}
                    
                    <li className="mr-1 cursor-pointer">
                        기술
                    </li>
                    <li className="mr-1 cursor-pointer">
                        거래처
                    </li>
                    
                    <li className="cursor-pointer">
                        찾아오시는 길
                    </li>
            </ol>

            <span className="material-symbols-outlined">
            wb_sunny
            </span>
        </nav>
        </>
    )
}


