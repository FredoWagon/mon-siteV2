import {useInView} from "react-intersection-observer";
import FadeTranslateTopWhenVisible from "../../effects/FadeTranslateTopWhenVisible";
import style from '../../../styles/blocs/index_page/ServicesPopUp.module.scss'
import pop_font from '../../../public/popup_font.png'
import crea1 from '../../../public/illu_creation1.png'
import maintenance from '../../../public/illu_maint.png'
import refercenement from '../../../public/illu_refer.png'
import testIllu from "../../../public/test_illu_app.png"
import testcommerce from "../../../public/test_ecommerce.png"
import test_illu_web from "../../../public/test_illu_web.png"
import testwebsite from "../../../public/test_website.png"
import test_icon_app from "../../../public/test_icon_app.svg"
import test_icon_shop from "../../../public/test_icon_shop.svg"
import test_icon_site from "../../../public/test_icon_site.svg"
import wepapp_illustration from "../../../public/webapp_illustration.png"
import test_illu from '../../../public/landing_illu.svg'
import shop from "../../../public/testshop.svg"
import page from '../../../public/testpage.svg'
import app from '../../../public/testapp.svg'
import commerce from '../../../public/illu_commerce.png'
import Image from "next/image";

import Link from "next/link";
import {useState} from "react";

export default function ServicesPopUp() {

    return (
        <div className={style.services_popup__container}>
            <div className={style.services_popup}>

                <FadeTranslateTopWhenVisible tresholdOption={1} animation="middle_mark_green">
                    <h2>Ce que nous faisons </h2>
                </FadeTranslateTopWhenVisible>
                <FadeTranslateTopWhenVisible tresholdOption={0} animation="slow">
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
                        <p>Un bon site Web est bien plus qu'une carte de visite numérique. <br/> Site internet, vitrine.</p>
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

                        <p>Créez de meilleures affaires avec une application Web conviviale. <br/>Application sur mesure, PWA</p>
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

                                <h3>Ecommerce
                                    <span className={`${style.popup_underline__yellow} ${style.popup_underline}`}/></h3>

                            </div>


                            <p>Révolutionnez votre chiffre d'affaires avec une solution e-commerce moderne.</p>
                            <div className={`${style.popup_more_info} `}>
                                <span></span>
                                <p>Voir plus</p>

                            </div>

                        </div>
                    </Link>


                </div>
                </FadeTranslateTopWhenVisible>
                <div>


                </div>
            </div>
        </div>
    )
}