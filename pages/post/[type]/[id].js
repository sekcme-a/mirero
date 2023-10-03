import { CircularProgress } from "@mui/material"
import useData from "context/data"
import { useRouter } from "next/router"
import { useState } from "react"
import { useEffect } from "react"
import PageHeader from "components/About/PageHeader"
import PostCompo from "components/post/Post"

import HeadMeta from "components/HeadMeta"
import Navbar from "components/Layout/Navbar"

const Post = () => {
  const router = useRouter()
  const {id, type} = router.query
  const {postsList, fetch_post} = useData()
  const [isLoading, setIsLoading] = useState(true)
  const [hasData, setHasData] = useState(false)
  const [typeText, setTypeText] = useState("공지사항")

  useEffect(() => {
    const fetchData = async () => {
      if(postsList[id]){
        console.log(postsList[id])
        setIsLoading(false)
        setHasData(true)
      } else {
        const result = await fetch_post(id)
        setHasData(result)
        setIsLoading(false)
      }
    }
    if(type==="notice") setTypeText("게시판")
    else if(type==="tomorlove") setTypeText("투마럽클럽")
    if(type, id)
      fetchData()
    
  },[type,id])


  return(
    <>
      <HeadMeta 
          title={`사단법인 미래로 - ${postsList[id]?.title}` || "공지사항-사단법인 미래로"}
          description="공지사항들을 확인해 사단법인 미래로의 최근 소식들을 알아보세요."
          url="https://miraero.org/article/announcement"
      />

      <Navbar />
      <PageHeader title={`${postsList[id]?.title}`} subtitle="메인화면" location={typeText}/>

      {isLoading ? 
        <div style={{width:"100vw", marginTop:"100px", marginBottom:"100px", display: "flex", justifyContent:"center"}}>
          <CircularProgress /> 
        </div>
        :
        <PostCompo data={postsList[id]} type={type} id={id}/>
      }
    </>
  )
}

export default Post