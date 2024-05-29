import Image from "next/image"
import factory from "../../IMGs/factory.jpg"

export default function Mainbanner(){
    const mainbanner_style_img = {
        height:"650px",
        zIndex:-10,
    }
    const mainbanner_style_div = {
        background:"linear-gradient(90deg, black, black, transparent 60%)"
    }
    return(
        <section id="main-banner">
            <div style={mainbanner_style_img} className="relative w-screen overflow-hidden">
                <Image 
                    src={factory} 
                    alt="Factory Image"
                    objectFit="cover"
                    className="absolute z-0 object-center object-cover w-full h-full"
                >
                </Image>
                <div style={mainbanner_style_div} className="w-full h-full z-1 absolute">
                    <div className="w-1/2 h-full pl-16 flex items-start justify-center flex-col">
                        <span className="text-4xl font-bold mb-2">거산테크</span>
                        <span className="max-w-96 ">
                            거산테크는 설립기간은 길지 않지만 풍부한 경험과 경력을 바탕으로 하여 
                            최고의 품질의 정밀부품가공을 진행하고 있으며 항상 고객감동을 추구 합니다.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}