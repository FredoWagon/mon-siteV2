import style from '../../../styles/blocs/service_siteweb/sitewebHeaderBloc.module.scss'
import Image from "next/image";
import test_illu from '../../../public/landing_illu.svg'
import Link from "next/link";
import collectif_illustration from "../../../public/collectif_illustration.png"
import SpeedFadeIn from "../../effects/SpeedFadeIn";

export default function WebappHeaderBloc() {

    return (

        <div className={`${style.siteweb_header__container} ${style.about__header}`}>
            <SpeedFadeIn customClass="custom_about_header">
                <div className={style.siteweb_header}>
                    <div className={style.siteweb_header__left}>
                        <h1>Esprits numériques, cœurs humains.</h1>
                        <p>Nous sommes développeurs, concepteurs et analystes. Nous sommes ouverts, curieux et affamés. Nous sommes queer, hétéro et explorateurs. Nous sommes des cyclistes, des joueurs et des boulangers. Et nous sommes tellement plus.</p>
                    </div>
                    <div className={style.siteweb_header__right}>
                        <Image priority={true} width="660" alt="A propos - Pokou web" height="660" src="/pokouweb/collectif_illustration_cmzgib_kmopnd.webp"/>
                    </div>
                </div>
            </SpeedFadeIn>
        </div>

    )
}