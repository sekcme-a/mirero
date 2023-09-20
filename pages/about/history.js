import Navbar from 'components/Layout/Navbar';
import PageHeader from 'components/About/PageHeader';
import Timeline from 'components/About/Timeline';
import Footer from 'components/Layout/Footer';


const History = () => {
  return(
    <>
      <Navbar />
      <PageHeader title="사단법인 미래로 연혁" subtitle="메인화면" location="연혁"/>
      <Timeline />

      <Footer />
    </>
  )
}

export default History