
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";
import IndexHeaderBloc from "../components/blocs/index_page/IndexHeaderBloc";
import ServicesPopUp from "../components/blocs/index_page/servicesPopUp";
import BlueBLoc from "../components/blocs/index_page/blueBLoc";
import TheyTrustUs from "../components/blocs/index_page/theyTrustUs";
import WorkBloc from "../components/blocs/index_page/workBloc";
import OurTeam from "../components/blocs/index_page/ourTeam";


export default function Home() {
    return (
        <Layout currentPage="index" navbarStyle="background--white">



            <IndexHeaderBloc/>

            <ServicesPopUp/>
            <OurTeam/>
            <WorkBloc/>
            <TheyTrustUs/>
            <BlueBLoc/>








        </Layout>


    )
}
