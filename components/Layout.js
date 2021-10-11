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
                {/*google font*/}
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>

            </Head>








            <Navbar currentPage={props.currentPage} backgroundColor={props.navbarStyle}/>

            <main>{props.children}</main>

            <Footer currentPage={props.currentPage}/>
        </>
    )
}