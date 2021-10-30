import style from '../../../../styles/blocs/service_siteweb/sitewebHeaderBloc.module.scss'
import Image from "next/image";
import test_illu from '../../../../public/landing_illu.svg'
import medtandemMobile from '../../../../public/medtandem_mobile_mockup.png'
import Link from "next/link";
import onePalmBackground from "../../../../public/onepalm_background.png"
import SpeedFadeIn from "../../../effects/SpeedFadeIn";

export default function OnePalmSurfHeaderBloc() {

    return (

        <div className={ `${style.siteweb_header__container} ${style.project__onepalm__header}`}>
            <div className={style.header__background_image}>
                <Image height="1067" width="1913" priority={true} alt="One palm background" src="/pokouweb/onepalm_background_amhqkp_qur7aq.webp"/>
            </div>

            <SpeedFadeIn>
                <div className={style.siteweb_header}>
                    <div className={style.siteweb_header__left}>
                        <h1><mark>OnePalm Surf,</mark><br/> la vague <br/> pour <br/> passion</h1>
                        <p>OnePalm est une école de surf installée dans les Landes depuis une quinzaine d'années et un surf et un surf-shop. </p>
                        <Link  href="https://www.onepalm-surf.com/home-surf-shop/">
                            <a target="_blank">
                                Voir le site</a>
                        </Link>
                    </div>

                </div>
            </SpeedFadeIn>
        </div>

    )
}