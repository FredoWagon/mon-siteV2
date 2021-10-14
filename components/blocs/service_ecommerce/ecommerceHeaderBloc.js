import style from '../../../styles/blocs/service_siteweb/sitewebHeaderBloc.module.scss'
import Image from "next/image";
import test_illu from '../../../public/landing_illu.svg'
import ecommerce_illustration from "../../../public/ecommerce_illustration.png"
import Link from "next/link";
import SpeedFadeIn from "../../effects/SpeedFadeIn";

export default function EcommerceHeaderBloc() {

    return (

        <div className={`${style.siteweb_header__container} ${style.yellow_background} ${style.ecommerce_header}`}>
            <SpeedFadeIn customClass="custom_siteweb_header">
                <div className={style.siteweb_header}>
                    <div className={style.siteweb_header__left}>
                        <h1>Nous vous aidons à vendre vos produits et services en ligne </h1>
                        <p>Nous concevons et mettons en œuvre des magasins de commerce électronique à petite échelle et complexes qui servent vos objectifs commerciaux uniques. Nos solutions sont conçues pour augmenter les ventes et la satisfaction des clients. Les vitrines sont toujours parfaitement intégrées à votre site et les parcours d'achat sont conçus pour créer des expériences d'achat agréables.</p>

                        <Link href="/services">
                            <a>
                                <p>Demandez une offre</p>
                            </a>
                        </Link>
                    </div>
                    <div className={style.siteweb_header__right}>
                        <Image priority={true} src={ecommerce_illustration}/>

                    </div>


                </div>
            </SpeedFadeIn>
        </div>

    )
}