"use client"

import { notoSansKr } from "../font/font";
import Navigation from "../ui/navigation/navigation_side";
import Location from "../ui/location";
import styles from "./facility.module.scss"
import FacilityInfo from "../ui/facility/facilittyInfo";
import FacilityExcel from "../ui/facility/facilityexcel";
import FacilityImgs from "../ui/facility/facilityImgs";
import UnderCompanyInfo from "../ui/underCompanyInfo";

export const cls = (...classnames: string[]) => {
  return classnames.join(" ");
};

export default function Home() {
  return (
      <main className={`${notoSansKr.className} ${styles.main}`}>
        <Navigation/>
          <div className={styles.container}>
            <Location/>
            <FacilityInfo/>
            <FacilityExcel/>

            <FacilityImgs/>
            <UnderCompanyInfo/>
          </div>
    
      </main>
  );
}
