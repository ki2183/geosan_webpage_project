import { notoSansKr } from "../font/font";
import Location from "../ui/location";
import Navigation from "../ui/navigation/navigation_side";
import Info from "../ui/viewtools/info";
import { CNCExcel, CNCInfo } from "./cnctools";

export default function Home(){
    return (
        <main className={`${notoSansKr.className} main`}>
            <Navigation/>
            <div className="mt-12 pt-12 flex flex-col items-center max-w-[1080px] mx-auto w-4/5 gap-12">
                <Location/>
                <CNCInfo/>
                <CNCExcel/>
            </div>
            
            
        
    
        </main>
    )
}