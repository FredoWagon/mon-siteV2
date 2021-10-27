import style from '../../../styles/blocs/service_maintenance/maintenanceContentBloc.module.scss'
import Image from "next/image";
import test_illu from '../../../public/landing_illu.svg'
import siteweb_illustration from "../../../public/website_illustration.png"
import Link from "next/link";
import SpeedFadeIn from "../../effects/SpeedFadeIn";

export default function MaintenanceContentBloc() {

    return (

        <div className={style.maintenance_content__container}>
            <div className={style.maintenance_content}>
                <div className={style.maintenance_intro_text}>
                    <p>La maintenance du service, l'hébergement et le développement à petite échelle sont sous la responsabilité de notre équipe Care. Cela permet une surveillance et un développement proactifs des services, des réponses rapides aux tickets d'assistance et des réactions rapides en cas de problèmes. Nous nous assurons que votre service Web est sûr et à jour à tout moment et qu'il suit les changements constants du monde en ligne.</p>
                </div>
                <div className={style.maintenance__menu}>
                    <div className={style.maintenance_menu__item}>
                        <h2>La sécurité passe avant tout.</h2>
                        <p>Nous protégeons vos données et installons toujours les dernières mises à jour sur votre site pour le protéger de toute attaque potentielle. Jusqu'à présent, personne n'a pu s'introduire dans un service maintenu par notre équipe.</p>
                    </div>
                    <div className={style.maintenance_menu__item}>
                        <h2>Sites Web ultra-rapides.</h2>
                        <p>Nous évaluons constamment l'état de votre site, en le maintenant stable et en bon fonctionnement. Après chaque ticket, nous demandons aux utilisateurs s'ils sont satisfaits de la manière dont les problèmes ont été résolus. </p>
                    </div>
                    <div className={style.maintenance_menu__item}>
                        <h2>N'attendez pas. Développer davantage.</h2>
                        <p>Si vous avez une idée que vous souhaitez mettre en œuvre, faites-le nous savoir et nous la transformerons en quelque chose de tangible. Le temps de réaction moyen est de 5 heures et le temps de résolution de 36 heures à compter de la demande – souvent encore plus rapide.</p>
                    </div>

                </div>
                <Link href="/nos-services">
                    <a>Retour aux services</a>
                </Link>

            </div>
        </div>

    )
}