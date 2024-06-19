import Navigation from "../ui/navigation/navigation_side";
import Location from "../ui/location";
import { ColDef } from "ag-grid-community";
import { Excel } from "../ui/vendor/excel";
import UnderCompanyInfo from "../ui/underCompanyInfo";

export default function Home() {

    const excelDefs: ColDef[] = [
        { headerName: '구분', field: 'category', flex: 2 },
        { headerName: '주요업체명', field: 'companyName', flex: 3 }
    ];


    const excel_Data = [
        {category: "반도체장비", companyName: "유진테크"},
        {category: "반도체장비", companyName: "주성엔지니어링"},
        {category: "반도체장비", companyName: "브륵스"},
        {category: "반도체장비", companyName: "피에스케이"},
        {category: "광학장비", companyName: "뮤텍코리아"},
        {category: "의료기기", companyName: "서린바이오"},
        {category: "의료기기", companyName: "코렌텍"},
        {category: "방산", companyName: "한화(보은공장)"},
        {category: "기타", companyName: "기타업체 다수"},   
      ];

    return (
        <main className="relative min-h-screen w-screen flex flex-col items-center">
            <Navigation/>
            <div className="max-w-[1080px] m-12 w-4/5 h-auto pt-12 flex flex-col gap-12">
                <Location/>
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
                    colData={excel_Data}
                />
                     <div className="mx-auto w-full">
                <UnderCompanyInfo/>
            </div>
            </div>
        </main>
    );
}
