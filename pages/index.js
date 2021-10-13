
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";
import IndexHeaderBloc from "../components/blocs/index_page/IndexHeaderBloc";

import BlueBLoc from "../components/blocs/index_page/blueBLoc";
import TheyTrustUs from "../components/blocs/index_page/theyTrustUs";
import WorkBloc from "../components/blocs/index_page/workBloc";
import OurTeam from "../components/blocs/index_page/ourTeam";
import ServicesPopUpIndex from "../components/blocs/index_page/servicesPopUpIndex";


export default function Home() {
    return (
        <Layout navbarStyle="background--white">



            <IndexHeaderBloc/>

            <ServicesPopUpIndex/>
            <OurTeam/>
            <WorkBloc/>
            <TheyTrustUs/>
            <BlueBLoc/>








        </Layout>


    )
}
