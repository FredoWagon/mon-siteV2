
import Layout from "../../components/Layout";
import ReferencementHeaderBloc from "../../components/blocs/service_referencement/referencementHeaderBloc";
import WhatWeOfferBloc from "../../components/blocs/service_referencement/whatWeOfferBloc";
import WhyUsBloc from "../../components/blocs/service_referencement/whyUsBloc";
import ReferencementContactBloc from "../../components/blocs/service_referencement/referencementContactBloc";
import Head from "next/head";
import ConceptionContactBloc from "../../components/blocs/service_conception/conceptionContactBloc";
import BackToService from "../../components/backToService";


export default function Sitesweb() {

    return (
        <Layout currentPage="referencement" navbarStyle="background--blue">

            <Head>
                <title>Référencement | PokouWeb, agence web</title>
                <meta property="og:title" content="Référencement | PokouWeb, agence web" key="title" />

                <meta name="description" content="Nous assurons votre visibilité numérique en restant toujours au courant des tendances du secteur et des changements d'algorithmes." key="description"/>

                <link rel="canonical" href="https://www.pokouweb.fr/nos-services/referencement" key="url_canonical"/>
                <meta property="og:url" content="https://www.pokouweb.fr/nos-services/referencement" key="url"/>

                <meta property="og:type" content="article" key="type" />
            </Head>

            <ReferencementHeaderBloc/>
            <WhatWeOfferBloc/>
            <WhyUsBloc/>
            <ConceptionContactBloc/>
<BackToService/>





        </Layout>
    )
}