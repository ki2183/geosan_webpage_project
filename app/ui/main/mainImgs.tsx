import style from "./mainImgs.module.scss"
import ImgParts from "@/app/IMGs/parts/partsImgs"

export default function MainImgs(){
    return (
        <section id="main-imgs">
            <div className={`${style.container} `}>
            <div className="inline-block rounded-lg w-8 opacity-45 h-1 bg-gray-100 text-sm bg-main">
                {/* Precision Manufacturing */}
              </div>
                <span className="text-4xl font-bold text-gray-950">신뢰 가능한 제품</span>
                <span className="text-gray-400 w-3/4">당사의 CNC 가공 전문 지식은 다양한 분야에 걸쳐 업계 최고의 고객으로부터 신뢰를 얻었습니다. 우리의 포트폴리오를 탐색하여 우리가 제공한 탁월한 작업을 확인하세요.</span>
                <div className={`${style.containerImgBox}`}>
                    {
                        Array.from({length:6}).map((_,idx)=>(
                            <div key={idx} className={`${style.imgbox}`}>
                                     <ImgParts
                                        alt=""
                                        idx={idx}
                                    />
                            </div>
                        ))
                    }
                  
                </div>
            </div>
        </section>
    )
}   