import {useEffect} from "react";
import Layout from "../../components/Layout";
import MerciBloc from "../../components/blocs/contact_merci/MerciBloc";



export default function  Merci() {



    return (
        <Layout currentPage="merci" navbarStyle="background--white">
            <MerciBloc/>
        </Layout>
    )
}


