import Excel from "../ui/viewtools/excel";
import Info from "../ui/viewtools/info";

export function CNCInfo(){
    return (
        <Info
            title="설비"
            id_name="이건아닌데"
            information="거산테크는 0.1~1μm의 정밀한 치수가공이 가능하며, 연삭, 연마 표면처리의 가공도 최고수준을 자랑합니다."
        />
    )
}

export function CNCExcel(){
    return (
        <Excel/>
    )
}