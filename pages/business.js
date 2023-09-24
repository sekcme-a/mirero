import { Grid } from "@mui/material"
import Link from "next/link"
import Navbar from 'components/Layout/Navbar';
import PageHeader from 'components/Business/PageHeader';
import Footer from "components/Layout/Footer";
import CardContent from "components/Business/CardContent";
import HeadMeta from "components/HeadMeta";

const Business = () => {
  return(
    <>
      <HeadMeta 
        title="사업소개-사단법인 미래로"
        description="사단법인 미래로의 여러가지 사업들을 소개합니다."
        url="https://miraero.org/business"
      />
      <Navbar />

      <PageHeader title="사단법인 미래로 사업소개" subtitle="메인화면" location="사업소개"/>


      <Grid container sx={{m:"50px 0", padding: "0 7vw"}} spacing={2}>
        <Grid card xs={4}>
          <CardContent
            img="/images/business/reporter.jpg" title="다문화기자단" link="https://www.naver.com"
            content={`한국다문화뉴스 연계\n다문화기자단 교육 및 운영`}
          />
        </Grid>
        <Grid card xs={4}>
          <CardContent
            img="/images/business/together.jpg" title="동아리지원사업" link="https://www.naver.com"
            content={`다문화, 이주민, 모두 모여라!\n매년 5인 이상 동아리 활동비 지원`}
          />
        </Grid>
        <Grid card xs={4}>
          <CardContent
            img="/images/business/education.jpg" title="세계시민교육" link="https://www.naver.com"
            content={`의무와 권리를 함께 찾고 알아가는 한국생활 정착, 나아가 활동에 기반이 되는 다문화사외에 필요한 교육`}
          />
        </Grid>
        <Grid card xs={4}>
          <CardContent
             img="/images/business/volunteer.jpg"  title="지역봉사" link="https://www.naver.com"
            content={`세계시민이 함께 모여 나누는\n정과 지역사랑 봉사활동`}
          />
        </Grid>
        <Grid card xs={4}>
          <CardContent
            img="/images/business/help.jpg" title="장학/후원사업" link="https://www.naver.com"
            content={`다양한 청소년의 꿈을 응원하는 한다장학회\n지역 상생과 나눔에 함께하는 후원`}
          />
        </Grid>
        <Grid card xs={4}>
          <CardContent
            img="/images/logo.png" title="기타사업" link="https://www.naver.com"
            content={`사단법인 미래로의 다양한 사업`}
          />
        </Grid>
      </Grid>


      <Footer />
    </>
  )
}

export default Business