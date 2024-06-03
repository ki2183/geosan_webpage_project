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
                        <span>
                            CEO 인사말
                        </span>
                        <span>
                            (주)씨에이테크는 1999년 금형부품의 설계, 제작과 공급을 위해 설립되어,
                            국내 초정밀 프레스 관련업계에 다년간에 걸쳐 각종 특수강의 공급과 다양한 가공물의
                            제작 경험을 바탕으로 2003년부터 온라인 상에서 가공물의 문의, 견적 및 주문,
                            제작 할수 있는 가공·NETWORK(구 CA-NETWORK)를 국내 최초로 구축하여
                            보다 편리하게 고객의 다양한 가공 요구를 해결하여 왔습니다.
                        </span>
                    <span className='w-full text-black font-bold pb-2'>주요 거래처</span>
                        <Excel/>
                    </div>
                    
                </div>
            </div>
        </main>
    );
}
