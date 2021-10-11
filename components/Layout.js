import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from 'next/head'
import {useEffect} from "react";


export default function Layout(props) {

    useEffect( () => {

    })

    return (
        <>
            <Head>
                <title>Bonjour</title>
                <link rel="shortcut icon" href="/pokou_favicon.svg"/>

            </Head>








            <Navbar currentPage={props.currentPage} backgroundColor={props.navbarStyle}/>

            <main>{props.children}</main>

            <Footer currentPage={props.currentPage}/>
        </>
    )
}