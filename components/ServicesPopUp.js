
import FadeTranslateTopWhenVisible from "../components/effects/FadeTranslateTopWhenVisible"
import style from '../styles/components/servicesPopUp.module.scss'
import test_icon_app from "../public/test_icon_app.svg"
import test_icon_shop from "../public/test_icon_shop.svg"
import test_icon_site from "../public/test_icon_site.svg"
import Image from "next/image";
import Link from "next/link";


export default function ServicesPopUp() {

    return (

        <div className={style.services_popup__container}>
            <div className={style.services_popup}>
                    <div className={style.services_popup__content}>
                        <Link href="/services/sitesweb">
                            <div className={`${style.popup_item__green} ${style.services_popup__item}`} >
                                <div className={style.services_popup__image}>
                                    <Image src={test_icon_site}/>

                                </div>

                                <div className={style.services_popup__title}>


                                    <h3>Création web
                                        <span className={ `${style.popup_underline__green} ${style.popup_underline}`}/></h3>

                                </div>
                                <p>Un bon site Web est bien plus qu'une carte de visite numérique.</p>
                                <div className={`${style.popup_more_info} `}>
                                    <span></span>
                                    <p>Voir plus</p>

                                </div>
                            </div>
                        </Link>


                        <Link href="/services/applicationsweb">
                            <div className={`${style.popup_item__blue} ${style.services_popup__item}`}>
                                <div className={style.services_popup__image}>
                                    <Image src={test_icon_app}/>

                                </div>
                                <div className={style.services_popup__title}>

                                    <h3>Applications Web
                                        <span className={`${style.popup_underline__blue} ${style.popup_underline}`}/></h3>
                                </div>

                                <p>Créez de meilleures affaires avec une application Web conviviale.</p>
                                <div className={`${style.popup_more_info} `}>
                                    <span></span>
                                    <p>Voir plus</p>

                                </div>
                            </div>
                        </Link>

                        <Link href="/services/ecommerce">

                            <div className={`${style.popup_item__yellow} ${style.services_popup__item}`}>
                                <div className={style.services_popup__image}>
                                    <Image src={test_icon_shop}/>

                                </div>
                                <div className={style.services_popup__title}>

                                    <h3>E-commerce
                                        <span className={`${style.popup_underline__yellow} ${style.popup_underline}`}/></h3>

                                </div>


                                <p>Révolutionnez votre chiffre d'affaires avec une solution ecommerce moderne.</p>
                                <div className={`${style.popup_more_info} `}>
                                    <span></span>
                                    <p>Voir plus</p>

                                </div>

                            </div>
                        </Link>


                    </div>
                <div>


                </div>
            </div>
        </div>
    )
}