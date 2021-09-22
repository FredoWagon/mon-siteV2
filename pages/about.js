import ServiceHeaderBloc from "../components/blocs/service_page/serviceHeaderBloc";
import Layout from "../components/Layout";
import UsPictures from "../components/blocs/about/usPictures";
import AboutHeaderBloc from "../components/blocs/about/aboutHeaderBloc";

export default function About() {


    return (
        <Layout currentPage="services" navbarStyle="background--blue">
            <AboutHeaderBloc/>
            <UsPictures/>



        </Layout>
    )
}