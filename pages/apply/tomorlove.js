import { useEffect, useState } from "react"
import useData from "context/data"

import HeadMeta from "components/HeadMeta"
import PageHeader2 from "components/Apply/PageHeader2"
import Navbar from "components/Layout/Navbar"
import Footer from "components/Layout/Footer"
import VIPS from "components/Apply/VIPS"
import ArticleList from "components/Announcement/ArticleList"
import JoinNow from "components/Common/JoinNow"

const Tomorlove = () => {
  const {thumbnailsList, fetch_thumbnails_list} = useData()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=> {
    const fetchData = async () => {
      if(thumbnailsList["tomorlove"]) setIsLoading(false)
      else {
        await fetch_thumbnails_list("tomorlove")
        setIsLoading(false)
      }
    }
    fetchData()
  },[])


  return(
    <>
              <HeadMeta 
                title="투마럽클럽-사단법인 미래로"
                description="투마럽클럽에 대해 소개해드립니다. Tomorlove 는 내일, 미래를 뜻하는Tomorrow 와 사랑의 Love 의 합성어입니다."
                url="https://miraero.org/apply/tomorlove"
              />

                <Navbar />

                <PageHeader2 />

                <VIPS />

                <div style={{margin:"100px 50px"}}>
                  <h1 style={{textAlign:"center", fontSize:"30px", fontWeight:"bold"}}>투마럽클럽 최근소식</h1>
                  <h3 style={{textAlign:'center', fontSize:'20px'}}>Tomorlove Club의 최근 소식들을 소개합니다.</h3>
                  <ArticleList list={thumbnailsList["tomorlove"]} type="tomorlove"/>
                </div>

                <div style={{margin:"100px 50px"}}>
                  <h1 style={{textAlign:"center", fontSize:"30px", fontWeight:"bold"}}>투마럽클럽 자격조건</h1>
                  <h3 style={{textAlign:'center', fontSize:'20px', wordBreak:"keep-all"}}>일시후원 또는 누적 후원금 3천만원 이상 개인후원자 / 3년 내 3천 만원 이상 후원을 약정한 개인후원자</h3>
                </div>

                <JoinNow 
                  title="Tomorlove Club에 대해 문의하세요."
                  subtitle="궁금한 점에 대해 문의하세요. 빠른 시일 내에 친절하게 답변드리겠습니다."
                  button={{
                    text: "문의하러 가기",
                    link: "/contact"
                  }}
                />
                
                <Footer />
    </>
  )
}

export default Tomorlove