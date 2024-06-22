import style from "./mainImgs.module.scss"
import ImgParts from "@/app/IMGs/parts/partsImgs"

export default function MainImgs(){
    return (
        <section id="main-imgs">
            <div className={`${style.container} `}>
            <div className="inline-block rounded-lg w-8 opacity-45 h-1 bg-gray-100 text-sm bg-main">
              </div>
                <span className="text-4xl font-bold text-gray-950">신뢰 가능한 제품</span>
                <span className="text-gray-400">
                    거산테크는 높은 품질의 제품을 보장하겠습니다.
                </span>
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