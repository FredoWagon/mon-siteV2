import Layout from "../../components/Layout"
import TrendCornerHeaderBloc from "../../components/blocs/projects_pages/headers_blocs/trendCornerHeaderBloc";
import TrendcornerContentBloc1 from "../../components/blocs/projects_pages/content_blocs/trendcornerContentBloc1";




export default function Trendcorner() {

    return (
        <Layout currentPage="trendcorner" navbarStyle="background--black">
            <TrendCornerHeaderBloc/>
            <TrendcornerContentBloc1/>





        </Layout>

    )
}

