import {useInView} from "react-intersection-observer";
import FadeTranslateTopWhenVisible from "../../effects/FadeTranslateTopWhenVisible";
import style from '../../../styles/blocs/index_page/ServicesPopUp.module.scss'
import pop_font from '../../../public/popup_font.png'
import crea1 from '../../../public/illu_creation1.png'
import maintenance from '../../../public/illu_maint.png'
import refercenement from '../../../public/illu_refer.png'
import commerce from '../../../public/illu_commerce.png'
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

export default function ServicesPopUp() {




    return (
        <div className={style.services_popup__container}>
            <div className={style.services_popup}>

                <FadeTranslateTopWhenVisible tresholdOption={1} animation="middle_mark_saumon">
                    <h2>Ce que nous <mark>faisons</mark> </h2>
                </FadeTranslateTopWhenVisible>
                <FadeTranslateTopWhenVisible tresholdOption={0} animation="slow">
                <div className={style.services_popup__content}>
                    <Link href="/services/sitesweb">
                    <div className={style.services_popup__item} >
                        <div className={style.background_animation}></div>
                        <div className={style.popup_images}>
                            <Image src={crea1}/>
                        </div>
                        <h3>Création web</h3>
                        <p>Un bon site Web est bien plus qu'une carte de visite numérique.</p>
                        <div className={`${style.popup_more_info} `}>
                            <span></span>
                            <p>Voir plus</p>

                        </div>
                    </div>
                    </Link>

                    <Link href="/">

                    <div className={style.services_popup__item}>
                        <div className={style.background_animation}></div>
                        <div className={style.popup_images}>
                            <Image src={commerce}/>
                        </div>
                        <h3>Site E-Commerce</h3>
                        <p>Transformez vos revenus en ligne avec une solution moderne.</p>
                        <div className={`${style.popup_more_info} `}>
                            <span></span>
                            <p>Voir plus</p>

                        </div>
                    </div>
                    </Link>

                    <Link href="/">
                    <div className={style.services_popup__item}>
                        <div className={style.background_animation}></div>
                        <div className={style.popup_images}>
                            <Image src={refercenement}/>
                        </div>
                        <h3>Référencement</h3>
                        <p>Pérennisez votre entreprise avec une application Web conviviale.</p>
                        <div className={`${style.popup_more_info} `}>
                            <span></span>
                            <p>Voir plus</p>

                        </div>
                    </div>
                    </Link>

                    <Link href="/">
                    <div className={style.services_popup__item}>
                        <div className={style.background_animation}></div>
                        <div className={style.popup_images}>
                            <Image src={maintenance}/>
                        </div>
                        <h3>Maintenance</h3>
                        <p>Pérennisez votre entreprise avec une application Web conviviale.</p>
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