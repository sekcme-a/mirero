import '../styles/bootstrap.min.css';
import '../styles/fontawesome.min.css';
import '../styles/animate.min.css';
import '../styles/flaticon.css';
import '../styles/custom/global.css'
import "swiper/css";
import "swiper/css/bundle";


import "styles/custom/loader.scss"
// Global Style
import '../styles/style.css';
import '../styles/responsive.css';
import 'styles/reset.css'

import App from 'next/app';
import Head from 'next/head';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';
import Script from "next/script"

import { UserDataProvider } from "context/userData";
import { DataProvider } from "context/data";

import AuthStateChanged from "hooks/AuthStateChanged";

export default class MyApp extends App {
    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }
    
    render () {
        const { Component, pageProps } = this.props

        return (
            <>
                <Head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
                    <link rel="canonical" href="https://miraero.org"></link>
                    <meta name="robots" content="index,follow"></meta>
                </Head>
  
                <UserDataProvider>
                    <DataProvider>
                        <AuthStateChanged>
                            <Component {...pageProps} />
                        </AuthStateChanged>
                    </DataProvider>
                </UserDataProvider>
                
                {/* Preloader */}
                <Loader loading={this.state.loading} />

                {/* Go Top Button */}
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </>
        );
    }
}