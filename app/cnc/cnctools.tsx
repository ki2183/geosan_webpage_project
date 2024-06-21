
import { ColDef } from "ag-grid-community";
import Excel from "../ui/viewtools/excel";
import Info from "../ui/viewtools/info";
import cnc1 from "../IMGs/cnc/cnc550.webp"
import cnc2 from "../IMGs/cnc/kf6500.webp"
import Imgs, { img_type } from "../ui/viewtools/imgs";
import { return_machine_link } from "../IMGs/machine/IMGMACHINE";
import fetch_cnc_data, { fetch_cnc_data_type } from "../api/fetchCncData/route";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { sql } from "@vercel/postgres";

export function CNCInfo(){
    return (
        <Info
            title="설비"
            id_name="cnc_information"
            information="거산테크는 0.1~1μm의 정밀한 치수가공이 가능하며, 연삭, 연마 표면처리의 가공도 최고수준을 자랑합니다."
        />
    )
}

export function CNCImg(){
    
    const imgs:img_type[] = [
        {
            src:cnc1,
            alt:""
        },{
            src:cnc2,
            alt:""
        },
    ]

    const img = Array.from({length:12},(_,idx)=>({
        src:return_machine_link({idx}),
        alt:`cnc_machine${idx+1}`
    }))

    return(
        <Imgs
            id_name="cnc_imgs"
            imgs={img}
        />
    )
}









export  async function CNCExcel({ res }: InferGetServerSidePropsType<typeof getServerSideProps>){

    const columnDefs: ColDef[] = [
        { headerName: "No.", valueGetter: 'node.rowIndex + 1',flex:0.6},
        { headerName: '관리번호', field: 'serial_num' , flex:1.5},
        { headerName: '설비명', field: 'name', flex:1},
        { headerName: '구입년도', field: 'date',flex:1},
        { headerName: '구입처', field: 'brand',flex:1},
    ];
    const data = await fetch_cnc_data()
    const dto = await fetch_cnc_dto()
    const excelData = dto

    // const excelData = [
    //     {serial_num: "F650PLUS(10,000RPM)", name: "머시닝센타",date:"2017.02",brand:"현대위아" },
    //     {serial_num: "F650PLUS(8,000RPM)", name: "머시닝센타",date:"2017.02",brand:"현대위아" },
    //     {serial_num: "F550M(15,000RPM)", name: "머시닝센타", date:"2017.06",brand:"현대위아" },
    //     {serial_num: "F550M(15,000RPM)", name: "탭핑센타",date:"2017.06",brand:"현대위아" },
    //     {serial_num: "F500", name: "머시닝센타",date:"2021.04",brand:"현대위아" },
    //     {serial_num: "VX650", name: "머시닝센타",date:"2021.05",brand:"현대위아" },
    //     {serial_num: "VX650", name: "머시닝센타",date:"2021.08",brand:"현대위아" },
    //     {serial_num: "VX3801D", name: "탭핑센타",date:"2022.03",brand:"현대위아" },
    //     {serial_num: "KF5600", name: "머시닝센타",date:"2022.12",brand:"현대위아" },
    //     {serial_num: "FX2-200T", name: "컴퓨레샤",date:"2017.01",brand:"COMP KOR" },
    //     {serial_num: "STD-410", name: "탁상드릴",date:"2017.02",brand:"삼천리" },
    //     {serial_num: "PUMA-400", name: "터닝머신(CNC)",date:"2017.02",brand:"두산인프라" },
    //     {serial_num: "PUMA-230B", name: "터닝머신(CNC)",date:"2017.02",brand:"두산인프라" },
    //     {serial_num: "PUMA-240B", name: "터닝머신(CNC)",date:"2017.02",brand:"두산인프라" },
    //     {serial_num: "PUMA-280", name: "터닝머신(CNC)",date:"2017.02",brand:"두산인프라" },
    //     {serial_num: "PUMA-GT2600L", name: "터닝머신(CNC)",date:"2019.01",brand:"두산인프라" },
    // ];

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



type DataType = {
    serial_num:string
    name:string
    date:string
    brand:string
}

async function fetch_cnc_dto():Promise<DataType[]>{
    try {
        const data = await sql<DataType>`SELECT * FROM cnc`;
        return data.rows
      } catch (err) {
        console.error("Database Error:", err);
        throw new Error("Failed to fetch the latest fetch_cnc_data.");
      }
}

export const getServerSideProps: GetServerSideProps<{ res: DataType[] }> = async () => {
    try {
      const res = await fetch_cnc_data();
      console.log('Fetched data:', res); // 디버깅을 위해 데이터 출력
      return { props: { res } };
    } catch (error) {
      console.error('Error fetching data:', error);
      return { props: { res: [] } }; // 에러 발생 시 빈 배열 반환
    }
  }