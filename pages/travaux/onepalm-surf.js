import Layout from "../../components/Layout"
import OnePalmSurfHeaderBloc from "../../components/blocs/projects_pages/headers_blocs/onePalmSurfHeaderBloc";
import DashboardContentBloc1 from "../../components/blocs/projects_pages/content_blocs/dashboardContentBloc1";
import TrendcornerContentBloc1 from "../../components/blocs/projects_pages/content_blocs/trendcornerContentBloc1";
import OnePalmContentBloc from "../../components/blocs/projects_pages/content_blocs/onePalmContentBloc";



export default function OnepalmSurf() {

    return (
        <Layout currentPage="onepalm" navbarStyle="background--white">
            <OnePalmSurfHeaderBloc/>
            <OnePalmContentBloc/>



        </Layout>

    )
}

