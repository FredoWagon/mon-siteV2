import Layout from "../../components/Layout"
import ProjectHeaderBloc1 from "../../components/blocs/projects_pages/headers_blocs/projectHeaderBloc1";
import MedtandemContentBloc1 from "../../components/blocs/projects_pages/content_blocs/medtandemContentBloc1";
import MedtandemContentBloc2 from "../../components/blocs/projects_pages/content_blocs/medtandemContentBloc2";
import Head from "next/head";
import ItineraireContentBloc1 from "../../components/blocs/projects_pages/content_blocs/itineraireContentBloc1";
import ItineraireHeaderBloc from "../../components/blocs/projects_pages/headers_blocs/itineraireHeaderBloc";
import BackToProject from "../../components/backToProject";


export default function ItinerairesVignobles() {

    return (
        <Layout currentPage="itineraire" navbarStyle="background--white">

            <Head>
                <title>ITINERAIRES-VIGNOBLES | PokouWeb, agence web</title>
                <meta property="og:title" content="ITINERAIRES-VIGNOBLES | PokouWeb, agence web" key="title" />

                <meta name="description" content="ITINERAIRES-VIGNOBLES, un site qui vous aide à profitez des vignobles bordelais." key="description"/>

                <link rel="canonical" href="https://www.pokouweb.fr/travaux/itineraires-vignobles" key="url_canonical"/>
                <meta property="og:url" content="https://www.pokouweb.fr/travaux/itineraires-vignobles" key="url"/>

                <meta property="og:type" content="article" key="type" />
            </Head>

            <ItineraireHeaderBloc/>
            <ItineraireContentBloc1/>
            <BackToProject/>




        </Layout>

    )
}

