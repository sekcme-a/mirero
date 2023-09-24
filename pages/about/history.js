import Navbar from 'components/Layout/Navbar';
import PageHeader from 'components/About/PageHeader';
import Timeline from 'components/About/Timeline';
import Footer from 'components/Layout/Footer';
import HeadMeta from 'components/HeadMeta';


const History = () => {
  return(
    <>

      <HeadMeta 
        title="연혁-사단법인 미래로"
        description="사단법인 미래로의 기록이 담긴 연혁을 소개해드립니다."
        url="https://miraero.org/about/history"
      />


      <Navbar />
      <PageHeader title="사단법인 미래로 연혁" subtitle="메인화면" location="연혁"/>
      <Timeline />

      <Footer />
    </>
  )
}

export default History