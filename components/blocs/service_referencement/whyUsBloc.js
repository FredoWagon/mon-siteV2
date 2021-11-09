import style from '../../../styles/blocs/service_referencement/whyUsBloc.module.scss'
import Image from "next/image";
import test_illu from '../../../public/landing_illu.svg'
import Link from "next/link";
import SpeedFadeIn from "../../effects/SpeedFadeIn";

export default function WhyUsBloc() {

    return (

        <div className={style.why_us_bloc__container}>
            <div className={style.why_us}>
                <div className={style.why_us__content}>
                    <h2>Pourquoi nous choisir comme partenaire SEO ?</h2>
                    <p>Notre assurons  votre visibilité numérique en restant toujours au courant des tendances du secteur et des changements d'algorithmes. Nous prenons toujours en compte la stratégie commerciale et les besoins uniques de nos clients lors de la création de stratégies en ligne efficaces.</p>
                    <h3>Nous croyons en :</h3>
                    <ul>
                        <li>Une stratégie de moteur de recherche pour soutenir vos objectifs commerciaux</li>
                        <li>Des solutions techniques sur mesure pour assurer une haute visibilité de votre site</li>
                        <li>Contenu optimisé pour répondre aux besoins de vos utilisateurs</li>
                    </ul>
                </div>
            

            </div>
        </div>

    )
}