import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from "next/script"

class MyDocument extends Document {
    render() {
        return (
            <Html lang="zxx">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="icon" type="image/png" href="/images/logo.png"></link>
                </Head>
                {/* <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=2696545edfb304a43ba5eeb9a00bb33c&libraries=services,clusterer&autoload=false`}
        strategy="beforeInteractive"
      /> */}
      {/* <Script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=2696545edfb304a43ba5eeb9a00bb33c"/> */}

                <body>
                    <Main />
                    <NextScript />
                    <Script
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=2696545edfb304a43ba5eeb9a00bb33c&libraries=services,clusterer&autoload=false"
          strategy="beforeInteractive"
        />
                </body>
            </Html>
        )
    }
}

export default MyDocument;