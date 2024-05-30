
import Nav from "../ui/nav";
import UnderCompanyInfo from "../ui/underCompanyInfo";
import MachineList from "../ui/technology/machineList";
import MachinePhotos from "../ui/technology/machinePhotos";
import './technologyPage.css'
import MachineInfo from "../ui/technology/machineInfo"; 
import SideNav from "../ui/sideNav";


export default function Home() {

  return (
      <main className="relative min-h-screen w-screen flex flex-col">
        <Nav/>
        {/* <div className="w-screen h-36 grid"/> */}
        <div className={`grid technology-container pt-36`}>
          <SideNav/>
          <div>
              <MachineInfo/>
              <MachineList/>
              <MachinePhotos/>
              <UnderCompanyInfo/>
          </div>
        </div>
        
      </main>
  );
}
 