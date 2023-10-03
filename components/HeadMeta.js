import Head from "next/head";

const HeadMeta = ({ title, description, url }) => {
  return (
    <Head>
      <title>{title || "사단법인 미래로"}</title>
      <meta
        name="description"
        content={
          description ||
          "사단법인 미래로와 함께하세요. 사단법인 미래로의 여러가지 사업들을 소개해드립니다."
        }
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "사단법인 미래로"} />
      <meta property="og:description"
        content={
        description ||
        "사단법인 미래로와 함께하세요. 사단법인 미래로의 여러가지 사업들을 소개해드립니다."
      }/>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://miraero.org"} />
      <meta property="og:image" content={"https://miraero.org/public/images/logo.png" } />
      <meta name="keywords" content="사단법인 미래로"/>
      <meta property="og:article:author" content="사단법인 미래로" />
    </Head>
  );
};

export default HeadMeta;