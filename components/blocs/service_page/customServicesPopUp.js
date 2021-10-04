import {useInView} from "react-intersection-observer";
import FadeTranslateTopWhenVisible from "../../effects/FadeTranslateTopWhenVisible";
import style from '../../../styles/blocs/service_page/customServicesPopUp.module.scss'
import pop_font from '../../../public/popup_font.png'
import crea1 from '../../../public/illu_creation1.png'
import maintenance from '../../../public/illu_maint.png'
import refercenement from '../../../public/illu_refer.png'
import commerce from '../../../public/illu_commerce.png'
import shop from "../../../public/testshop.svg"
import page from '../../../public/testpage.svg'
import app from '../../../public/testapp.svg'
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

export default function CustomServicesPopUp() {




    return (
        <div className={style.custom__services_popup__container}>
            <div className={style.custom__services_popup}>

                    <div className={style.services_popup__content}>
                        <Link href="/services/sitesweb">
                            <div className={style.services_popup__item} >
                                <div className={style.background_animation}></div>
                                <div className={style.popup_images}>
                                    <Image src={page}/>
                                </div>
                                <h3>Création web</h3>
                                <p>Un bon site Web est bien plus qu'une carte de visite numérique.</p>
                                <div className={`${style.popup_more_info} `}>
                                    <span></span>
                                    <p>Voir plus</p>

                                </div>
                            </div>
                        </Link>



                        <Link href="/services/applicationsweb">
                            <div className={style.services_popup__item}>
                                <div className={style.background_animation}></div>
                                <div className={style.popup_images}>
                                    <Image src={app}/>
                                </div>
                                <h3>Applications Web</h3>
                                <p>Créez de meilleures affaires avec une application Web conviviale.</p>
                                <div className={`${style.popup_more_info} `}>
                                    <span></span>
                                    <p>Voir plus</p>

                                </div>
                            </div>
                        </Link>

                        <Link href="/services/ecommerce">

                            <div className={style.services_popup__item}>
                                <div className={style.background_animation}></div>
                                <div className={style.popup_images}>
                                    <Image src={shop}/>
                                </div>
                                <h3>Site E-Commerce</h3>
                                <p>Transformez vos revenus en ligne avec une solution moderne.</p>
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