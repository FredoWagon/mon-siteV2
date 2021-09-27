import style from '../../../styles/blocs/service_developpement/developpementContactBloc.module.scss'
import ContactComponent from "../../ContactComponent";
import Link from "next/link";

export default function DeveloppementContactBloc() {

    return (
        <div className={style.developpement_contact__container}>
            <div className={style.developpement_contact}>
                <ContactComponent customTitle="Prendre contact"/>
                <Link href="/services">
                    <a>Retour aux services</a>
                </Link>


            </div>
        </div>
    )
}