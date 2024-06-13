import { notoSansKr } from "../font/font";
import Location from "../ui/location";
import Navigation from "../ui/navigation/navigation_side";
import UnderCompanyInfo from "../ui/underCompanyInfo";
import Info from "../ui/viewtools/info";
import { CNCExcel, CNCImg, CNCInfo } from "./cnctools";
import { MeasureExcel, MeasureInfo } from "./measure";

export default function Home(){
    return (
        <main className={`${notoSansKr.className} main`}>
            <Navigation/>
            <div className="mt-12 pt-12 flex flex-col items-center max-w-[1080px] mx-auto w-4/5 gap-12">
                <Location id_name="cnc_location"/>
                <CNCInfo/>
                <CNCExcel/>
                {/* <MeasureInfo/> */}
                <MeasureExcel/>
                <CNCImg/>
            </div>
            
            
            <UnderCompanyInfo/>
    
        </main>
    )
}