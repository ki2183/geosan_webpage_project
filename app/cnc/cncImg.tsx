import Imgs, { img_type } from "../ui/viewtools/imgs"
import cnc1 from "../IMGs/cnc/cnc550.webp"
import cnc2 from "../IMGs/cnc/kf6500.webp"
import { return_machine_link } from "../IMGs/machine/IMGMACHINE"

export default function CNCImg(){
    
    const imgs:img_type[] = [
        {
            src:cnc1,
            alt:"cnc_mahc"
        },{
            src:cnc2,
            alt:""
        },
    ]

    const img = Array.from({length:12},(_,idx)=>({
        src:return_machine_link({idx}),
        alt:`cnc_machine${idx+1}`
    }))

    return(
        <Imgs
            id_name="cnc_imgs"
            imgs={img}
        />
    )
}





