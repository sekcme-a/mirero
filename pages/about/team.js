
import Navbar from 'components/Layout/Navbar';
import PageHeader from 'components/About/PageHeader';
import OrganizationImage from "components/About/OrganizationImage"
import Footer from 'components/Layout/Footer';

const Team = () => {
  return(
    <>
      <Navbar />

      <PageHeader title="조직도" subtitle="메인화면" location="조직도"/>

      <OrganizationImage/>

      <Footer />
    </>
  )
}

export default Team