import { Metadata } from "next";
import { notoSansKr } from "../font/font";


const metadata: Metadata = {
  title: "거산테크",
  description: "2차 가공",
  keywords:"ssr 렌더링, 키워드,아 몰라"
};

export const cls = (...classnames: string[]) => {
  return classnames.join(" ");
};
58 
export default function Home() {
  return (
      <main className={`${notoSansKr.className} relative min-h-screen gap-6\ w-screen flex flex-col items-center justify-center`}>
        <div className="w-20 h-20 bg-black test-box"/>
        <div className="w-20 h-20 bg-black test-box"/>
        <div className="w-20 h-20 bg-black test-box"/>
      </main>
  );
}
