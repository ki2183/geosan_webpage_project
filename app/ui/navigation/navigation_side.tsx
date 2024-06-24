
import { NavigationHome, NavigationLink } from "./navigationParts/navigation_parts"

export default function Navigation(){
    return(
        <section id="navigation" className={`bg-[#ececec] z-30 fixed top-0 w-screen h-12`}>
            <div className="border-solid border-[#80808084] border-b-[1px] text-black w-screen h-full flex flex-row items-center justify-between">
                <NavigationHome/>  
                <NavigationLink/>
            </div>
        </section>
    )
}

