import style from '../../../styles/blocs/service_technologies/technologieHeaderBloc.module.scss'
import Image from "next/image";
import test_illu from '../../../public/landing_illu.svg'
import siteweb_illustration from "../../../public/website_illustration.png"
import Link from "next/link";
import SpeedFadeIn from "../../effects/SpeedFadeIn";

export default function TechnologieHeaderBloc() {

    return (

        <div className={`${style.yellow_background} ${style.siteweb_header__container }`}>
            <SpeedFadeIn customClass="custom_siteweb_header">
                <div className={style.siteweb_header}>
                    <div className={style.siteweb_header__left}>
                        <h1>Des technologies modernes qui répondent à vos objectifs futur.</h1>
                        <p>Le choix de la technologie est déterminant sur l'avenir d'une solution web et nous pensons que votre projet mérite les outils les mieux adaptés. Les fonctionnalités, la performance, le budget sont autant de facteurs qui vont déterminer le choix d'un panel d'outils optimaux. </p>
                        <Link href="/contact">
                            <a>
                                <p>Parlons-en !</p>
                            </a>
                        </Link>
                    </div>
                    <div className={style.siteweb_header__right}>
                        <Image priority={true} width="660" alt="Création de site web" height="660" src="/pokouweb/abstrakt-design-133_t0rtty_oijnby.webp"/>

                    </div>


                </div>
            </SpeedFadeIn>
        </div>

    )
}