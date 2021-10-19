import ServiceHeaderBloc from "../components/blocs/service_page/serviceHeaderBloc";
import Layout from "../components/Layout";
import UsPictures from "../components/blocs/about/usPictures";
import AboutHeaderBloc from "../components/blocs/about/aboutHeaderBloc";
import AboutBodyBloc from "../components/blocs/about/aboutBodyBloc";
import Head from "next/head";

export default function APropos() {


    return (
        <Layout currentPage="nous" navbarStyle="background--blue">

            <Head>
                <title>Nous sommes une agence de passionés ! | Pokouweb, agence web</title>

                {/* done */}
                <meta name="description" content="Nos développeurs, concepteurs et analystes travaillent en étroite collaboration pour obtenir des résultats visuellement époustouflants et techniquement avancés qui engagent les utilisateurs." key="description"/>
                <meta property="og:type" content="article" key="type" />
                <link rel="canonical" href="https://www.pokouweb.fr/a-propos" key="url_canonical"/>
                <meta property="og:url" content="https://www.pokouweb.fr/a-propos" key="url"/>
                <meta property="og:title" content="Nous sommes une agence de passionés ! | Pokouweb, agence web" key="title" />
            </Head>


            <AboutHeaderBloc/>
            <AboutBodyBloc/>
            <UsPictures/>



        </Layout>
    )
}