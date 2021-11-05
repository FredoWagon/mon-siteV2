
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";
import IndexHeaderBloc from "../components/blocs/index_page/IndexHeaderBloc";

import BlueBLoc from "../components/blocs/index_page/blueBLoc";
import TheyTrustUs from "../components/blocs/index_page/theyTrustUs";
import WorkBloc from "../components/blocs/index_page/workBloc";
import OurTeam from "../components/blocs/index_page/ourTeam";
import ServicesPopUpIndex from "../components/blocs/index_page/servicesPopUpIndex";
import Head from "next/head";
import RollingMenu from "../components/blocs/index_page/rollingMenu";


export default function Home() {
    return (
        <Layout navbarStyle="background--white">
            <Head>
                {/* dynamic */}
                <title>Agence web à Rennes et Bordeaux : création site internet, application web, e-commerce, référencement | PokouWeb, agence web</title>
                <link rel="canonical" href="https://www.pokouweb.fr/" key="url_canonical"/>
                <meta name="description" content="
Nous aidons nos clients à réaliser leur potentiel en ligne en concevant et en développant des sites Web et des services numériques." key="description"/>
                <meta property="og:title" content="Agence web à Rennes et Bordeaux : création site internet, application web, e-commerce, référencement | PokouWeb, agence web" key="title" />
                <meta property="og:url" content="https://www.pokouweb.fr/" key="url"/>
                <meta property="og:type" content="website" key="type" />



            </Head>





            <IndexHeaderBloc/>

            <ServicesPopUpIndex/>
            <OurTeam/>
            <WorkBloc/>
            <RollingMenu/>

            <BlueBLoc/>








        </Layout>


)
}
