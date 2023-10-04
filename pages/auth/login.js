import styles from "components/auth/login/Login.module.css"
import IdAndPassword from "components/auth/login/IdAndPassword"

const Login = () => {
  
  return(
    <div className={styles.main_container}>
      <div className={styles.login_container}>
        <img src="/images/logo.png" alt="로고" />
        <IdAndPassword style={{marginTop:"20px", display:'flex', flexWrap:'wrap', justifyContent:"center"}}/>
      </div>
    </div>
  )
}

export default Login