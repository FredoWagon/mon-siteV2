
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";
import IndexHeaderBloc from "../components/blocs/index_page/IndexHeaderBloc";

import BlueBLoc from "../components/blocs/index_page/blueBLoc";
import TheyTrustUs from "../components/blocs/index_page/theyTrustUs";
import WorkBloc from "../components/blocs/index_page/workBloc";
import OurTeam from "../components/blocs/index_page/ourTeam";
import ServicesPopUpIndex from "../components/blocs/index_page/servicesPopUpIndex";
import Head from "next/head";


export default function Home() {
    return (
        <Layout navbarStyle="background--white">
            <Head>
                {/* dynamic */}
                <title>Agence web à Rennes et Bordeaux : création site internet, application web, e-commerce, référencement - Pokouweb</title>
                <link rel="canonical" href="https://www.pokouweb.fr/"/>
                <meta name="description" content="
Nous aidons nos clients à réaliser leur potentiel en ligne en concevant et en développant des sites Web et des services numériques."/>
                <meta property="og:title" content="Agence web à Rennes et Bordeaux : création site internet, application web, e-commerce, référencement - Pokouweb" key="title" />
                <meta property="og:url" content="https://www.pokouweb.fr/"/>
                <meta property="og:type" content="website" />
                {/* not dynamic */}
                <meta property="og:site_name" content="PokouWeb, agence web à Rennes et Bordeaux"/>
                <meta property="og:locale" content="fr_FR"/>














            </Head>





            <IndexHeaderBloc/>

            <ServicesPopUpIndex/>
            <OurTeam/>
            <WorkBloc/>
            <TheyTrustUs/>
            <BlueBLoc/>








        </Layout>


)
}
