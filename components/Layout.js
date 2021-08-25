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
                <link rel="shortcut icon" href="/logo.svg"/>
                {/*google font*/}
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap"
                    rel="stylesheet"/>

            </Head>
            <Navbar backgroundColor={props.navbarStyle}/>
            <main>{props.children}</main>
            <Footer/>
        </>
    )
}