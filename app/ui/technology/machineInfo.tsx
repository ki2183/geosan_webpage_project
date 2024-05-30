"use client"
export default function MachineInfo(){
    const container_style = {
        width:"80%"
    }
    const span_style = {
        maxWidth:"70%"
    }

    return (
        <div style={container_style} id="machine-info" className="ml-auto mr-auto mb-10">
            <h1 className="text-4xl font-bold mb-8">
                설비
            </h1>

            <span style={span_style} className="text-lg">
                거산테크는 0.1~μm의 정밀한 치수가공이 가능하며, 연삭, 연마 표면처리의 가공도 최고수준을 자랑합니다.
            </span>
        </div>
    )
}