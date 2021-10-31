import Layout from "../../components/Layout"
import style from "../../styles/blocs/projects_pages/headers_blocs/dashboardHeaderBloc.module.scss"

import Image from "next/image";
import dashboard_header from "../../public/dashboard_header.png"
import DashboardContentBloc1 from "../../components/blocs/projects_pages/content_blocs/dashboardContentBloc1";
import Head from "next/head";
import BackToProject from "../../components/backToProject";



export default function Dashboard() {

    return (
        <Layout currentPage="dashboard" navbarStyle="background--white">

            <Head>
                <title>DASHBOARD | PokouWeb, agence web</title>
                <meta property="og:title" content="DASHBOARD | PokouWeb, agence web" key="title" />

                <meta name="description" content="Découvrez le projet DASHBOARD par l'agence web Pokouweb !" key="description"/>

                <link rel="canonical" href="https://www.pokouweb.fr/travaux/dashboard" key="url_canonical"/>
                <meta property="og:url" content="https://www.pokouweb.fr/travaux/dashboard" key="url"/>

                <meta property="og:type" content="article" key="type" />
            </Head>

            <div className={style.dashboard_header__background}>
                <Image layout={"fill"} priority={true} alt="Dashboard mockup" src="/pokouweb/dashboard_header_muz2kz_d2cm9s.webp"/>
            </div>


            <DashboardContentBloc1/>
            <BackToProject/>



        </Layout>

    )
}

