import { ColDef } from "ag-grid-community";
import Excel from "../ui/viewtools/excel";
import Info from "../ui/viewtools/info";
import cnc1 from "../IMGs/cnc/cnc550.webp"
import cnc2 from "../IMGs/cnc/kf6500.webp"
import measure1 from "../IMGs/measure/measure1.webp"
import measure2 from "../IMGs/measure/measure2.webp"
import fetch_measure_data from "../api/fetchMeasureData/route";


export function MeasureInfo(){
    return (
        <Info
            title="설비"
            id_name="cnc_information"
            information="거산테크는 0.1~1μm의 정밀한 치수가공이 가능하며, 연삭, 연마 표면처리의 가공도 최고수준을 자랑합니다."
        />
    )
}

export async function MeasureExcel(){
    const columnDefs: ColDef[] = [
        { headerName: "No.", valueGetter: 'node.rowIndex + 1',flex:0.6},
        { headerName: '품 명', field: 'name' , flex:1.5},
        { headerName: '규격', field: 'standard', flex:1},
        { headerName: '구입년도', field: 'date',flex:1},
        { headerName: '구입처', field: 'brand',flex:1},
    ];
    const excelData = await fetch_measure_data()
    // const excelData = [
    //     { name: "Gauge Block", standard: "0.5T ~ 100T", brand: "BLUETEL", date: "17.02.01" },
    //     { name: "내경 측정기", standard: "135￠(0.01)", brand: "TECLOCK", date: "17.02.01" },
    //     { name: "Digital Vernier Calipers", standard: "600mm/0.01mm", brand: "MITUTOYO", date: "17.02.01" },
    //     { name: "Digital Vernier Calipers", standard: "300mm/0.01mm", brand: "MITUTOYO", date: "17.02.01" },
    //     { name: "Digital Vernier Calipers", standard: "60mm/0.01mm", brand: "MITUTOYO", date: "17.02.01" },
    //     { name: "Micro Meter(아날로그)", standard: "0~25mm/0.01mm", brand: "MITUTOYO", date: "17.02.01" },
    //     { name: "Micro Meter(아날로그)", standard: "25~50mm/0.01mm", brand: "MITUTOYO", date: "17.02.01" },
    //     { name: "Micro Meter(아날로그)", standard: "100~125mm/0.01mm", brand: "MITUTOYO", date: "17.02.01" },
    //     { name: "Micro Meter(아날로그)", standard: "75~100mm/0.01mm", brand: "MITUTOYO", date: "17.02.01" },
    //     { name: "Micro Meter(아날로그)", standard: "100~125mm/0.01mm", brand: "MITUTOYO", date: "17.02.01" },
    //     { name: "Micro Meter(아날로그)", standard: "125~150mm/0.01mm", brand: "BLUEBIRD", date: "17.02.01" },
    //     { name: "Micro Meter(아날로그)", standard: "75~100mm/0.01mm", brand: "MITUTOYO", date: "17.02.01" },
    //     { name: "Cylinder Gauge", standard: "18~35mm/0.01mm", brand: "MITUTOYO", date: "17.02.01" },
    //     { name: "Cylinder Gauge", standard: "35~60mm/0.01mm", brand: "MITUTOYO", date: "17.02.01" },
    //     { name: "Cylinder Gauge", standard: "50~150mm/0.01mm", brand: "MITUTOYO", date: "17.02.01" }
    // ];

    const imgs = [
        {
            src:measure1,
            alt:"cnc기계 이미지1",
            class_name:"w-full h-full"
        },
        {
            src:measure2,
            alt:"cnc기계 이미지2",
            class_name:"w-4/5 h-4/5"
        },
    ]

    
    
    return (
        <Excel
            reverse={true}
            imgs={imgs}
            id_name="cnc_excel"
            cncDef={columnDefs}
            cncData={excelData}
        />
    )
}