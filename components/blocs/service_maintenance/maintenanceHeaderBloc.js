import style from '../../../styles/blocs/service_maintenance/maintenanceHeaderBloc.module.scss'
import Image from "next/image";
import test_illu from '../../../public/landing_illu.svg'
import siteweb_illustration from "../../../public/website_illustration.png"
import Link from "next/link";
import SpeedFadeIn from "../../effects/SpeedFadeIn";

export default function MaintenanceHeaderBloc() {

    return (

        <div className={`${style.green_background} ${style.siteweb_header__container }`}>
            <SpeedFadeIn customClass="custom_siteweb_header">
                <div className={style.siteweb_header}>
                    <div className={style.siteweb_header__left}>
                        <h1>Nous ne vous laissons pas seuls après le lancement.</h1>
                        <p>
                            La mise en service d'un produit n'est qu'une étape - le maintenir est un marathon. Un site web n'est jamais un projet ponctuel. Votre site ou service doit constamment s'améliorer et suivre les changements constants du monde en ligne.</p>
                        <Link href="/contact">
                            <a>
                                <p>Besoin d'assistance ?</p>
                            </a>
                        </Link>
                    </div>
                    <div className={style.siteweb_header__right}>
                        <Image priority={true} width="660" alt="Création de site web" height="660" src="/pokouweb/ux-indonesia-2NDWFiD0UMM-unsplash_rxqrky_z9wuv8_pmddmk_r5mkcb.webp"/>

                    </div>


                </div>
            </SpeedFadeIn>
        </div>

    )
}