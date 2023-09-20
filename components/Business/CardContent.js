import Link from "next/link"


const CardContent = ({icon, title, content, link}) => {
  return(
    <>
            <div className="single-services-box" style={{marginRight:"10px"}}>
              <div className="icon">
                  <i className={`${icon}`}></i>
                  <div className="icon-bg">
                      <img src="/images/icon-bg1.png" alt="image" />
                      <img src="/images/icon-bg2.png" alt="image" />
                  </div>
              </div>

              <h3>
                  <Link href="/service-details" legacyBehavior>
                      <a>{title}</a>
                  </Link>
              </h3>

              <p style={{fontWeight:'normal', whiteSpace:"pre-line", minHeight:"60px"}}>{content}</p>

              <Link href={link} legacyBehavior target="_blank">
                  <a className="read-more-btn" target="_blank">자세히 보기</a>
              </Link>

              <div className="box-shape">
                  <img src="/images/box-shape1.png" alt="image" />
                  <img src="/images/box-shape2.png" alt="image" />
              </div>
          </div>
    </>
  )
}

export default CardContent