import {useInView} from "react-intersection-observer";
import FadeTranslateTopWhenVisible from "../../effects/FadeTranslateTopWhenVisible";
import style from "../../../styles/blocs/index_page/servicesPopUpIndex.module.scss"

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
import ServicesPopUp from "../../ServicesPopUp";

export default function ServicesPopUpIndex() {

    return (
        <FadeTranslateTopWhenVisible tresholdOption={0} animation="middle_mark_green">
            <div className={style.servicesPopUpIndex__title}>
                <h2>Ce que nous faisons </h2>
            </div>
            <FadeTranslateTopWhenVisible tresholdOption={0} animation="slow">
            <ServicesPopUp/>
            </FadeTranslateTopWhenVisible>
        </FadeTranslateTopWhenVisible>
    )
}