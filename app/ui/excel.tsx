'use client'

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ColDef, ColumnApi, GridApi, RowHeightParams } from 'ag-grid-community';

export default function Excel(){

    const w = 500

    const columnDefs: ColDef[] = [
        { headerName: '구분', field: 'serial_num' ,flex:2},
        { headerName: '설비명', field: 'name', flex:3},
        { headerName: '구입년도', field: 'date',flex:2},
        { headerName: '구입처', field: 'brand' ,flex:1},
    ];
    
      const excelData = [
        {serial_num: "GS-M-01", name: "머시닝센타",date:"2017.02",brand:"현대위아" },
        {serial_num: "GS-M-02", name: "머시닝센타",date:"2017.02",brand:"현대위아" },
        {serial_num: "GS-M-03", name: "머시닝센타", date:"2017.06",brand:"현대위아" },
        {serial_num: "GS-M-04", name: "탭핑센타",date:"2017.06",brand:"현대위아" },
        {serial_num: "GS-M-05", name: "머시닝센타",date:"2021.04",brand:"현대위아" },
        {serial_num: "GS-M-06", name: "머시닝센타",date:"2021.05",brand:"현대위아" },
        {serial_num: "GS-M-07", name: "머시닝센타",date:"2021.08",brand:"현대위아" },
        {serial_num: "GS-M-08", name: "탭핑센타",date:"2022.03",brand:"현대위아" },
        {serial_num: "GS-M-09", name: "머시닝센타",date:"2022.12",brand:"현대위아" },
        {serial_num: "GS-M-10", name: "컴퓨레샤",date:"2017.01",brand:"COMP KOR" },
        {serial_num: "GS-M-11", name: "탁상드릴",date:"2017.02",brand:"삼천리" },
        {serial_num: "GS-M-12", name: "터닝머신(CNC)",date:"2017.02",brand:"두산인프라" },
        {serial_num: "GS-M-13", name: "터닝머신(CNC)",date:"2017.02",brand:"두산인프라" },
        {serial_num: "GS-M-14", name: "터닝머신(CNC)",date:"2017.02",brand:"두산인프라" },
        {serial_num: "GS-M-15", name: "터닝머신(CNC)",date:"2017.02",brand:"두산인프라" },
        {serial_num: "GS-M-16", name: "터닝머신(CNC)",date:"2019.01",brand:"두산인프라" },
      ];

      
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

      const gridOptions = {
        getRowHeight: (params: RowHeightParams) => {
          return params.data.age > 40 ? 50 : 30;
        }
      };

        return (
            <div id="excel-list" className='w-full'>
                <div className="ml-auto mr-auto flex flex-col items-center justify-center">
                    <div className="ag-theme-alpine w-full" style={{ height: `500px`}}>
                        <AgGridReact gridOptions={gridOptions} columnDefs={excelDefs} rowData={excel_Data}/>
                    </div>
                </div>
            </div>
        )
}