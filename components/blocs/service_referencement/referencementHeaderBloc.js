import style from '../../../styles/blocs/service_siteweb/sitewebHeaderBloc.module.scss'
import Image from "next/image";
import test_illu from '../../../public/landing_illu.svg'
import referencement_illustration from "../../../public/referencement_illustration.png"
import Link from "next/link";
import SpeedFadeIn from "../../effects/SpeedFadeIn";

export default function ReferencementHeaderBloc() {

    return (

        <div className={`${style.siteweb_header__container} ${style.blue_background} ${style.referencement_header}`}>
            <SpeedFadeIn customClass="custom_siteweb_header">
                <div className={style.siteweb_header}>
                    <div className={style.siteweb_header__left}>
                        <h1>Assurez votre visibilité dans les moteurs de recherche</h1>
                        <p>Avec le référencement, vous améliorez la trouvabilité de votre site et augmentez le nombre de visiteurs. Le référencement est la source de trafic la plus convertie pour la plupart des organisations et des entreprises.</p>

                        <Link href="/contact">
                            <a>
                                <p>Parlons-en !</p>
                            </a>
                        </Link>
                    </div>
                    <div className={style.siteweb_header__right}>
                        <Image priority={true} width="660" alt="Référencement site internet" height="466" src="/pokouweb/referencement_illustration_dq1zzb_orqgm0.webp"/>

                    </div>


                </div>
            </SpeedFadeIn>
        </div>

    )
}