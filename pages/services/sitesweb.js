import ServiceHeaderBloc from "../../components/blocs/service_page/serviceHeaderBloc";
import CustomServicesPopUp from "../../components/blocs/service_page/ServicesPopUpServicesPage";
import UxBloc from "../../components/blocs/service_page/uxBloc";
import OurProcessBloc from "../../components/blocs/service_page/ourProcessBloc";
import CubeBloc from "../../components/blocs/service_page/cubeBloc";
import Layout from "../../components/Layout";
import SitewebHeaderBloc from "../../components/blocs/service_siteweb/sitewebHeaderBloc";
import StaticToAppBloc from "../../components/blocs/service_siteweb/staticToAppBloc";

export default function Sitesweb() {

    return (
        <Layout currentPage="creationweb" navbarStyle="background--green">
            <SitewebHeaderBloc/>
            <StaticToAppBloc/>





        </Layout>
    )
}