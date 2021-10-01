import style from "../../../styles/blocs/contact_merci/merciBloc.module.scss"
import Image from "next/image";
import merciBackground from '../../../public/merci_background.jpg'
import navbarStyle from "../../../styles/effects/navbarTranslateOnScroll.module.scss"
import {useEffect} from "react";
import Link from 'next/link';

export default function MerciBloc() {
    useEffect(() => {
        document.body.style.backgroundColor="black"
        document.body.classList.remove(`disapear`)
        const navBar = document.querySelector("#navBar_effect");
        navBar.classList.add(navbarStyle.navbar_translate)
        setTimeout(() => {
            navBar.classList.remove(navbarStyle.navbar_translate)
        },1500)
    })

    return (
        <div  className={style.merci__container}>
            <div id="merci_anchor"  className={style.merci}>

                <div  className={style.merci__content}>
                    <h1>Nous avons reçu votre message!</h1>
                    <p>Merci de nous avoir contacté! Nous vous répondrons sous peu.</p>
                    <Link href="/">
                        <a>Aller à la page d'acceuil</a>
                    </Link>
                </div>

            </div>

            <div className={style.merci_image}>
                <Image priority={true} layout="fill" objectFit="cover" objectPosition="75%" src={merciBackground}/>
            </div>


        </div>
    )
}