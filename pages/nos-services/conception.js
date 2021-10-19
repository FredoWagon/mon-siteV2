
import Layout from "../../components/Layout";
import ReferencementHeaderBloc from "../../components/blocs/service_referencement/referencementHeaderBloc";
import WhatWeOfferBloc from "../../components/blocs/service_referencement/whatWeOfferBloc";
import WhyUsBloc from "../../components/blocs/service_referencement/whyUsBloc";
import ReferencementContactBloc from "../../components/blocs/service_referencement/referencementContactBloc";
import ConceptionHeaderBloc from "../../components/blocs/service_conception/conceptionHeaderBloc";
import Head from "next/head";


export default function Conception() {

    return (
        <Layout currentPage="conception" navbarStyle="background--blue">

            <Head>
                <title>Design & Conception | PokouWeb, agence web</title>
                <meta property="og:title" content="Design & Conception | PokouWeb, agence web" key="title" />

                <meta name="description" content="Nous prenons un malin plaisir à concevoir et designer des sites qui raviront vos utilisateurs." key="description"/>

                <link rel="canonical" href="https://www.pokouweb.fr/nos-services/conception" key="url_canonical"/>
                <meta property="og:url" content="https://www.pokouweb.fr/nos-services/conception" key="url"/>

                <meta property="og:type" content="article" key="type" />
            </Head>

            <ConceptionHeaderBloc/>







        </Layout>
    )
}