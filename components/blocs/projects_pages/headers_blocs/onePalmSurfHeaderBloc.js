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
                <Image layout={"fixed"} priority={true} quality={100} src={onePalmBackground}/>

            </div>

            <SpeedFadeIn>
                <div className={style.siteweb_header}>
                    <div className={style.siteweb_header__left}>
                        <h1><mark>OnePalm Surf,</mark><br/> la vague <br/> pour <br/> passion</h1>
                        <p>OnePalm-surf est un surfshop et une école de surf.</p>
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