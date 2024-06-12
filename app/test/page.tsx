import Image from "next/image";
import Component from "./test";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Component/>
    </main>
  );
}
