import Layout from "../components/Layout";
import ServiceHeaderBloc from "../components/blocs/service_page/serviceHeaderBloc";
import ServicesPopUp from "../components/ServicesPopUp";
import UxBloc from "../components/blocs/service_page/uxBloc";
import CustomServicesPopUp from "../components/blocs/service_page/ServicesPopUpServicesPage";
import OurProcessBloc from "../components/blocs/service_page/ourProcessBloc";
import CubeBloc from "../components/blocs/service_page/cubeBloc";
import ServicesPopUpServicesPage from "../components/blocs/service_page/ServicesPopUpServicesPage";
import Head from "next/head";


export default function NosServices() {

    return (
        <Layout currentPage="services" navbarStyle="background--red">

            <Head>
                <title>Nos services - Site internet, Application web & E-commerce | PokouWeb, agence web</title>
                <meta property="og:title" content="Nos services - Site internet, Application web & E-commerce | PokouWeb, agence web" key="title" />

                <meta name="description" content="Nous créons des sites Web de grande qualité et des services numériques qui apportent de vrais résultats. Nous visons toujours la convivialité." key="description"/>

                <link rel="canonical" href="https://www.pokouweb.fr/nos-services" key="url_canonical"/>
                <meta property="og:url" content="https://www.pokouweb.fr/nos-services" key="url"/>

                <meta property="og:type" content="article" key="type" />
            </Head>



             <ServiceHeaderBloc/>
            <ServicesPopUpServicesPage/>
            <UxBloc/>
            <OurProcessBloc/>
            <CubeBloc/>



        </Layout>

    )
}