"use client"
import { notoSansKr } from "./font/font";
import Video from "./ui/Mainbanner/Video/video";
import Nav from "./ui/NAV/nav";



export default function Home() {
  return (
    <>
      <Nav/>

      <main className={`${notoSansKr.className} bg-gray-700 relative min-h-screen w-screen flex flex-col h-[200vh]`}>
   
        <Video src="/video/main.mp4" autoPlay loop muted />
      </main>
    </>
  )
}