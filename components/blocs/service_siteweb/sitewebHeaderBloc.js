import style from '../../../styles/blocs/service_siteweb/sitewebHeaderBloc.module.scss'
import Image from "next/image";
import test_illu from '../../../public/landing_illu.svg'
import siteweb_illustration from "../../../public/website_illustration.png"
import Link from "next/link";
import SpeedFadeIn from "../../effects/SpeedFadeIn";

export default function SitewebHeaderBloc() {

    return (

        <div className={style.siteweb_header__container}>
            <SpeedFadeIn customClass="custom_siteweb_header">
            <div className={style.siteweb_header}>
                <div className={style.siteweb_header__left}>
                    <h1>Des sites Web époustouflants qui apportent de vrais résultats. </h1>
                    <p>Votre site Web est votre outil de marketing le plus puissant, et nous voulons vous aider à l'utiliser au maximum. Nous vous aiderons à créer une stratégie numérique et un plan de contenu efficaces, et nous offrons tout, de l'analyse Web et du référencement à la mise en œuvre technique et à la conception de contenu.</p>

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