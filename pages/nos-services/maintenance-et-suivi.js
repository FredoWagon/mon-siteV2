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
import MaintenanceHeaderBloc from "../../components/blocs/service_maintenance/maintenanceHeaderBloc";
import MaintenanceContentBloc from "../../components/blocs/service_maintenance/maintenanceContentBloc";

export default function MaintenanceEtSuivi() {

    return (
        <Layout currentPage="maintenance" navbarStyle="background--green">

            <Head>
                <title>Maintenance et suivi | PokouWeb, agence web</title>
                <meta property="og:title" content="Maintenance et suivi | PokouWeb, agence web" key="title" />

                <meta name="description" content="Nous ne vous laissons pas seuls après le lancement, la maintenance et le suivi de votre activité nous intéresse." key="description"/>

                <link rel="canonical" href="https://www.pokouweb.fr/nos-services/maintenance-et-suivi" key="url_canonical"/>
                <meta property="og:url" content="https://www.pokouweb.fr/nos-services/maintenance-et-suivi" key="url"/>

                <meta property="og:type" content="article" key="type" />
            </Head>

            <MaintenanceHeaderBloc/>
            <MaintenanceContentBloc/>











        </Layout>
    )
}