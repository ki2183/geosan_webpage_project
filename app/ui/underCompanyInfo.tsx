import Image from "next/image"
import logo from "../IMGs/geosan_logo.png"

export default function UnderCompanyInfo(){
    const container_style = {
        gridTemplateColumns: "144px auto"
    }
    const flex_center = "flex flex-col items-center justify-center"
    const flex_start = "flex flex-col items-start justify-center"

    return (
        <section id="under-company-info">
            <div style={container_style} className="w-full h-48 grid mt-5">
                <div className="flex flex-col items-center justify-center">
                    <Image
                        className="w-16"
                        src={logo}
                        alt="거산테크로고"
                    />
                    <span className="text-black text-xs">GEOSAN TECH</span>
                </div>
                <div className={`${flex_start} text-gray-400 text-xs`}>
                    <span>거산테크</span>
                    <span>대표: 김진면</span>
                    <span>업종: 정밀부품가공업(반도체장비부품,광학기기부품,의료기기부품,방산부품)</span>
                    <span>경기도 시흥시 공단 3대로 185(정왕동, 시화공단 2바 1004호)</span>
                    <span>T. 031-432-5552</span>
                    <span>F. 031-432-5557</span>
                    <span>E. myun9476@hanmail.net</span>
                </div>
            </div>       
        </section>
    )
}