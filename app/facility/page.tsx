"use client"

import { notoSansKr } from "../font/font";
import Navigation from "../ui/navigation/navigation_side";
import Location from "../ui/location";
import styles from "./facility.module.scss"
import FacilityInfo from "../ui/facility/facilittyInfo";

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
          </div>
    
      </main>
  );
}
