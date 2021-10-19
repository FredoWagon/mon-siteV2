import Layout from "../../components/Layout"
import ProjectHeaderBloc1 from "../../components/blocs/projects_pages/headers_blocs/projectHeaderBloc1";
import MedtandemContentBloc1 from "../../components/blocs/projects_pages/content_blocs/medtandemContentBloc1";
import MedtandemContentBloc2 from "../../components/blocs/projects_pages/content_blocs/medtandemContentBloc2";
import Head from "next/head";


export default function Medtandem() {

    return (
        <Layout currentPage="medtandem" navbarStyle="background--black">

            <Head>
                <title>MEDTANDEM | PokouWeb, agence web</title>
                <meta property="og:title" content="MEDTANDEM | PokouWeb, agence web" key="title" />

                <meta name="description" content="Découvrez MEDTANDEM, un site de formation en ligne sur le thème de l'échographie épaulé par l'agence PokouWeb  " key="description"/>

                <link rel="canonical" href="https://www.pokouweb.fr/travaux/medtandem" key="url_canonical"/>
                <meta property="og:url" content="https://www.pokouweb.fr/travaux/medtandem" key="url"/>

                <meta property="og:type" content="article" key="type" />
            </Head>

            <ProjectHeaderBloc1/>
            <MedtandemContentBloc1/>
            <MedtandemContentBloc2/>



        </Layout>

    )
}

