import ServiceHeaderBloc from "../../components/blocs/service_page/serviceHeaderBloc";
import CustomServicesPopUp from "../../components/blocs/service_page/ServicesPopUpServicesPage";
import UxBloc from "../../components/blocs/service_page/uxBloc";
import OurProcessBloc from "../../components/blocs/service_page/ourProcessBloc";
import CubeBloc from "../../components/blocs/service_page/cubeBloc";
import Layout from "../../components/Layout";
import EcommerceHeaderBloc from "../../components/blocs/service_ecommerce/ecommerceHeaderBloc";
import MainInfoBloc from "../../components/blocs/service_ecommerce/mainInfoBloc";
import Head from "next/head";


export default function ECommerce() {

    return (
        <Layout currentPage="ecommerce" navbarStyle="background--yellow">

            <Head>
                <title>Création de site e-commerce | PokouWeb, agence web</title>
                <meta property="og:title" content="Création de site e-commerce | PokouWeb, agence web" key="title" />

                <meta name="description" content="Nous concevons et mettons en œuvre des sites de e-commerce qui servent vos objectifs commerciaux uniques." key="description"/>

                <link rel="canonical" href="https://www.pokouweb.fr/nos-services/e-commerce" key="url_canonical"/>
                <meta property="og:url" content="https://www.pokouweb.fr/nos-services/e-commerce" key="url"/>

                <meta property="og:type" content="article" key="type" />
            </Head>

            <EcommerceHeaderBloc/>
            <MainInfoBloc/>






        </Layout>
    )
}