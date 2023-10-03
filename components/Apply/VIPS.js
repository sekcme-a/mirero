import styles from "./VIPS.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Profile from "./Profile";

import { firestore as db } from "firebase/firebase";
import { useEffect, useState } from "react";

const VIP_DATA = [
  {
    name: "",
    position:"소속",
    imgUrl: "/images/apply/default.png"
  },
  {
    name: "",
    position:"소속",
    imgUrl: "/images/apply/default.png"
  },
  {
    name: "",
    position:"소속",
    imgUrl: "/images/apply/default.png"
  },
  {
    name: "",
    position:"소속",
    imgUrl: "/images/apply/default.png"
  },
  {
    name: "",
    position:"소속",
    imgUrl: "/images/apply/default.png"
  },
]

const VIPS = () => {
  const [list, setList] = useState([])

  useEffect(()=>{
    const fetchData = async () => {
      const query = await db.collection("team").doc("miraero").collection("members").orderBy("createdAt").get()
      let temp_list = []
      if(!query.empty){
        temp_list = query.docs.map((doc) => {
          return(
            {...doc.data(), imgUrl: doc.data().profile}
          )
        })
      }
      //5개보다 작다면 기본문구 작성
      if(temp_list.length<8){
        const num = -1*(temp_list.length-8)
        console.log(num)
        for(let i = 0 ; i<num; i++){
          temp_list.push({name:"", position:"소속", imgUrl:"/images/apply/default.png"})
        }
      }
      setList(temp_list)
    }
    fetchData()
  },[])



  return(
    <div className={styles.main_container} style={{margin:"100px 0"}}>
      <h1>함께 하시는 분</h1>
      <h3 style={{wordBreak:"keep-all"}}>Tomorlove Club 와 함께하시는 분들을 소개합니다.</h3>
      <div className={styles.swiper_container}>
      <Swiper
        spaceBetween={5}
        pagination={{
            clickable: true,
        }}
        breakpoints={{
            0: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 5,
            },
            1024: {
                slidesPerView: 8,
            },
        }}
        modules={[Pagination]}
        className="team-slides"
      >

        {list.map((item, index) => {
          return(
            <SwiperSlide key={index}>
              {/* <div className={styles.item_container}>
                
              </div> */}
              <Profile  {...{...item}} size="small"/>
            </SwiperSlide>
          )
        })}

      </Swiper>
      </div>
    </div>
  )
}


export default VIPS