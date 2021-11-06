import style from '../../../styles/blocs/index_page/rollingMenuBloc.module.scss'
import Link from "next/link";
import Image from 'next/image';
import illuBlue from '../../../public/illu_blue_bloc.png'
import avancer_illustration from "../../../public/avancer_illustration.png"
import illuBlue_arabica from '../../../public/illu_blue_bloc_arabica.png'
import {useEffect, useRef, useState, useContext} from "react";
import FadeTranslateTopWhenVisible from "../../effects/FadeTranslateTopWhenVisible";



export default function RollingMenu() {

    const ourRight = useRef();
    const ourLeft = useRef();

    //menu
    const menuList = useRef();
    const projectItem = useRef();
    const interlocuteurItem = useRef();
    const devisItem = useRef();
    const surMesureItem = useRef();
    // Position du menu
    const [animationDistance, setAnimationDistance] = useState()

    // Hauteur du browser
    const [viewPortHeight, setViewPortHeight] = useState();


    useEffect(() => {
        const viewPortHeightValue = window.innerHeight
        const viewPortWitth = window.innerWidth
        setViewPortHeight(viewPortHeightValue)
        setAnimationDistance(0.25)

        window.addEventListener("scroll", handleScrollEvents)
        return () => {
            window.removeEventListener("scroll", handleScrollEvents)
        }
    })



    // Animation du texte du menu en fonction du scroll
    const changeMenuOnScroll = () => {
        const itemList = ourRight.current.children


        const viewPortDistance = viewPortHeight * animationDistance
        Object.values(itemList).forEach((element) => {
            if (element.getBoundingClientRect().top < viewPortDistance + 50 && element.getBoundingClientRect().bottom > viewPortDistance) {
                menuLinkAnimation(element.dataset.item);
                element.classList.add(`${style.active_scrolling_item}`)
            } else {
                element.classList.remove(`${style.active_scrolling_item}`)
            }
        })
    }



    const handleScrollEvents = () => {
        const viewPortWitth = window.innerWidth
        if (viewPortWitth > 719) {
            toggleFixedLeftContent();
            changeMenuOnScroll();
        }





    }

    // Fixer le menu sur le scroll
    const toggleFixedLeftContent = () => {
        const viewPortDistance = viewPortHeight * animationDistance
        const menuHeight = ourLeft.current.offsetHeight
        const menuLeftPosition = ourLeft.current.getBoundingClientRect().left;
        const ourRightDomRect = ourRight.current.getBoundingClientRect();


        if (ourRightDomRect.top -100 <= viewPortDistance && ourRightDomRect.bottom > (viewPortDistance + menuHeight )  ) {
            ourLeft.current.style.top = `${(viewPortDistance)}px`
            ourLeft.current.style.left = `${(menuLeftPosition)}px`
            ourLeft.current.classList.add(`${style.our_team__fixed}`)
            ourLeft.current.classList.remove(`${style.our_team__bottom}`)
        } else if (ourRightDomRect.bottom < (viewPortDistance  + menuHeight ) && ourRightDomRect.top > viewPortDistance ) {
            ourLeft.current.style.top = `${(viewPortDistance )}px`
            ourLeft.current.style.left = `${(menuLeftPosition)}px`
            ourLeft.current.classList.add(`${style.our_team__fixed}`)
            ourLeft.current.classList.remove(`${style.our_team__bottom}`)
        } else if (ourRightDomRect.bottom <= (viewPortDistance + menuHeight  )) {

            ourLeft.current.classList.remove(`${style.our_team__fixed}`)
            ourLeft.current.classList.add(`${style.our_team__bottom}`)
        } else {

            ourLeft.current.classList.remove(`${style.our_team__fixed}`)
            ourLeft.current.classList.remove(`${style.our_team__bottom}`)
        }
    }





    // Logique des ancres sur click du menu
    const scrollToElement = (event) => {

        const viewPortDistance = viewPortHeight * animationDistance
        const items = {
            1: projectItem.current,
            2: interlocuteurItem.current,
            3: devisItem.current,
            4: surMesureItem.current
        }
        const scrollIndex = event.target.dataset.menu
        const element = items[scrollIndex]
        const elementTopDomRect = element.getBoundingClientRect().top;
        const currentTopWindowPosition = window.scrollY;
        const elementPosition = currentTopWindowPosition + elementTopDomRect - 260 ;


        window.scrollTo({top: elementPosition, behavior: 'smooth'})

        menuLinkAnimation(scrollIndex)
    }

    // Animation du texte du menu
    const menuLinkAnimation = (menuIndex) => {


        const index = menuIndex
        const menuElement = menuList.current.children
        Object.values(menuElement).forEach((element) => {
            if (element.dataset.menu === index) {
                element.classList.add(`${style.active_step}`)
            } else {
                element.classList.remove(`${style.active_step}`)
            }
        })

    }


    return (
        <div className={style.our_team__steps}>


            <div className={style.our_team__steps_container}>
                <div className={style.steps_mobile__image_bottom}>
                    <Image  lazyBoundary="500px" layout={"fill"} objectFit={"contain"} alt="Fleurs et ombrelle" src="/pokouweb/FlowerUmbrella_nmo39i_fhahou.webp"/>
                </div>

                <FadeTranslateTopWhenVisible tresholdOption={0} animation="middle">
                    <h2 className={style.mobile__step_title}>Une démarche <br/> <mark>simple</mark> </h2>
                    <div className={style.steps_mobile__image_top}>
                            <Image  lazyBoundary="500px" layout={"fill"} objectFit={"contain"} alt="Fleurs et ombrelle" src="/pokouweb/FlowerUmbrella_nmo39i_fhahou.webp"/>
                    </div>

                </FadeTranslateTopWhenVisible>

                <div className={style.our_team__left}>

                    <div ref={ourLeft}  className={style.our_team__menu_container}>
                        <ul ref={menuList}>
                            <li onClick={scrollToElement} data-menu="1" className={style.active_step}>
                                <h4 data-menu="1">Un projet</h4>
                            </li>
                            <li onClick={scrollToElement} data-menu="2">
                                <h4 data-menu="2">Un interlocuteur unique</h4>
                            </li>
                            <li onClick={scrollToElement} data-menu="3">
                                <h4 data-menu="3">Une seule proposition</h4>
                            </li>
                            <li onClick={scrollToElement} data-menu="4" >
                                <h4 data-menu="4">Une équipe sur mesure</h4>
                            </li>
                        </ul>
                        <div className={style.our_team__steps__image_container}>
                            <div className={style.our_team__steps__image}>
                                <Image  lazyBoundary="500px" layout={"fill"} objectFit={"contain"} alt="Fleurs et ombrelle" src="/pokouweb/FlowerUmbrella_nmo39i_fhahou.webp"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.our_team__right}>
                    <div ref={ourRight} className={style.our_team__content}>

                        <div ref={projectItem} data-item="1" className={ ` ${style.scrolling_item} ${style.scrolling_item__first}`}>
                            <FadeTranslateTopWhenVisible tresholdOption={1} animation="slow">
                                <h4>Un projet</h4>
                                <p>Vous souhaitez créer une application web ? Faire un site vitrine pour votre entreprise, ou un site marchand ? Effectuer des améliorations sur votre site existant ? Vous vous posez des questions sur la technologie la plus adaptée à votre besoin ? Nous pouvons vous aider à construire votre projet.</p>
                            </FadeTranslateTopWhenVisible>
                        </div>


                        <div ref={interlocuteurItem} data-item="2" className={style.scrolling_item}>
                            <FadeTranslateTopWhenVisible tresholdOption={1} animation="slow">
                                <h4>Un interlocuteur unique</h4>
                                <p>N'hésitez pas à nous contacter, vous serez mis en contact avec un des membres du collectif le plus à même de répondre à votre demande. Si par la suite nous sommes ammenés à travailler ensemble cet interloculeur sera responsable de votre projet.</p>
                            </FadeTranslateTopWhenVisible>
                        </div>


                        <div ref={devisItem} data-item="3" className={style.scrolling_item}>
                            <FadeTranslateTopWhenVisible tresholdOption={1} animation="slow">
                                <h4>Une seule proposition</h4>
                                <p>Une fois que nous avons défini ensemble les besoins, nous vous ferons une proposition détaillée, précisant chaque étape de la réalisation dans un délai précis et en cohérence de votre budget.  </p>
                            </FadeTranslateTopWhenVisible>
                        </div>


                        <div ref={surMesureItem} data-item="4" className={`${style.last_step_item} ${style.scrolling_item}`}>
                            <FadeTranslateTopWhenVisible tresholdOption={1} animation="slow">
                                <h4>Une equipe</h4>
                                <p>Si le projet nécéssite plus d'un intervenant, nous constituerons une équipe sur mesure forte des différentes compétences des membres de notre collectif afin de mener à bien votre projet.</p>
                            </FadeTranslateTopWhenVisible>
                        </div>


                    </div>
                </div>
            </div>

        </div>


    )
}