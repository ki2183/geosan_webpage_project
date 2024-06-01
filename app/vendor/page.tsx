import Image from "next/image";
import { Fragment } from "react";
import Head from "next/head";
import { Metadata } from "next";
import Nav from "../ui/nav";
import Excel from "../ui/excel";

export default function Home() {


    return (
        <main className="relative min-h-screen w-screen flex flex-col">
            <Nav/>
            <div className="w-full h-screen pt-12 grid container-grid">
                <div className="overflow-hidden">
                    대충 거래처 목록이라는 뜻
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="w-4/5 h-auto">
                    <span className='w-full text-black font-bold pb-2'>주요 거래처</span>
                        <Excel/>
                    </div>
                    
                </div>
            </div>
        </main>
    );
}
