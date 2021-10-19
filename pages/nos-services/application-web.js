
import Layout from "../../components/Layout";
import WebappHeaderBloc from "../../components/blocs/service_webap/webappHeaderBloc";
import WebappMainInfo from "../../components/blocs/service_webap/webappMainInfo";
import Head from "next/head";


export default function ApplicationWeb() {

    return (
        <Layout currentPage="applicationweb" navbarStyle="background--blue">

            <Head>
                <title>Création d'application métier | Pokouwebb, agence web</title>
                <meta property="og:title" content="Création d'application métier | Pokouwebb, agence web" key="title" />

                <meta name="description" content="Nos applications intuitives font passer votre entreprise au niveau supérieur en offrant aux utilisateurs une meilleure expérience." key="description"/>

                <link rel="canonical" href="https://www.pokouweb.fr/nos-services/application-web" key="url_canonical"/>
                <meta property="og:url" content="https://www.pokouweb.fr/nos-services/application-web" key="url"/>

                <meta property="og:type" content="article" key="type" />
            </Head>

            <WebappHeaderBloc/>
            <WebappMainInfo/>




        </Layout>
    )
}