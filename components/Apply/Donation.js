import { Grid } from "@mui/material"
import styles from "./Donation.module.css"

const DONATION_DATA = [
  {
    src: "/images/apply/button_1.png",
    alt:"정기후원",
    url:"/apply/regular"
  },
  {
    src: "/images/apply/button_2.png",
    alt:"일시후원",
    url:"/apply/temporary"
  },
  {
    src: "/images/apply/button_3.png",
    alt:"기업후원",
    url:"/apply/corporate"
  },
]

const Donation = () => {

  return(
    <Grid container spacing={3} style={{padding: "0 20px 40px 20px"}}>
      {DONATION_DATA.map((item, index) =>{
        return(
          <Grid item xs={6} sm={3} key={index} className={styles.button_container}>
            <a href={item.url} target="_blank">
              <img src={item.src} alt={item.alt} />
            </a>
          </Grid>
  
        )
      })}
      <Grid item xs={6} sm={3}className={styles.button_container}>
        <a href="/apply/tomorlove">
          <img src="/images/apply/button_4.png" alt="투머럽클럽"/>
        </a>
      </Grid>

    </Grid>
  )
}

export default Donation