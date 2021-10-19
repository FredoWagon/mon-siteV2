import ServiceHeaderBloc from "../../components/blocs/service_page/serviceHeaderBloc";
import CustomServicesPopUp from "../../components/blocs/service_page/ServicesPopUpServicesPage";
import UxBloc from "../../components/blocs/service_page/uxBloc";
import OurProcessBloc from "../../components/blocs/service_page/ourProcessBloc";
import CubeBloc from "../../components/blocs/service_page/cubeBloc";
import Layout from "../../components/Layout";
import SitewebHeaderBloc from "../../components/blocs/service_siteweb/sitewebHeaderBloc";
import StaticToAppBloc from "../../components/blocs/service_siteweb/staticToAppBloc";
import Head from "next/head";

export default function SiteWeb() {

    return (
        <Layout currentPage="creationweb" navbarStyle="background--green">

            <Head>
                <title>Création de site internet | Pokouwebb, agence web</title>
                <meta property="og:title" content="Création de site internet | Pokouwebb, agence web" key="title" />

                <meta name="description" content="Votre site Web est votre outil de marketing le plus puissant, et nous voulons vous aider à l'utiliser au maximum." key="description"/>

                <link rel="canonical" href="https://www.pokouweb.fr/nos-services/site-web" key="url_canonical"/>
                <meta property="og:url" content="https://www.pokouweb.fr/nos-services/site-web" key="url"/>

                <meta property="og:type" content="article" key="type" />
            </Head>


            <SitewebHeaderBloc/>
            <StaticToAppBloc/>





        </Layout>
    )
}