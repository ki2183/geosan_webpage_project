
import { ColDef } from "ag-grid-community";
import Excel from "../ui/viewtools/excel";
import cnc1 from "../IMGs/cnc/cnc550.webp"
import cnc2 from "../IMGs/cnc/kf6500.webp"
import fetch_cnc_data from "../fetch/fetchCncData/fetchCncData";

async function CNCExcel(){
    
    const columnDefs: ColDef[] = [
        { headerName: "No.", valueGetter: 'node.rowIndex + 1',flex:0.6},
        { headerName: '관리번호', field: 'serial_num' , flex:1.5},
        { headerName: '설비명', field: 'name', flex:1},
        // { headerName: '구입년도', field: 'date',flex:1},
        { headerName: '구입처', field: 'brand',flex:1},
    ];
    const excelData = await fetch_cnc_data()

    const imgs = [
        {
            src:cnc1,
            alt:"cnc기계 이미지1",
            class_name:"w-full h-full"
        },
        {
            src:cnc2,
            alt:"cnc기계 이미지2",
            class_name:"w-4/5 h-4/5"
        },
    ]  
    return (
        <Excel
            reverse={false}
            imgs={imgs}
            id_name="cnc_excel"
            cncDef={columnDefs}
            cncData={excelData}
        />
    )
}

export default CNCExcel