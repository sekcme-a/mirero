import PageHeader from "components/About/PageHeader"
import Navbar from "components/Layout/Navbar"
import HeadMeta from "components/HeadMeta"

import Type from "components/Announcement/Type"
import { useState } from "react"


const Announcement = () => {
  const [postsList, setPostsList] = useState([])
  return(
    <>
      <HeadMeta 
        title="공지사항-사단법인 미래로"
        description="사단법인 미래로의 최근 소식들을 공지사항으로 확인하세요."
        url="https://miraero.org/article/announcement"
      />
      <Navbar />  
       <PageHeader title="공지사항" subtitle="메인화면" location="공지사항"/>


       <Type list={postsList} type="announcement" typeText="공지사항" />
    </>
  )
}

export default Announcement