import React, { useEffect, useState } from 'react'
import style from "styles/custom/custom.module.css"
import Script from "next/script"
import Link from "next/link"
import { Map, MapMarker } from "react-kakao-maps-sdk"

const KakaoMapp =(props)=>{
  const [center, setCenter] = useState()
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={style.map_container}>
    <Map
      center={{ lat: props.locY, lng:props.locX }}
      style={{ width: "100%", height: "360px" }}
    >
      <MapMarker position={{ lat: props.locY, lng: props.locX }}>
      <div className={style.map_marker}>중앙대학교 광명병원<br />
            <Link legacyBehavior passhref href={`https://map.kakao.com/link/map/중앙대학교광명병원,${props.locY},${props.locX}`}><a target="_blank">큰지도보기</a></Link> /
            <Link legacyBehavior passhref href={`https://map.kakao.com/link/to/중앙대학교광명병원,${props.locY},${props.locX}`}><a target="_blank"> 길찾기</a></Link>
          </div>
      </MapMarker>
      <div className={style.map_footer}>경기 광명시 덕안로 110</div>
    </Map>
    <img src="/images/about/map1.png" style={{marginTop:"40px"}} />
    </div>
    )
}

export default KakaoMapp;