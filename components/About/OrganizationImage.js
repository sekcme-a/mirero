import { useState, useEffect } from "react"
import styles from "./OrganizationImage.module.css"


const OrganizationImage = () => {
  const [fetchedData, setFetchedData] = useState({
    imgUrl: "/images/about/team.png"
  })


  return(
    <div className={styles.main_container} style={{position:"relative"}}>
      {/* <h1 style={{textAlign:"center", color:"black", fontWeight:'bold'}}>동우그룹의 조직도를 소개합니다.</h1> */}
      <img src={fetchedData.imgUrl} alt="조직도"/>
    </div>
  )
}

export default OrganizationImage