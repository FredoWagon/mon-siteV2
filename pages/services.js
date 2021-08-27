import Layout from "../components/Layout";
import ServiceHeaderBloc from "../components/blocs/service_page/serviceHeaderBloc";


export default function Services() {

    return (
        <Layout currentPage="services" navbarStyle="background--red">
            <ServiceHeaderBloc/>



        </Layout>

    )
}