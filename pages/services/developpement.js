
import Layout from "../../components/Layout";
import WebappHeaderBloc from "../../components/blocs/service_webap/webappHeaderBloc";
import WebappMainInfo from "../../components/blocs/service_webap/webappMainInfo";
import DeveloppementHeaderBloc from "../../components/blocs/service_developpement/developpementHeaderBloc";
import DeveloppementMainInfo from "../../components/blocs/service_developpement/developpementMainInfo";
import DeveloppementContactBloc from "../../components/blocs/service_developpement/developpementContactBloc";


export default function Developpement() {

    return (
        <Layout currentPage="developpement" navbarStyle="background--green">

            <DeveloppementHeaderBloc/>
            <DeveloppementMainInfo/>
            <DeveloppementContactBloc/>





        </Layout>
    )
}