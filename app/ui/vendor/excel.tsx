"use client"
import { ColDef, RowHeightParams } from "ag-grid-community";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-community/styles/ag-theme-balham.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

type excel_type<T> = {
    id_name?:string
    colDef:ColDef[]
    colData:T[]
}

export function Excel<T>({
    id_name,colDef,colData
}:excel_type<T>){

    let height = colData.length * 41.5

    return(
        <section id={id_name}>
            <div style={{height:`${height +47}px`}} className={`ag-theme-quartz w-full]`}>
                    <AgGridReact
                        columnDefs={colDef}
                        rowData={colData}
                        defaultColDef={{
                        resizable: true,
                        sortable: true,
                        filter: true
                        }}
                        className="rounded-3xl shadow-lg"
                    />
                </div>
        </section>
    )
}