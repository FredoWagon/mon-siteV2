import style from '/styles/404.module.scss'
import {useEffect, useRef, useState} from "react";
import Link from "next/link";

export default function Custom404() {
    const [pageName, setPageName] = useState("");
    const titleAnimation = useRef(null);
    const imageAnimation = useRef(null);
    const textAnimation = useRef(null);
    const oupsText = useRef(null);

    useEffect(() => {
        const currentPage = window.location.pathname.replace("/", "")
        setPageName(currentPage)
        console.log(currentPage)
        animation();
    })



    const animation = () => {
        setTimeout(() => {
            imageAnimation.current.classList.add(`${style.image_animation}`)
        }, 50)
        setTimeout(() => {
            oupsText.current.classList.add(`${style.oups_animation}`)
        }, 900)
        setTimeout(() => {
            titleAnimation.current.classList.add(`${style.title_animation}`)
        }, 1300)
        setTimeout(() => {
            textAnimation.current.classList.add(`${style.texte_animation}`)
        }, 1500)
    }
    return (
        <div className={style.error__container}>
            <div className={style.error}>
                <div className={style.animation_box}>
                    <h1 ref={titleAnimation}><span>4</span><span>4</span></h1>
                    <div>

                    </div>

                    <div ref={imageAnimation}  className={style.oups_image_container}>
                        <div className={style.oups_image} >
                            <img  src="/pokou_logo.svg" alt="Pokouweb logo"/>
                            <div ref={oupsText} className={style.oups_text}>
                                <img src="/bulle.svg" alt="bulle db"/>
                                <p>Oups ..!</p>
                            </div>

                        </div >

                    </div>
                </div>
                <div ref={textAnimation} className={style.animation_texte}>
                    <p>La page <span>pokouweb.fr/</span><mark>{pageName}</mark> n'existe pas.</p>
                    <Link href="/">
                        <a>Retourner à l'accueil</a>
                    </Link>
                </div>



            </div>
        </div>

    )
}