import Layout from "../../components/Layout"
import OnePalmSurfHeaderBloc from "../../components/blocs/projects_pages/headers_blocs/onePalmSurfHeaderBloc";
import DashboardContentBloc1 from "../../components/blocs/projects_pages/content_blocs/dashboardContentBloc1";
import TrendcornerContentBloc1 from "../../components/blocs/projects_pages/content_blocs/trendcornerContentBloc1";
import OnePalmContentBloc from "../../components/blocs/projects_pages/content_blocs/onePalmContentBloc";
import Head from "next/head";



export default function OnepalmSurf() {

    return (
        <Layout currentPage="onepalm" navbarStyle="background--white">

            <Head>
                <title>ONEPALM-SURF | PokouWeb, agence web</title>
                <meta property="og:title" content="ONEPALM-SURF  | PokouWeb, agence web" key="title" />

                <meta name="description" content="Découvrez OnePalm-surf, une institution, une école, une e-boutique.. par PokouWeb." key="description"/>

                <link rel="canonical" href="https://www.pokouweb.fr/travaux/onepalm-surf" key="url_canonical"/>
                <meta property="og:url" content="https://www.pokouweb.fr/travaux/onepalm-surf" key="url"/>

                <meta property="og:type" content="article" key="type" />
            </Head>

            <OnePalmSurfHeaderBloc/>
            <OnePalmContentBloc/>



        </Layout>

    )
}

