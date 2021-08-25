
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";
import IndexHeaderBloc from "../components/blocs/index_page/IndexHeaderBloc";
import ServicesPopUp from "../components/blocs/index_page/servicesPopUp";


export default function Home() {
    return (
        <Layout>
            <div className={styles.container}>
                <IndexHeaderBloc/>
                <ServicesPopUp/>






            </div>
        </Layout>


)
}
