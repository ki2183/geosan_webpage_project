"use client"

import Nav from "../ui/nav";
import UnderCompanyInfo from "../ui/underCompanyInfo";
import './technologyPage.css' 
import SideNav from "../ui/sideNav";
import Machine from "./machine";
import Measurement from "./measurement";
import { Provider } from "react-redux";
import { store } from "../REDUX/STORE/store";
import Measurement2 from "./measurement2";
import { useRouter } from "next/navigation";


export default function Home() {
  return (
      <Provider store={store}>
          <main className="relative min-h-screen w-screen flex flex-col">
              <Nav/>
                <div className={`grid technology-container pt-36`}>
                  <SideNav/>
                  <div style={{gap:"144px"}} className="flex flex-col">
                      <Machine/>
                      <Measurement/>

                      <UnderCompanyInfo/>
                  </div>
              </div>
          </main>
        </Provider>
  );
}
 