
import Layout from "../../components/Layout";
import WebappHeaderBloc from "../../components/blocs/service_webap/webappHeaderBloc";
import WebappMainInfo from "../../components/blocs/service_webap/webappMainInfo";


export default function Applicationsweb() {

    return (
        <Layout currentPage="services" navbarStyle="background--blue">

            <WebappHeaderBloc/>
            <WebappMainInfo/>




        </Layout>
    )
}