
import Navbar from 'components/Layout/Navbar';
import Footer from 'components/Layout/Footer';
import PageHeader2 from 'components/Apply/PageHeader2';
import Donation from 'components/Apply/Donation';
import HeadMeta from 'components/HeadMeta';

const Apply = () => {
  return(
    <div style={{backgroundColor: "rgb(250,250,250)"}}>

      <HeadMeta 
        title="후원신청-사단법인 미래로"
        description="사단법인 미래로에 후원하세요. 정기후원/일시후원/기업후원/투머럽클럽에 대해 소개해드립니다."
        url="https://miraero.org/apply/main"
      />


      <Navbar />


      <PageHeader2 />

      <Donation />
    
      <Footer />
    </div>
  )
}


export default Apply