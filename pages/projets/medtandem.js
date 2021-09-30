import Layout from "../../components/Layout"
import ProjectHeaderBloc1 from "../../components/blocs/projects_pages/headers_blocs/projectHeaderBloc1";
import MedtandemContentBloc1 from "../../components/blocs/projects_pages/content_blocs/medtandemContentBloc1";
import MedtandemContentBloc2 from "../../components/blocs/projects_pages/content_blocs/medtandemContentBloc2";


export default function Medtandem() {

    return (
        <Layout currentPage="services" navbarStyle="background--black">
            <ProjectHeaderBloc1/>
            <MedtandemContentBloc1/>
            <MedtandemContentBloc2/>



        </Layout>

    )
}

