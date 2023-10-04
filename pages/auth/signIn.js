
import styles from "components/auth/login/Login.module.css"
import SignInWithEmailAndPassword from "components/auth/signIn/SignInWithEmailAndPassword"
import { useRouter } from "next/router"
import { Button } from "@mui/material"

const Login = () => {
  const router = useRouter()


  return(
    <div className={styles.main_container}>
      <div className={styles.login_container}>
        <img src="/images/logo.png" alt="로고" />
      <SignInWithEmailAndPassword style={{marginTop:"40px"}}/>
      </div>
    </div>
  )
}

export default Login