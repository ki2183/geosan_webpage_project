import Image from "next/image"
import home from "../IMGs/icon/home.svg"
import Link from "next/link"

type Location_type = {
    id_name?:string
    class_name?:string
    title?:string
}

export default function Location({class_name,id_name,title}:Location_type){
    return(
        <section id={id_name} className="w-full">
            <div className={`text-sm text-gray-400 font-bold w-full h-auto flex gap-2 ${class_name}`}>
                <span className="w-5">
                    <Link href="/">
                        <Image
                            src={home}
                            alt="home-icon"
                            />
                    </Link>
                </span>
                <span>&gt;</span>
                    <span>{title}</span>
            </div>
        </section>
    )
}