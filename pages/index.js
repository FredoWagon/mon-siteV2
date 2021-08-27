
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";
import IndexHeaderBloc from "../components/blocs/index_page/IndexHeaderBloc";
import ServicesPopUp from "../components/blocs/index_page/servicesPopUp";


export default function Home() {
    return (
        <Layout currentPage="index" navbarStyle="background--white">

            {/* <ServicesPopUp/>
            */}
                <IndexHeaderBloc/>







        </Layout>


)
}
