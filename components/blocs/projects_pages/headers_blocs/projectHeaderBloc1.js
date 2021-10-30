import style from '../../../../styles/blocs/service_siteweb/sitewebHeaderBloc.module.scss'
import Image from "next/image";
import test_illu from '../../../../public/landing_illu.svg'
import medtandemMobile from '../../../../public/medtandem_mobile_mockup.png'
import Link from "next/link";
import SpeedFadeIn from "../../../effects/SpeedFadeIn";

export default function ProjectHeaderBloc1() {

    return (

        <div className={ `${style.siteweb_header__container} ${style.medtandem_header}`}>
            <SpeedFadeIn customClass="custom_siteweb_header">
                <div className={style.siteweb_header}>
                    <div className={style.siteweb_header__left}>
                        <h1>Medtandem, pionnier du <br/> e-learning médical  </h1>
                        <p>Medtandem propose du matériel d'apprentissage en ligne et des cours en présentiel sur le thème de l'échographie pour les professionnels de santé. Il propose également du mentorat et un large éventail de séminaire en ligne.</p>
                        <p>La nouvelle version de MedTandem est un site Web moderne et élégant qui stimule les ventes de l'entreprise, élève son profil et sert efficacement ses groupes cibles.</p>
                        <div className={style.link_div}>
                            <Link  href="#">
                                <a >En cours de livraison</a>
                            </Link>
                        </div>

                    </div>
                    <div className={ `${style.siteweb_header__right} ${style.custom_medtandem_project}`}>
                        <Image priority={true} objectFit={"contain"} objectPosition={"top"} layout={"fill"} alt="Medtandem Mobile" src="/pokouweb/medtandem_mobile_mockup_syoksq_qhvzbk.webp"/>
                    </div>
                </div>
            </SpeedFadeIn>
        </div>

    )
}