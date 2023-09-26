import { Grid } from "@mui/material"
import styles from "./PageHeader.module.css"
import Profile from "./Profile"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";


const PageHeader = () => {


  return(

    <div className={styles.main_container}>
      <Grid container rowSpacing={3}>
        <Grid item xs={12} md={7} style={{display:"flex", justifyContent:'center', flexWrap:"wrap"}}>
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


        <Grid item xs={12} md={5} className={styles.right_container}>
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
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 3,
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
            <SwiperSlide>
              <Profile name="이름" position="소속" imgUrl="/images/apply/default.png" />
            </SwiperSlide>
            <SwiperSlide>
              <Profile name="이름" position="소속" imgUrl="/images/apply/default.png" />
            </SwiperSlide>
            <SwiperSlide>
              <Profile name="이름" position="소속" imgUrl="/images/apply/default.png" />
            </SwiperSlide>
            <SwiperSlide>
              <Profile name="이름" position="소속" imgUrl="/images/apply/default.png" />
            </SwiperSlide>
            <SwiperSlide>
              <Profile name="이름" position="소속" imgUrl="/images/apply/default.png" />
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Grid>
    
    
    </div>
  )
}

export default PageHeader