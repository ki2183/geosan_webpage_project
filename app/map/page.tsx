import Script from "next/script";
import Navigation from "../ui/navigation/navigation_side";
import KakaoMap from "./kakaomap";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Navigation/>
          <div id="map" className="mx-auto" style={{width: "500px", height: "400px"}}>
            <KakaoMap/>
          </div>
      </main>
    </>
  );
}
