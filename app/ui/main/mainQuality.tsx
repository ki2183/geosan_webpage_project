import Image from "next/image"
import cnc1 from "../../IMGs/mainbanner/measure.webp"

interface quality_info {
  title:string,
  information:string
}
interface quality_info_list{
  infoList:quality_info[]
}

export default function MainQuality(){

  const infoList:quality_info[]= [
    {
      title:"엄격한 QC",
      information:"당사는 엄격한 품질 기준을 준수하여 고객이 기대하는 수준의 제품을 제공합니다."
    },{
      title:"지속적인 개선",
      information:"지속적인 개선을 통해 생산 효율성과 품질을 꾸준히 향상시키고 있습니다. 고객의 피드백을 적극 반영하여 제품과 서비스의 완성도를 높이고 있습니다."
    },{
      title:"신뢰성",
      information:"당사는 뛰어단 신뢰성을  바탕으로 고객의 믿음을 얻고 있스빈다. 엄격한 품질 관리와 검증된 프로세스를 통해 일관된 성능과 높은 품질을 보장하며, 모든 제품은 신뢰할 수 있는 기준에 따라 제작됩니다."
    }
  ]
  
  return(
      <section className="w-full ml-auto mr-auto md:py-24 lg:py-32 mt-8">
      <div className="container px-4 md:px-6 ml-auto mr-auto">
        <QualityInfoTitle/>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <QualityInfoImage/>
          <QualityInfo infoList={infoList}/>
        </div>
      </div>
    </section>
  )
}


function QualityInfoTitle(){
  return(
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <div className="inline-block rounded-lg w-16 opacity-45 bg-gray-100 px-3 h-1 text-sm bg-main">
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">품질과 타협하지 않습니다.</h2>
        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          언제나 최고의 서비스를 약속합니다.
        </p>
      </div>
    </div>
  )
}

function QualityInfoImage(){
  const style = {
    boxShadow: "2px 4px 12px rgba(0, 0, 0, 0.0784313725)"
  }
  return(
      <Image
        style={style}
        src={cnc1}
        width={700}
        alt="main_measure_img"
        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
    />
  )
}

function QualityInfo({infoList}:quality_info_list){
  return (
    <div className="flex flex-col justify-center space-y-4">
        <ul className="grid gap-6">
          {
            (infoList && infoList.length) && 
              infoList.map(({title,information},idx)=>(
                <QualityInfoList
                  key={idx}
                  title={title}
                  information={information}
                />
              ))
          }
        </ul>
      </div>
  )
}

function QualityInfoList({information,title}:quality_info){
  return (
    <li>
      <div className="grid gap-1">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-400 dark:text-gray-400">
          {information}
        </p>
      </div>
    </li>
  )
}