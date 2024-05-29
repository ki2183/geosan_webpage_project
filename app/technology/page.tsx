
import Nav from "../ui/nav";
import UnderCompanyInfo from "../ui/underCompanyInfo";
import MachineList from "../ui/technology/machineList";
import MachinePhotos from "../ui/technology/machinePhotos";
import './technologyPage.css'


export default function Home() {

  return (
      <main className="relative min-h-screen w-screen flex flex-col">
        <Nav/>
        <div className="w-screen h-36 grid"/>
        <div className={`grid technology-container`}>
          <div className="bg-black"></div>
          <div>
              <MachineList/>
              <MachinePhotos/>
              <UnderCompanyInfo/>
          </div>
        </div>
        
      </main>
  );
}
 