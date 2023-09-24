
import Navbar from 'components/Layout/Navbar';
import PageHeader from 'components/About/PageHeader';
import OrganizationImage from "components/About/OrganizationImage"
import Footer from 'components/Layout/Footer';
import HeadMeta from 'components/HeadMeta';

const Team = () => {
  return(
    <>


      <HeadMeta 
        title="조직도-사단법인 미래로"
        description="사단법인 미래로의 조직도를 확인하세요."
        url="https://miraero.org/about/purpose"
      />


      <Navbar />

      <PageHeader title="조직도" subtitle="메인화면" location="조직도"/>

      <OrganizationImage/>

      <Footer />
    </>
  )
}

export default Team