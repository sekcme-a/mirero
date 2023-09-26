import styles from "./VIPS.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Profile from "./Profile";


const VIP_DATA = [
  {
    name: "이름",
    position:"소속",
    imgUrl: "/images/apply/default.png"
  },
  {
    name: "이름",
    position:"소속",
    imgUrl: "/images/apply/default.png"
  },
  {
    name: "이름",
    position:"소속",
    imgUrl: "/images/apply/default.png"
  },
  {
    name: "이름",
    position:"소속",
    imgUrl: "/images/apply/default.png"
  },
  {
    name: "이름",
    position:"소속",
    imgUrl: "/images/apply/default.png"
  },
]

const VIPS = () => {
  return(
    <div className={styles.main_container}>
      <h1>함께 하시는 분</h1>
      <h3>Tomorlove Club 와 함께하시는 분들을 소개합니다.</h3>
      <div className={styles.swiper_container}>
      <Swiper
        spaceBetween={10}
        pagination={{
            clickable: true,
        }}
        loop
        breakpoints={{
            0: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 6,
            },
            1024: {
                slidesPerView: 8,
            },
        }}
        autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
        }}
        modules={[Pagination, Autoplay]}
        className="team-slides"
        centeredSlides
      >

        {VIP_DATA.map((item, index) => {
          return(
            <SwiperSlide key={index}>
              {/* <div className={styles.item_container}>
                
              </div> */}
              <Profile  {...{...item}} />
            </SwiperSlide>
          )
        })}

      </Swiper>
      </div>
    </div>
  )
}


export default VIPS