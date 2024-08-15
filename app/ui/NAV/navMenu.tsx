import UseRecoil from "@/app/RECOIL/useRecoil"
import { useEffect, useRef, useState } from "react"

const NavMenu = () => {
    return (
        <UseRecoil>
            <NavMenuPresentation/>
        </UseRecoil>
    )
}

const NavMenuPresentation = () =>{

    const ref = useRef<HTMLButtonElement>(null)
    const [tf,setTF] = useState<boolean>(false)
    const olRef = useRef<HTMLOListElement>(null)

    useEffect(()=>{console.log(tf)},[tf])

    const OFF = () => setTF(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.closest('button') === null) {
                OFF();
            }
        };
        window.addEventListener('click', handleClickOutside)

        return () => {
            window.removeEventListener('click', handleClickOutside)
        };
    }, [])

    let animation = 
    useEffect(()=>{
        if(tf){

        }
    },[tf])

    return (
        <button onFocus={()=>setTF(true)} onBlur={()=>setTF(true)} onClick={()=>setTF(true)} className="relative bg-[#3479d4] font-bold text-gray-50 px-4 py-3 rounded-full transition-width duration-1000">
            <span>{tf ? "<-" : "메뉴"}</span>
            <ol ref={olRef} className={`${tf ? 'block' : 'hidden'} flex flex-col gap-2 top-[100%] left-[0%] translate-y-[10%] translate-x-[-5rem] rounded-lg absolute w-auto h-auto `}>
                <li className="w-32 px-4 h-9 rounded-full bg-[#ffffffc7] flex flex-row items-center text-gray-800">위치</li>
                <li className="w-32 px-4 h-9 rounded-full bg-[#ffffffc7] flex flex-row items-center text-gray-800">거래처</li>
                <li className="w-32 px-4 h-9 rounded-full bg-[#ffffffc7] flex flex-row items-center text-gray-800">기계현황</li>
            </ol>
        </button>
    )
}

export default NavMenu