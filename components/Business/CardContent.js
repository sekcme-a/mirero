import Link from "next/link"


const CardContent = ({img, title, content, link}) => {
  return(
    <>
            <div className="single-services-box" style={{minHeight:"400px"}}>
              <div className="icon">
                  {/* <i className={`${icon}`}></i> */}
                  <i>
                    <img src={img} alt={title}  style={{borderRadius:'5px', overflow:"hidden", height:"200px", objectFit:"contain"}}/>
                  </i>
                  <div className="icon-bg">
                      <img src="/images/icon-bg1.png" alt="image" />
                      <img src="/images/icon-bg2.png" alt="image" />
                  </div>
              </div>

              <h3>
                <a>{title}</a>
              </h3>

              <p style={{fontWeight:'normal', whiteSpace:"pre-line", minHeight:"60px"}}>{content}</p>

              {/* <Link href={link} legacyBehavior target="_blank">
                  <a className="read-more-btn" target="_blank">자세히 보기</a>
              </Link> */}

              <div className="box-shape">
                  <img src="/images/box-shape1.png" alt="image" />
                  <img src="/images/box-shape2.png" alt="image" />
              </div>
          </div>
    </>
  )
}

export default CardContent