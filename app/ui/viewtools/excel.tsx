"use client"

import { ColDef, RowHeightParams } from "ag-grid-community";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-community/styles/ag-theme-balham.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import Image from "next/image";
import cnc1 from "../../IMGs/cnc/cnc550.webp"
import cnc2 from "../../IMGs/cnc/kf6500.webp"
import style from "./facilityexcel.module.scss"

export default function Excel(){

    const w = 400 
     
    const columnDefs: ColDef[] = [
        { headerName: "No.", valueGetter: 'node.rowIndex + 1',flex:0.7},
        { headerName: '관리번호', field: 'serial_num' , flex:1.5},
        { headerName: '설비명', field: 'name', flex:1},
        { headerName: '구입년도', field: 'date',flex:1},
        { headerName: '구입처', field: 'brand',flex:1},
    ];
      const excelData = [
        {serial_num: "F650PLUS(10,000RPM)", name: "머시닝센타",date:"2017.02",brand:"현대위아" },
        {serial_num: "F650PLUS(8,000RPM)", name: "머시닝센타",date:"2017.02",brand:"현대위아" },
        {serial_num: "F550M(15,000RPM)", name: "머시닝센타", date:"2017.06",brand:"현대위아" },
        {serial_num: "F550M(15,000RPM)", name: "탭핑센타",date:"2017.06",brand:"현대위아" },
        {serial_num: "F500", name: "머시닝센타",date:"2021.04",brand:"현대위아" },
        {serial_num: "VX650", name: "머시닝센타",date:"2021.05",brand:"현대위아" },
        {serial_num: "VX650", name: "머시닝센타",date:"2021.08",brand:"현대위아" },
        {serial_num: "VX3801D", name: "탭핑센타",date:"2022.03",brand:"현대위아" },
        {serial_num: "KF5600", name: "머시닝센타",date:"2022.12",brand:"현대위아" },
        {serial_num: "FX2-200T", name: "컴퓨레샤",date:"2017.01",brand:"COMP KOR" },
        {serial_num: "STD-410", name: "탁상드릴",date:"2017.02",brand:"삼천리" },
        {serial_num: "PUMA-400", name: "터닝머신(CNC)",date:"2017.02",brand:"두산인프라" },
        {serial_num: "PUMA-230B", name: "터닝머신(CNC)",date:"2017.02",brand:"두산인프라" },
        {serial_num: "PUMA-240B", name: "터닝머신(CNC)",date:"2017.02",brand:"두산인프라" },
        {serial_num: "PUMA-280", name: "터닝머신(CNC)",date:"2017.02",brand:"두산인프라" },
        {serial_num: "PUMA-GT2600L", name: "터닝머신(CNC)",date:"2019.01",brand:"두산인프라" },
      ];

    return(
        <section id="facility-excel" className="w-full h-auto">
            <div className="w-full h-auto grid grid-cols-custom gap-2 1260:grid-cols-1">
                <div className="flex flex-col items-center gap-4 1260:hidden">
                    <div className="shadow-lg w-full h-[253.3125px] rounded-lg bg-white items-center justify-center flex">
                        <Image
                            alt="ajskld"
                            src={cnc1}
                            className="w-full h-full"
                        />
                    </div>
                    <div className="shadow-lg w-full h-[253.3125px] rounded-lg bg-white items-center justify-center flex">
                        <Image
                            alt="ajskld"
                            src={cnc2}
                            className="w-3/4 h-3/4"
                        />
                    </div>

                </div>
                <div className="ag-theme-quartz w-full h-full 1260:h-[500px]">
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={excelData}
                    defaultColDef={{
                    resizable: true,
                    sortable: true,
                    filter: true
                    }}
                />
                </div>
            </div>
        </section>
    )
}