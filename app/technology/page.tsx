
import Nav from "../ui/nav";
import UnderCompanyInfo from "../ui/underCompanyInfo";
import './technologyPage.css' 
import SideNav from "../ui/sideNav";
import Machine from "./machine";
import Measurement from "./measurement";


export default function Home() {

  return (
      <main className="relative min-h-screen w-screen flex flex-col">
        <Nav/>
          <div className={`grid technology-container pt-36`}>
            <SideNav/>
            <div className="flex flex-col gap-20">
                <Machine/>
                <Measurement/>
                <UnderCompanyInfo/>
            </div>
        </div>
      </main>
  );
}
 