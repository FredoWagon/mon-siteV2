import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from 'next/head'
import {useEffect} from "react";

import CookieModal from "./CookieModal";


export default function Layout(props) {


    useEffect( () => {

    })

    return (
        <>
            <Head>
                <title>Bonjour</title>
                <link rel="shortcut icon" href="/pokou_faviconv2.svg"/>

            </Head>








            <Navbar currentPage={props.currentPage} backgroundColor={props.navbarStyle}/>

            <main>{props.children}</main>

            <Footer currentPage={props.currentPage}/>
            <CookieModal/>
        </>
    )
}