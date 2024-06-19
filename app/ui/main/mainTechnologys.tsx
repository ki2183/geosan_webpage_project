import Image from "next/image"
import iron from "../IMGs/iron-drawing.png"

const mainTechnologyList = [
    {
        img:"",
        title:"소재",
        content:"합금 및 다양한 형태 와 규격의 시트 등 소재를 공급합니다."
    },{
        img:"",
        title:"정밀가공",
        content:"정밀한 가공"
    },{
        img:"",
        title:"코팅",
        content:"내식성, 전기 절연성을 향상시키는 표면처리 방식 입니다."
    },{
        img:"",
        title:"세정",
        content:"오염원 발생을 최소화하여 고품지르이 제품을 구현합니다."
    }
]

export default function MainTechnologys(){

    const section_style = {
        maxWidth:"1270px"
    }

    return(
        <section className="ml-auto mr-auto w-screen h-96 flex bg-gray-100">
            <div style={section_style} className="ml-auto mr-auto w-10/12 h-96 flex flex-row items-center justify-between">
                {
                    mainTechnologyList.map((item,idx)=>{
                        const {img,content,title} = item
                        return(
                            <TechnologyBox
                                key={idx}
                                img={img}
                                title={title}
                                content={content}
                            />
                        )
                    })
                }
            </div>  
        </section>
    )
}

type TechnologyBox_type = {
    img:string,
    title:string,
    content:string,
}
function TechnologyBox({
    img,title,content
}:TechnologyBox_type){

    const box_style = {
        boxShadow:"#7373734f 12px 16px 24px",
        display: "grid",
        gridTemplateRows: "2fr 0.5fr 1fr"
    }

    return (
        <div style={box_style} className="bg-white text-black w-60 h-60 p-1 border-gray-200 border rounded-md flex flex-col ">
            <Image
                alt="iron"
                src={iron}
                className="w-40 h-40 ml-auto mr-auto"
            />
            <span className="pl-2 pr-2 font-bold">{title}</span>
            <span className="pl-2 pr-2 text-sm">{content}</span>
        </div>
    )
}