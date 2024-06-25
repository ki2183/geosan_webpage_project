import { ColDef } from "ag-grid-community";
import Excel from "../ui/viewtools/excel";
import Info from "../ui/viewtools/info";
import measure1 from "../IMGs/measure/measure1.webp"
import measure2 from "../IMGs/measure/measure2.webp"
import fetch_measure_data from "../fetch/fetchMeasureData/fetchMeasureData"; 


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
        // { headerName: '구입년도', field: 'date',flex:1},
        { headerName: '구입처', field: 'brand',flex:1},
    ];
    const excelData = await fetch_measure_data()

    const imgs = [
        {
            src:measure1,
            alt:"측정장비-이미지1",
            class_name:"w-full h-full"
        },
        {
            src:measure2,
            alt:"측정장비 이미지2",
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