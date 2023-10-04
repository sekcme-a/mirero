import { Grid, TextField } from "@mui/material"
import Image from "next/image"
import styles from "components/auth/login/Login.module.css"
import ResetPassword from "components/auth/resetPassword/ResetPassword"

const Login = () => {
  return(
    <div className={styles.main_container}>
      <div className={styles.login_container}>
        <img src="/images/logo.png" alt="로고" /> 
        <div className={styles.login_container2}>
          <h2>비밀번호를 잊어버리셨나요? 🔒</h2>
          <h3>이메일을 입력하시면 해당 이메일로 비밀번호 재설정 안내 메일을 보내드립니다.</h3>
          <ResetPassword style={{marginTop:"10px"}}/>
        </div>
      </div>
    </div>
  )
}

export default Login