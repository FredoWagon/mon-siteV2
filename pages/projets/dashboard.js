import Layout from "../../components/Layout"

import Image from "next/image";
import dashboard_header from "../../public/dashboard_header.png"
import DashboardContentBloc1 from "../../components/blocs/projects_pages/content_blocs/dashboardContentBloc1";



export default function Dashboard() {

    return (
        <Layout currentPage="dashboard" navbarStyle="background--white">
        <Image priority={true} placeholder={"blur"} src={dashboard_header}/>
            <DashboardContentBloc1/>



        </Layout>

    )
}

