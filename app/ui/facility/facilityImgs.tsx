import ImgMachine from "@/app/IMGs/machine/IMGMACHINE"
import style from "./facilityImgs.module.scss"

export default function FacilityImgs(){

    const style = {
        boxShadow: "2px 4px 12px rgba(0, 0, 0, 0.0784313725)"
    }

    return (
        <section id="facility-imgs">
            <div className="h-auto w-full">
                <div style={style} className="grid grid-cols-3 1060:grid-cols-2 gap-3">
                    {
                        Array.from({length:12}).map((_,idx)=>(
                            <ImgMachine
                                key={idx}
                                src={`cnc${idx+1}`}
                                classname="rounded-lg"
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}