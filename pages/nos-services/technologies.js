import ServiceHeaderBloc from "../../components/blocs/service_page/serviceHeaderBloc";
import CustomServicesPopUp from "../../components/blocs/service_page/ServicesPopUpServicesPage";
import UxBloc from "../../components/blocs/service_page/uxBloc";
import OurProcessBloc from "../../components/blocs/service_page/ourProcessBloc";
import CubeBloc from "../../components/blocs/service_page/cubeBloc";
import Layout from "../../components/Layout";
import SitewebHeaderBloc from "../../components/blocs/service_siteweb/sitewebHeaderBloc";
import StaticToAppBloc from "../../components/blocs/service_siteweb/staticToAppBloc";
import Head from "next/head";
import TechnologieHeaderBloc from "../../components/blocs/service_technologies/technologieHeaderBloc";
import TechnologieContentBloc from "../../components/blocs/service_technologies/technologieContentBloc";
import TechnoContactComponent from "../../components/blocs/service_technologies/technoContactComponent";
import BackToService from "../../components/backToService";

export default function Technologies() {

    return (
        <Layout currentPage="technologie" navbarStyle="background--yellow">

            <Head>
                <title>Nos technologies | PokouWeb, agence web</title>
                <meta property="og:title" content="Nos technologies  | PokouWeb, agence web" key="title" />

                <meta name="description" content="Nous maitrisons un large éventail de technologies moderne afin de répondre au mieux à vos besoin numérique." key="description"/>

                <link rel="canonical" href="https://www.pokouweb.fr/nos-services/technologies" key="url_canonical"/>
                <meta property="og:url" content="https://www.pokouweb.fr/nos-services/technologies" key="url"/>

                <meta property="og:type" content="article" key="type" />
            </Head>

            <TechnologieHeaderBloc/>
            <TechnologieContentBloc/>
            <TechnoContactComponent/>
            <BackToService/>










        </Layout>
    )
}