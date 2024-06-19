"use client"
import Script from 'next/script';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;

declare global {
    interface Window {
        kakao:any;
    }
}

const KakaoMap = () => {
  

  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
        <Map center={{ lat: 37.32460021222914, lng: 126.70908633524041 }} style={{ width: '100%', height: '100%' }}>
          <MapMarker position={{ lat: 37.32460021222914, lng: 126.70908633524041 }}>
            <div className="text-black">거산테크</div>
          </MapMarker>
        </Map>
    </>
  );
}

export default KakaoMap;