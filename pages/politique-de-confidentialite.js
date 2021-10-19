import Layout from "../components/Layout";

import ConfidentialiteContentBloc from "../components/blocs/confidentialiteContentBloc";
import Head from "next/head";


export default function PolitiqueDeConfidentialite() {

    return (
        <Layout currentPage="confidentialite" navbarStyle="background--green">

            <Head>
                <title>Politique de confidentialité | Pokouweb, agence web</title>


                <meta name="description" content="Nous sommes chargés de protéger votre vie privée. Cette politique de confidentialité explique comment nous traitons et utilisons les données collectées auprès des utilisateurs sur notre site Web." key="description"/>
                <meta property="og:type" content="article" key="type" />
                <link rel="canonical" href="https://www.pokouweb.fr/politique-de-confidentialite" key="url_canonical"/>
                <meta property="og:url" content="https://www.pokouweb.fr/politique-de-confidentialite" key="url"/>
                <meta property="og:title" content="Politique de confidentialité | Pokouweb, agence web" key="title" />
            </Head>


            <ConfidentialiteContentBloc/>






        </Layout>

    )
}