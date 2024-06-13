import ImgMachine from "@/app/IMGs/machine/IMGMACHINE"
import Image, { StaticImageData } from "next/image"
export type img_type = {
    src:StaticImageData|undefined,
    alt:string,
}
type imgs_type = {
    id_name?:string
    imgs:img_type[]
}

export default function Imgs({
    id_name,imgs
}:imgs_type){
    return (
        <section id={id_name} className="w-full">
            <div className="pt-4 grid w-full h-auto grid-cols-3 gap-3
                1260:grid-cols-2
                1060:flex flex-col
            ">
                {
                    (imgs && imgs.length > 0) && imgs.map(({src,alt},idx)=>(
                        src !== undefined ?
                        <Image
                            alt={alt}
                            src={src}
                            key={idx}
                            className={`rounded-lg 1060:rounded-3xl shadow-lg ${idx>5? "1260:hidden":""} ${idx>3? "1060:hidden":""}`}
                        />: null
                    ))
                }
            </div>
        </section>
    )
}