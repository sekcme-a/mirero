import { CircularProgress, Grid } from "@mui/material"
import Type from "components/Announcement/Type"
import PageHeader from "components/About/PageHeader"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import useData from "context/data"
// import AnnouncementCompo from "src/article/Announcement" 

import HeadMeta from "components/HeadMeta"
import Navbar from "components/Layout/Navbar"

const Article = () => {
  const router = useRouter()
  const {type} = router.query
  const [typeText, setTypeText] = useState("")
  const {thumbnailsList, fetch_thumbnails_list} = useData()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=> {
    const fetchData = async () => {
      if(type && thumbnailsList[type]) setIsLoading(false)
      else if (type) {
        await fetch_thumbnails_list(type)
        setIsLoading(false)
      }
    }
    fetchData()
  },[type])

  useEffect(() =>{
    if(type==="announcement")
      setTypeText("공지사항")
    else if(type==="notice")
      setTypeText("게시판")
  },[type])


  return(
    <>
      <HeadMeta 
        title="공지사항-사단법인 미래로"
        description="공지사항들을 확인해 사단법인 미래로의 최근 소식들을 알아보세요."
        url="https://miraero.org/article/announcement"
      />

      <Navbar />
      <PageHeader title={typeText} subtitle="메인화면" location={typeText}/>


      {isLoading ? <div style={{width:"100vw", marginTop:'100px',marginBottom:"100px",  display:"flex", justifyContent:"center"}}><CircularProgress /></div> : 
        // type==="announcement" ?
        //   <AnnouncementCompo list={thumbnailsList[type]}/> 
        //   :
          <Type list={thumbnailsList[type]} {...{type, typeText}}/>}
      <div style={{marginBottom:"100px"}}></div>
    </>
  )
}

export default Article