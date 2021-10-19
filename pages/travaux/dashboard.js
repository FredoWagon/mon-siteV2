import Layout from "../../components/Layout"
import style from "../../styles/blocs/projects_pages/headers_blocs/dashboardHeaderBloc.module.scss"

import Image from "next/image";
import dashboard_header from "../../public/dashboard_header.png"
import DashboardContentBloc1 from "../../components/blocs/projects_pages/content_blocs/dashboardContentBloc1";



export default function Dashboard() {

    return (
        <Layout currentPage="dashboard" navbarStyle="background--white">
            <div className={style.dashboard_header__background}>
                <Image layout={"fill"} priority={true} alt="Dashboard mockup" src="/pokouweb/dashboard_header_muz2kz_d2cm9s.webp"/>
            </div>


            <DashboardContentBloc1/>



        </Layout>

    )
}

