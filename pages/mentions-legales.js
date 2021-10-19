import Layout from "../components/Layout";


import MentionsContentBloc from "../components/blocs/mentionsContentBloc";
import Head from "next/head";


export default function MentionsLegales() {

    return (
        <Layout currentPage="legale" navbarStyle="background--blue">

            <Head>
                <title>Mentions légales | Pokouweb, agence web</title>
                <meta property="og:title" content="Mentions légales | Pokouweb, agence web" key="title" />

                <meta name="description" content="Retrouvez ici les mentions légales de notre agence web Pokouweb." key="description"/>

                <link rel="canonical" href="https://www.pokouweb.fr/mentions-legales" key="url_canonical"/>
                <meta property="og:url" content="https://www.pokouweb.fr/mentions-legales" key="url"/>

                <meta property="og:type" content="article" key="type" />
            </Head>

            <MentionsContentBloc/>






        </Layout>

    )
}