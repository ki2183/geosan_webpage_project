import Navigation from "../ui/navigation/navigation_side";
import Location from "../ui/location";
import { ColDef } from "ag-grid-community";
import { Excel } from "../ui/vendor/excel";
import UnderCompanyInfo from "../ui/underCompanyInfo";
import fetch_vendor_data from "../api/fetchVendorData/router";
import { use, useEffect } from "react";
import { sql } from "@vercel/postgres";
import fetch_cnc_data from "../api/fetchCncData/route";

export default async function Home() {

    const excelDefs: ColDef[] = [
        { headerName: '구분', field: 'category', flex: 2 },
        { headerName: '주요업체명', field: 'companyname', flex: 3 }
    ];

    const excelData = await fetch_vendor_data()

    return (
        <main className="relative min-h-screen w-screen flex flex-col items-center">
            <Navigation/>
            <div className="max-w-[1080px] m-12 w-4/5 h-auto pt-12 flex flex-col gap-12">
                <Location id_name="vendor_location" title="거래처"/>
                <div className="flex flex-col gap-5">
                    <span className="text-4xl font-bold">
                        거래처
                    </span>
                    <span className="text-gray-500">
                        거산테크는 품질을 바탕으로한 거래를 합니다. 아래는 거래처 목록입니다.
                    </span>
                </div>
                <Excel
                    id_name="vendor_excel"
                    colDef={excelDefs}
                    colData={excelData}
                />
                     <div className="mx-auto w-full">
                <UnderCompanyInfo/>
            </div>
            </div>
        </main>
    );
}
