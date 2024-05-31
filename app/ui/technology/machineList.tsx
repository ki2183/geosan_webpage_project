"use client"

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ColDef, ColumnApi, GridApi, RowHeightParams } from 'ag-grid-community';
import { useEffect, useRef, useState } from 'react';

export default function MachineList(){
    const [gridApi, setGridApi] = useState<GridApi | null>(null);
    const [gridColumnApi, setGridColumnApi] = useState<ColumnApi | null>(null);
    const containerRef = useRef<HTMLDivElement>(null)
    const [w, setW] = useState<number>(0)

    const excelScale = {
      header:48,
      el:30
    }

    useEffect(() => {
      getW();
      window.addEventListener('resize', getW);
      return () => {
        window.removeEventListener('resize', getW);
      };
    }, []);

  const getW = () =>{
      const w = containerRef.current?.clientWidth
      if(w) setW(w)
  }

  const columnDefs: ColDef[] = [
    { headerName: "No.", valueGetter: 'node.rowIndex + 1',width:w*0.1},
    { headerName: '관리번호', field: 'serial_num' ,width:w*0.3},
    { headerName: '설비명', field: 'name', width:w*0.2},
    { headerName: '구입년도', field: 'date',width:w*0.2},
    { headerName: '구입처', field: 'brand' ,width:w*0.15},
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

  let excel_total_height = excelScale.header+excelScale.el*(excelData.length)

  const onGridReady = (params: any) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };
  
  const gridOptions = {
    getRowHeight: (params: RowHeightParams) => {
      return params.data.age > 40 ? 50 : 30;
    }
  };

  const container_style = {
    height:`${excel_total_height} + 4rem`,
    width:"80%",
    maxWidth: "1315px"
  }

  
    return(
        <div id="machine-list" className='mb-10'>
            <div ref={containerRef} style={container_style} className="ml-auto mr-auto flex flex-col items-center justify-center">
            <span className='w-full text-black font-bold pb-2'>장비/설비</span>
                <div className="ag-theme-alpine" style={{ height: `${excel_total_height+5}px`, width: "100%" }}>
                    <AgGridReact gridOptions={gridOptions} columnDefs={columnDefs} rowData={excelData}/>
                </div>
            </div>
        </div>
    )
}