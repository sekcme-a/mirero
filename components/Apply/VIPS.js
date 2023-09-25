import styles from "./VIPS.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";


const VIP_DATA = [
  {
    name: "이름",
    position:"직책",
    imgUrl: "/images/apply/default.png"
  },
  {
    name: "이름",
    position:"직책",
    imgUrl: "/images/apply/default.png"
  },
  {
    name: "이름",
    position:"직책",
    imgUrl: "/images/apply/default.png"
  },
  {
    name: "이름",
    position:"직책",
    imgUrl: "/images/apply/default.png"
  },
  {
    name: "이름",
    position:"직책",
    imgUrl: "/images/apply/default.png"
  },
]

const VIPS = () => {
  return(
    <div className={styles.main_container}>
      <Swiper
        spaceBetween={30}
        pagination={{
            clickable: true,
        }}
        breakpoints={{
            0: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 8,
            },
            1024: {
                slidesPerView: 10,
            },
        }}
        autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
        }}
        modules={[Pagination, Autoplay]}
        className="team-slides"
      >

        {VIP_DATA.map((item, index) => {
          return(
            <SwiperSlide key={index}>
              <div className={styles.item_container}>
                
              </div>
            </SwiperSlide>
          )
        })}

      </Swiper>

    </div>
  )
}


export default VIPS