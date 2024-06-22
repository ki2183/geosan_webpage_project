"use client"

import Script from 'next/script';
import { JSXElementConstructor, useEffect, useState } from 'react';
import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;

declare global {
    interface Window {
        kakao:any;
    }
}

const KakaoMap = () => {
  const [loading,error] = useKakaoLoader({
    appkey:`${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}`,
    libraries: ['services', 'clusterer']
  })

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading map: {error.message}</div>;

  return (
    <>
        <Map  level={1} center={{ lat: 37.32460021222914, lng: 126.70908633524041 }} style={{ width: '100%', height: '100%' }}>
          <MapMarker position={{ lat: 37.32460021222914, lng: 126.70908633524041 }}>
            <div className="text-black">거산테크</div>
          </MapMarker>
        </Map>
    </>
  )
}

export default KakaoMap