import ServiceHeaderBloc from "../../components/blocs/service_page/serviceHeaderBloc";
import CustomServicesPopUp from "../../components/blocs/service_page/customServicesPopUp";
import UxBloc from "../../components/blocs/service_page/uxBloc";
import OurProcessBloc from "../../components/blocs/service_page/ourProcessBloc";
import CubeBloc from "../../components/blocs/service_page/cubeBloc";
import Layout from "../../components/Layout";
import EcommerceHeaderBloc from "../../components/blocs/service_ecommerce/ecommerceHeaderBloc";
import MainInfoBloc from "../../components/blocs/service_ecommerce/mainInfoBloc";


export default function Ecommerce() {

    return (
        <Layout currentPage="ecommerce" navbarStyle="background--yellow">
            <EcommerceHeaderBloc/>
            <MainInfoBloc/>






        </Layout>
    )
}