
import Layout from "../components/Layout";

import ContactHeaderBloc from "../components/blocs/contact_page/contactHeaderBloc";
import Head from "next/head";


export default function Contact() {


    return (
        <Layout currentPage="contact" navbarStyle="background--white">

            <Head>
                <title>Contactez nous ! | PokouWeb, agence web</title>


                <meta name="description" content="Êtes-vous intéressé à travailler avec nous pour un projet ? Des questions ? Contactez-nous !" key="description"/>
                <meta property="og:type" content="article" key="type" />
                <link rel="canonical" href="https://www.pokouweb.fr/contact" key="url_canonical"/>
                <meta property="og:url" content="https://www.pokouweb.fr/contact" key="url"/>
                <meta property="og:title" content="Contactez nous ! | PokouWeb, agence web" key="title" />
            </Head>

            <ContactHeaderBloc/>





        </Layout>
    )
}