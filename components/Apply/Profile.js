import styles from "./Profile.module.css"

const Profile = ({name, position, imgUrl}) => {
  return(
    <>
      <div className={styles.image}>
        <img src={imgUrl} alt="사람" style={{backgroundColor:"white"}} />
        <h3 className={styles.name}>{position}</h3>
        <p className={styles.position}>{name}</p>
      </div>
    </>
  )
}

export default Profile