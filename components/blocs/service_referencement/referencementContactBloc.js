import style from '../../../styles/blocs/service_referencement/referencementContactBloc.module.scss'
import ContactComponent from "../../ContactComponent";
import Link from "next/link";

export default function ReferencementContactBloc() {

    return (
        <div className={style.referencement_contact_bloc__container}>
            <div className={style.referencement_contact_bloc}>
                <ContactComponent/>
                <Link href="/services">
                    <a>Retour aux services</a>
                </Link>


            </div>
        </div>
    )
}