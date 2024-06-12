import Image from "next/image"
import cnc1 from "../../IMGs/mainbanner/measure.webp"


export default function MainQuality(){
  const style = {
    boxShadow: "2px 4px 12px rgba(0, 0, 0, 0.0784313725)"
  }
  
  return(
      <section className="w-full ml-auto mr-auto md:py-24 lg:py-32 mt-8">
      <div className="container px-4 md:px-6 ml-auto mr-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg w-16 opacity-45 bg-gray-100 px-3 h-1 text-sm bg-main">
              {/* Precision Manufacturing */}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">우리는 품질과 타협하지 않습니다.</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              언제나 최고의 서비스를 약속합니다.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Image
            style={style}
            src={cnc1}
            width={700}
            alt="Manufacturing Process"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">엄격한 QC</h3>
                  <p className="text-gray-400 dark:text-gray-400">
                    Our parts undergo a comprehensive inspection process, ensuring they meet the most stringent
                    quality standards.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">지속적인 개선</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We constantly refine our processes and invest in the latest technologies to deliver unparalleled
                    quality and efficiency.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">신뢰성</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our commitment to sustainability is reflected in our eco-friendly manufacturing practices and
                    responsible material sourcing.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}