import styles from "./Profile.module.css"

const Profile = ({name, position, imgUrl, size}) => {
  if(size==="small")
    return(
      <>
        <div className={styles.small_image}>
          <img src={imgUrl} alt="사람" style={{backgroundColor:"white"}} />
          {name!=="" ? 
            <>
              <h3 className={styles.name}>{position}</h3>
              <p className={styles.position}>{name}</p>
            </>
            :
            <div className={styles.default}>
              <h3>투마럽 클럽의 주인공이 되어주세요.</h3>
            </div>
          }
        </div>
      </>
      )
  else
    return(
      <>
        <div className={styles.image}>
          <img src={imgUrl} alt="사람" style={{backgroundColor:"white"}} />
          {name!=="" ? 
            <>
              <h3 className={styles.name}>{position}</h3>
              <p className={styles.position}>{name}</p>
            </>
            :
            <div className={styles.default}>
              <h3>투마럽 클럽의 주인공이 되어주세요.</h3>
            </div>
          }
        </div>
      </>
    )

}

export default Profile