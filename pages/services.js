import Layout from "../components/Layout";
import ServiceHeaderBloc from "../components/blocs/service_page/serviceHeaderBloc";
import ServicesPopUp from "../components/ServicesPopUp";
import UxBloc from "../components/blocs/service_page/uxBloc";
import CustomServicesPopUp from "../components/blocs/service_page/ServicesPopUpServicesPage";
import OurProcessBloc from "../components/blocs/service_page/ourProcessBloc";
import CubeBloc from "../components/blocs/service_page/cubeBloc";
import ServicesPopUpServicesPage from "../components/blocs/service_page/ServicesPopUpServicesPage";


export default function Services() {

    return (
        <Layout currentPage="services" navbarStyle="background--red">
             <ServiceHeaderBloc/>
            <ServicesPopUpServicesPage/>
            <UxBloc/>
            <OurProcessBloc/>
            <CubeBloc/>



        </Layout>

    )
}