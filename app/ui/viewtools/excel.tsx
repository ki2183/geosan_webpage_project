"use client"

import { ColDef, RowHeightParams } from "ag-grid-community";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-community/styles/ag-theme-balham.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import Image, { StaticImageData } from "next/image";

type excel_type = {
    id_name?:string
    cncDef:ColDef[]
    cncData:{
        serial_num: string;
        name: string;
        date: string;
        brand: string;
    }[]
    imgs:{
        src:StaticImageData
        class_name:string
        alt:string
    }[]
    reverse:boolean
}

export default function Excel({
    cncDef,cncData,imgs,id_name,reverse
}:excel_type){

    return(
        <section id={id_name} className="w-full h-auto">
            <div style={{ direction:`${reverse ?"rtl":"ltr"}`}} className={`grid-cols-left w-full h-auto grid gap-4 1260:grid-cols-1`}>
                <div className="flex flex-col items-center gap-4 1260:hidden">
                    {
                        (imgs && imgs.length > 0) && imgs.map(({src,alt,class_name},idx)=>(
                            <div key={idx} className="shadow-lg w-full h-[253.3125px] rounded-lg bg-white items-center justify-center flex">
                                <Image
                                    alt={alt}
                                    src={src}
                                    className={class_name}
                                />
                            </div>
                        ))
                    }

                </div>
                <div className="ag-theme-quartz w-full h-full 1260:h-[500px]">
                    <AgGridReact
                        columnDefs={cncDef}
                        rowData={cncData}
                        defaultColDef={{
                        resizable: true,
                        sortable: true,
                        filter: true
                        }}
                        className="rounded-3xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    )
}