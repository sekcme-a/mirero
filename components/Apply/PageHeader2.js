import { Grid } from "@mui/material"
import styles from "./PageHeader2.module.css"
import Profile from "./Profile"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { useState, useEffect } from "react";
import { firestore as db } from "firebase/firebase";

const PageHeader = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const query = await db.collection("team").doc("miraero").collection("members").where("isMain", "==", true).orderBy("createdAt").get()
      let temp_list = []
      if (!query.empty){
        temp_list = query.docs.map((doc) => {
          return(
            {...doc.data(), imgUrl: doc.data().profile}
          )
        })
      }
      console.log(temp_list)
      //5개보다 작다면 기본문구 작성
      if(temp_list.length<5){
        const num = -1*(temp_list.length-5)
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

    <div className={styles.main_container}>
      <Grid container rowSpacing={3}>
        <Grid item xs={12} md={12} style={{display:"flex", justifyContent:'center', flexWrap:"wrap"}}>
          <img src="/images/apply/crown.png" alt="왕관" className={styles.crown} />
          <h1>Tomorlove Club</h1>

          <h2>함께하는 미래를<br/>만들어주셔서 감사합니다</h2>

          <p>
            <strong className={styles.orange}>Tomorlove </strong>
            는 내일, 미래를 뜻하는
            <strong className={styles.orange}>Tomorrow </strong>
            와 사랑의
            <strong className={styles.red}> Love </strong>
            의 합성어입니다.<br />
            함께하는 미래를 만들어주시는 분들과 함께<br />
            진정성 있는 사랑을 채워나가겠습니다.
          </p>
        </Grid>


        <Grid item xs={12} md={12} className={styles.right_container} style={{marginTop:"50px"}}>
          <div className={styles.header_text_container}>
            <img src="/images/apply/deco.svg" alt="데코" className={styles.left_deco}/>
            <div className={styles.text_container}>
              <h1>The People Who Make The Future</h1>
              <h2>TOMORLOVE CLUB</h2>
            </div>
            <img src="/images/apply/deco.svg" alt="데코" className={styles.right_deco}/>
          </div>
          <Swiper
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 5,
                },
            }}
            autoplay={{
                delay: 2000,
                pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="team-slides"
            loop
          > 
            {
              list.map((item, index) => {
                return(
                  <>
                    <SwiperSlide key={index}>
                      <Profile name={item.name} position={item.position} imgUrl={item.imgUrl}/>
                    </SwiperSlide>
                  </>
                )
              })
            }
          </Swiper>
        </Grid>
      </Grid>
    
    
    </div>
  )
}

export default PageHeader