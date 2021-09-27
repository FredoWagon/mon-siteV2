import style from '../../../styles/blocs/service_siteweb/sitewebHeaderBloc.module.scss'
import Image from "next/image";
import test_illu from '../../../public/landing_illu.svg'
import Link from "next/link";
import SpeedFadeIn from "../../effects/SpeedFadeIn";

export default function WebappHeaderBloc() {

    return (

        <div className={`${style.siteweb_header__container} ${style.blue_background}`}>
            <SpeedFadeIn customClass="custom_webapp_header">
                <div className={style.siteweb_header}>
                    <div className={style.siteweb_header__left}>
                        <h1>Des applications de classe mondiale qui répondent aux besoins de l'utilisateur moderne</h1>
                        <p>Nos applications intuitives font passer votre entreprise au niveau supérieur en offrant aux utilisateurs une meilleure expérience. Nous nous efforçons de résoudre vos défis numériques en trouvant la solution et la technologie qui vous conviennent, qu'il s'agisse d'une application web ou, par exemple, d'un site hybride (PWA).</p>

                        <Link href="/services">
                            <a>
                                <p>Demandez une offre</p>
                            </a>
                        </Link>
                    </div>
                    <div className={style.siteweb_header__right}>
                        <Image src={test_illu}/>

                    </div>


                </div>
            </SpeedFadeIn>
        </div>

    )
}