import Image from "next/image"
import logo from "../IMGs/geosan_logo.png"

export default function UnderCompanyInfo(){
    const container_style = {
        gridTemplateColumns: "144px auto auto"
    }
    const flex_center = "flex flex-col items-center justify-center"
    const flex_start = "flex flex-col items-start justify-center"

    return (
        <section id="under-company-info">
            <div className="w-full h-48 flex flex-rows items-center mt-5 gap-5">
                <div className="flex flex-col items-center justify-center w-[144px] h-[144px]">
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
                <div className={`${flex_start} text-gray-400 text-xs`}>
                    <span>사진 저작권</span> 
                    <span>
                        소개:<a href="https://www.freepik.com/free-photo/precision-machinery-shapes-golden-substance-with-robotic-exactitude_134884286.htm#fromView=search&page=1&position=0&uuid=1e2aab75-be0a-4ee5-9e7a-6ff5d18d7b80">Image by nuraghies on Freepik</a>
                        <a></a>
                    </span>
                    <span>
                        품질:<a href="https://www.freepik.com/free-photo/two-confident-business-man-shaking-hands-meeting-office-success-dealing-greeting-partner-concept_1203162.htm#fromView=search&page=1&position=0&uuid=b9c1bb58-8f36-4a38-a7d2-1bf76d5936fa">Image by snowing on Freepik</a>

                        <a></a>
                    </span>
                    <span>
                        거래처:<a href="https://www.freepik.com/free-photo/male-asian-caucasian-engineer-professional-having-discussion-standing-consult-machine-factory-two-expert-coworker-brainstorm-explaining-solves-process-cnc-operate-machine_25118222.htm#fromView=search&page=1&position=42&uuid=80e75f84-24cb-4c67-8c8c-0cf5f88e22bb">Image by Lifestylememory on Freepik</a>
                        <a></a>
                    </span>
                </div>
            </div>    
        </section>
    )
}