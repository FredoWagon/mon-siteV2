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
                        <h1>Design créatif</h1>
                        <p>Le produit final de la conception numérique peut être un simple site Web - c'est ce que vous avez encore aujourd'hui. Le résultat final peut également être plus expérimental, comme un jeu, une application Web ou quelque chose entre les deux. Cela peut aussi être quelque chose de très concret, comme une exposition d'informations dans une université, une bibliothèque ou un musée.</p>

                        <p>Nous aimons toutes sortes de conception numérique et sommes passionnés par la combinaison de technologies intéressantes et de créativité avec les besoins des utilisateurs.</p>
                        <Link href="/services">
                            <a>
                                <p>Demandez une offre</p>
                            </a>
                        </Link>
                    </div>
                    <div className={style.siteweb_header__right}>
                        <Image priority={true} src={conception_illustration}/>

                    </div>


                </div>
            </SpeedFadeIn>
        </div>

    )
}