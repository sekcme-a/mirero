import { Grid } from "@mui/material"
import styles from "./PageHeader.module.css"
import Profile from "./Profile"


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
          <Grid container spacing={1} className={styles.mvp_container}>
            <Grid item xs={12} sm={4}>
              <Profile name="이름" position="소속" imgUrl="/images/apply/default.png" />
            </Grid>
            <Grid item xs={12} sm={4}>
            <div className={styles.image}>
                <img src="/images/apply/default.png" alt="사람" style={{backgroundColor:"white"}} />
                <h3 className={styles.name}>소속</h3>
                <p className={styles.position}>이름</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
            <div className={styles.image}>
                <img src="/images/apply/default.png" alt="사람" style={{backgroundColor:"white"}} />
                <h3 className={styles.name}>소속</h3>
                <p className={styles.position}>이름</p>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    
    
    </div>
  )
}

export default PageHeader