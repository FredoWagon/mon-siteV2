import Layout from "../components/Layout";
import ServiceHeaderBloc from "../components/blocs/service_page/serviceHeaderBloc";
import ServicesPopUp from "../components/blocs/index_page/servicesPopUp";
import UxBloc from "../components/blocs/service_page/uxBloc";
import CustomServicesPopUp from "../components/blocs/service_page/customServicesPopUp";
import OurProcessBloc from "../components/blocs/service_page/ourProcessBloc";
import CubeBloc from "../components/blocs/service_page/cubeBloc";


export default function Services() {

    return (
        <Layout currentPage="services" navbarStyle="background--red">
            {/* <ServiceHeaderBloc/> */}
            <CustomServicesPopUp/>
            <UxBloc/>
            <OurProcessBloc/>
            <CubeBloc/>



        </Layout>

    )
}