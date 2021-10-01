import ServiceHeaderBloc from "../components/blocs/service_page/serviceHeaderBloc";
import Layout from "../components/Layout";
import UsPictures from "../components/blocs/about/usPictures";
import AboutHeaderBloc from "../components/blocs/about/aboutHeaderBloc";
import AboutBodyBloc from "../components/blocs/about/aboutBodyBloc";

export default function About() {


    return (
        <Layout currentPage="nous" navbarStyle="background--blue">
            <AboutHeaderBloc/>
            <AboutBodyBloc/>
            <UsPictures/>



        </Layout>
    )
}