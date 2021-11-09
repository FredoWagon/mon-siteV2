import style from '../../../styles/blocs/service_siteweb/sitewebHeaderBloc.module.scss'
import Image from "next/image";
import test_illu from '../../../public/landing_illu.svg'
import developpement_illustration from '../../../public/developpement_illustration.png'
import Link from "next/link";
import SpeedFadeIn from "../../effects/SpeedFadeIn";

export default function DeveloppementHeaderBloc() {

    return (

        <div className={`${style.siteweb_header__container} ${style.green_background} ${style.developpement_header}`}>
            <SpeedFadeIn customClass="custom_webapp_header">
                <div className={style.siteweb_header}>
                    <div className={style.siteweb_header__left}>
                        <h1>Développement web</h1>
                        <p>La conception est la première partie du projet, mais dans la phase de développement, le service en ligne commence à être intégré dans un tout concret.</p>

                        <Link href="/contact">
                            <a>
                                <p>Parlons-en !</p>
                            </a>
                        </Link>
                    </div>
                    <div className={style.siteweb_header__right}>
                        <Image priority={true} width="660" alt="Developpement web" height="660" src="/pokouweb/developpement_illustration_vn1fce_pckezf.webp"/>
                    </div>


                </div>
            </SpeedFadeIn>
        </div>

    )
}