import Layout from "../../components/Layout"
import TrendCornerHeaderBloc from "../../components/blocs/projects_pages/headers_blocs/trendCornerHeaderBloc";
import TrendcornerContentBloc1 from "../../components/blocs/projects_pages/content_blocs/trendcornerContentBloc1";
import Head from "next/head";
import BackToProject from "../../components/backToProject";




export default function Trendcorner() {

    return (
        <Layout currentPage="trendcorner" navbarStyle="background--black">

            <Head>
                <title>TRENDCORNER | PokouWeb, agence web</title>
                <meta property="og:title" content="TRENDCORNER | PokouWeb, agence web" key="title" />

                <meta name="description" content="Découvrez TrendCorner, notre nouveau projet d'application qui vous permet de faire du trade de crypto monnaie !" key="description"/>

                <link rel="canonical" href="https://www.pokouweb.fr/travaux/trendcorner" key="url_canonical"/>
                <meta property="og:url" content="https://www.pokouweb.fr/travaux/trendcorner" key="url"/>

                <meta property="og:type" content="article" key="type" />
            </Head>


            <TrendCornerHeaderBloc/>
            <TrendcornerContentBloc1/>
            <BackToProject backgroundColor="trendCorner"/>





        </Layout>

    )
}

