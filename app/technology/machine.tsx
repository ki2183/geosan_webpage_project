import MachineInfo from "../ui/technology/machineInfo";
import MachineList from "../ui/technology/machineList";
import MachinePhotos from "../ui/technology/machinePhotos";

export default function Machine(){
    return(
        <div className="flex flex-col gap-16">
            <MachineInfo/>
            <MachineList/>
            <MachinePhotos/>
        </div>
    )
}