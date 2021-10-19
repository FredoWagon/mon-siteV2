
import Layout from "../../components/Layout";
import ReferencementHeaderBloc from "../../components/blocs/service_referencement/referencementHeaderBloc";
import WhatWeOfferBloc from "../../components/blocs/service_referencement/whatWeOfferBloc";
import WhyUsBloc from "../../components/blocs/service_referencement/whyUsBloc";
import ReferencementContactBloc from "../../components/blocs/service_referencement/referencementContactBloc";
import Head from "next/head";


export default function Sitesweb() {

    return (
        <Layout currentPage="referencement" navbarStyle="background--blue">

            <Head>
                <title>Référencement | Pokouwebb, agence web</title>
                <meta property="og:title" content="Référencement | Pokouwebb, agence web" key="title" />

                <meta name="description" content="Notre équipe de référencement expérimentée assure votre visibilité numérique en restant toujours au courant des tendances du secteur et des changements d'algorithmes." key="description"/>

                <link rel="canonical" href="https://www.pokouweb.fr/nos-services/referencement" key="url_canonical"/>
                <meta property="og:url" content="https://www.pokouweb.fr/nos-services/referencement" key="url"/>

                <meta property="og:type" content="article" key="type" />
            </Head>

            <ReferencementHeaderBloc/>
            <WhatWeOfferBloc/>
            <WhyUsBloc/>
            <ReferencementContactBloc/>






        </Layout>
    )
}