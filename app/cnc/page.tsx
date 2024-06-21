import { sql } from "@vercel/postgres";
import { notoSansKr } from "../font/font";
import Location from "../ui/location";
import Navigation from "../ui/navigation/navigation_side";
import UnderCompanyInfo from "../ui/underCompanyInfo";
// import { CNCExcel, CNCImg, CNCInfo } from "./cnctools";
import { MeasureExcel, MeasureInfo } from "./measure";
import { fetch_cnc_data_type } from "../api/fetchCncData/route";
import { CNCInfo } from "./cncInfo";
import CNCExcel from "./cncExcel";
import CNCImg from "./cncImg";

export default function Home(){
    const cncData: fetch_cnc_data_type[] = [];
    return (
        <main className={`${notoSansKr.className} main`}>
            <Navigation/>
            <div className="mt-12 pt-12 flex flex-col items-center max-w-[1080px] mx-auto w-4/5 gap-12">
                <Location id_name="cnc_location"/>
                <CNCInfo/>
                <CNCExcel/>
                <MeasureExcel/>
                <CNCImg/>
                <div className="w-full">
                    <UnderCompanyInfo/>
                </div>
                
            </div>
            
            
            
    
        </main>
    )
}