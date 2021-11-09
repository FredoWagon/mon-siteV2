import style from '../../../styles/blocs/service_siteweb/sitewebHeaderBloc.module.scss'
import Image from "next/image";
import test_illu from '../../../public/landing_illu.svg'
import conception_illustration from "../../../public/conception_illustration.png"
import Link from "next/link";
import SpeedFadeIn from "../../effects/SpeedFadeIn";

export default function ConceptionHeaderBloc() {

    return (

        <div className={`${style.siteweb_header__container} ${style.blue_background} ${style.conception_header}`}>
            <SpeedFadeIn customClass="custom_siteweb_header">
                <div className={style.siteweb_header}>
                    <div className={style.siteweb_header__left}>
                        <h1>Design et conception numérique</h1>
                        <p>Nous aimons toutes sortes de conception numérique et sommes passionnés par la combinaison de la technologies et de la créativité au service des besoins des utilisateurs.</p>
                        <p>Le produit final de la conception numérique peut être un simple site vitrine - comme celui ci, il peut également être plus expérimental, comme un jeu, une application Web ou quelque chose entre les deux.</p>
                        <Link href="/contact">
                            <a>
                                <p>Parlons-en !</p>
                            </a>
                        </Link>
                    </div>
                    <div className={style.siteweb_header__right}>
                        <Image priority={true} width="660" alt="Conception web" height="660" src="/pokouweb/conception_illustration_fmej5a_d7apo5.webp"/>
                    </div>


                </div>
            </SpeedFadeIn>
        </div>

    )
}