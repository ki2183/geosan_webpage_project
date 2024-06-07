import styles from "./facilityInfo.module.scss"

export default function FacilityInfo(){
    return(
        <section id="facility-info">
            <div id="container-facility" className={styles.container}>
                <span id="info-title">설비</span>
                <span id="info">거산테크는 0.1~1μm의 정밀한 치수가공이 가능하며, 연삭, 연마 표면처리의 가공도 최고수준을 자랑합니다.</span>
            </div>
        </section>
    )
}