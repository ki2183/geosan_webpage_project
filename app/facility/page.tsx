import { Metadata } from "next";
import { notoSansKr } from "../font/font";
import Navigation from "../ui/navigation/navigation_side";

export const cls = (...classnames: string[]) => {
  return classnames.join(" ");
};

export default function Home() {
  return (
      <main className={`${notoSansKr.className} relative min-h-screen w-screen flex flex-col`}>
        <Navigation/>
      </main>
  );
}
