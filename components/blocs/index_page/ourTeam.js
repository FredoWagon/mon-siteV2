import style from '../../../styles/blocs/index_page/OurTeam.module.scss'
import {InView, useInView} from "react-intersection-observer";
import collectif from '../../../public/collectif.jpg'
import Image from 'next/image'
import {useEffect, useRef, useState, useContext} from "react";
import Link from 'next/link'
import {useAppContext} from "../../../context/state";
import teamPic from "../../../public/team.jpg"
import collectif_illustration from "../../../public/collectif_illustration.png"
import patch1 from "../../../public/patchwork1.jpg"
import patch2 from "../../../public/patchwork2.jpg"
import patch3 from "../../../public/patchwork3.jpg"
import patch4 from "../../../public/patchwork4.jpg"
import test_illu from "../../../public/illu_test.png"
import FadeTranslateTopWhenVisible from "../../effects/FadeTranslateTopWhenVisible";


export default function OurTeam() {

    const {ourTeamAnimationDone, setState} = useAppContext();



    const ourRight = useRef();
    const ourLeft = useRef();

    const absoluteTitle = useRef();
    const relativeTitle = useRef();
    const titleComponent = useRef();
    const collectifTitle = useRef();
    const titleText = useRef();

    // Element images patchwork
    const advantageContainer = useRef();
    const patchContainer = useRef();
    const agencyImageContainer = useRef();

    // Les advantages items
    const advantageItem1 = useRef();
    const advantageItem2 = useRef();
    const advantageItem3 = useRef();
    const advantageItem4 = useRef();




    // Hauteur du browser
    const [viewPortHeight, setViewPortHeight] = useState();
    // Position du menu
    const [animationDistance, setAnimationDistance] = useState()
    //position de l'animation du titre
    const [titleAnimationPosition, setTitleAnimationPosition] = useState()



    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
        triggerOnce: true
    });



    //menu
    const menuList = useRef();
    const projectItem = useRef();
    const interlocuteurItem = useRef();
    const devisItem = useRef();
    const surMesureItem = useRef();








    useEffect(() => {
        const viewPortHeight = window.innerHeight
        const viewPortWitth = window.innerWidth
        setViewPortHeight(viewPortHeight)
        setAnimationDistance(0.35)


        if (viewPortWitth > 719) {
            setTitleAnimationPosition(100)
        } else {
            setTitleAnimationPosition(190)
        }




        window.addEventListener("scroll", handleScrollEvents)
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener("scroll", handleScrollEvents)
            window.removeEventListener('resize', handleResize)
        }
    },[viewPortHeight])

    useEffect(() => {
        const body = document.body



        const scrollBarWidth = window.innerWidth - body.clientWidth
        if (inView && !ourTeamAnimationDone ) {
            body.classList.add('stop_scrolling')
            body.style.paddingRight = `${scrollBarWidth}px`
            const elementTopPosition = entry.target.offsetTop + 53
            setTimeout(() => {
                window.scrollTo({top: elementTopPosition, behavior: 'smooth'})
                setTimeout(() => {
                    body.classList.remove('stop_scrolling')
                    body.style.paddingRight = ""
                }, 1500)
            }, 1000)
            setState(true)
        }
    }, [inView])



    const titleAnimation = () => {
        const absoluteTitlePosition = absoluteTitle.current.getBoundingClientRect().bottom
        const viewPortMiddleHeight = viewPortHeight / 2 - titleAnimationPosition

        if ( (absoluteTitlePosition < viewPortMiddleHeight) && !ourTeamAnimationDone ) {
            absoluteTitle.current.classList.add(`${style.end_animation}`)
            relativeTitle.current.classList.add(`${style.agence_title_animation}`)

            setTimeout(() => {
                titleComponent.current.classList.add(`${style.end_animation}`)
            }, 100)
            setTimeout(() => {
                collectifTitle.current.classList.add(`${style.collectif_title__animation}`)
                titleText.current.classList.add(`${style.text_animation}`)
            }, 1000)
            setTimeout(() => {
                agencyImageContainer.current.classList.remove(`${style.agency_image__before_animation}`)
            }, 1200)
            setTimeout(() => {

                advantageContainer.current.classList.remove(`${style.our_team__advantages__before_animation}`)
            }, 1500)
            setTimeout(() => {
                advantageItem1.current.classList.remove(`${style.advantage_item__before_animation}`)
            },1600)
            setTimeout(() => {
                advantageItem2.current.classList.remove(`${style.advantage_item__before_animation}`)
            },1750)
            setTimeout(() => {
                advantageItem3.current.classList.remove(`${style.advantage_item__before_animation}`)
            },1900)
            setTimeout(() => {
                advantageItem4.current.classList.remove(`${style.advantage_item__before_animation}`)
            },2050)

        } else if (ourTeamAnimationDone) {
            absoluteTitle.current.classList.add(`${style.end_animation}`)
            relativeTitle.current.classList.add(`${style.agence_title_animation}`)
            titleComponent.current.classList.add(`${style.end_animation}`)
            collectifTitle.current.classList.add(`${style.collectif_title__animation}`)
            titleText.current.classList.add(`${style.text_animation}`)
            agencyImageContainer.current.classList.remove(`${style.agency_image__before_animation}`)
            advantageContainer.current.classList.remove(`${style.our_team__advantages__before_animation}`)
            advantageItem1.current.classList.remove(`${style.advantage_item__before_animation}`)
            advantageItem2.current.classList.remove(`${style.advantage_item__before_animation}`)
            advantageItem3.current.classList.remove(`${style.advantage_item__before_animation}`)
            advantageItem4.current.classList.remove(`${style.advantage_item__before_animation}`)

        }







    }

    const handleResize = () => {
        const viewPortHeight = window.innerHeight
        setViewPortHeight(viewPortHeight)
        const viewPortWitth = window.innerWidth
        if (viewPortWitth > 719) {
            setTitleAnimationPosition(100)
        } else {
            setTitleAnimationPosition(190)
        }

    }

    const handleScrollEvents = () => {
        const viewPortWitth = window.innerWidth
        if (viewPortWitth > 719) {
            toggleFixedLeftContent();
            changeMenuOnScroll();
        }
        titleAnimation();





    }


// Fixer le menu sur le scroll
    const toggleFixedLeftContent = () => {
        const viewPortDistance = viewPortHeight * animationDistance
        const menuHeight = ourLeft.current.offsetHeight
        const menuLeftPosition = ourLeft.current.getBoundingClientRect().left;
        const ourRightDomRect = ourRight.current.getBoundingClientRect();
        if (ourRightDomRect.top < viewPortDistance && ourRightDomRect.bottom > (viewPortDistance + menuHeight )  ) {
            ourLeft.current.style.top = `${(viewPortDistance)}px`
            ourLeft.current.style.left = `${(menuLeftPosition)}px`
            ourLeft.current.classList.add(`${style.our_team__fixed}`)
            ourLeft.current.classList.remove(`${style.our_team__bottom}`)
        } else if (ourRightDomRect.bottom < (viewPortDistance + menuHeight ) && ourRightDomRect.top > viewPortDistance ) {
            ourLeft.current.style.top = `${(viewPortDistance )}px`
            ourLeft.current.style.left = `${(menuLeftPosition)}px`
            ourLeft.current.classList.add(`${style.our_team__fixed}`)
            ourLeft.current.classList.remove(`${style.our_team__bottom}`)
        } else if (ourRightDomRect.bottom < (viewPortDistance + menuHeight )) {
            ourLeft.current.classList.remove(`${style.our_team__fixed}`)
            ourLeft.current.classList.add(`${style.our_team__bottom}`)
        } else {
            ourLeft.current.classList.remove(`${style.our_team__fixed}`)
            ourLeft.current.classList.remove(`${style.our_team__bottom}`)
        }
    }

    // Animation du texte du menu en fonction du scroll
    const changeMenuOnScroll = () => {
        const itemList = ourRight.current.children

        const viewPortDistance = viewPortHeight * animationDistance
        Object.values(itemList).forEach((element) => {
            if (element.getBoundingClientRect().top < viewPortDistance + 50 && element.getBoundingClientRect().bottom > viewPortDistance) {
                menuLinkAnimation(element.dataset.item);
            }
        })
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
        const elementPosition = currentTopWindowPosition + elementTopDomRect - viewPortDistance + 10;

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

    const hoverPatchImage = (e) => {


        const element = e.target

        element.style.zIndex = "6"
        element.style.zIndex = "10"
        element.style.transition="transform 0.5s ease, filter 0.5s ease"
        element.style.transform= "scale(1.2)"
        element.style.filter="grayscale(0)"
    }
    const leaverPatchImage = (e) => {
        const element = e.target
        element.style.zIndex = ""
        element.style.transition="transform 0.5s ease, filter 0.5s ease"
        element.style.filter=""
        element.style.transform= ""
        setTimeout(() => {
            element.style.transition=""
        }, 500)
    }






    return (

        <div ref={ref} className={`  ${style.our_team_container} ${!inView && !ourTeamAnimationDone ? style.our_team_container__animation : ""}  `}>


            <div className={style.our_team}>


                <div className={style.our_team__agency}>
                    <div className={style.our_team__agency_title}>
                        <span ref={absoluteTitle} className={`${style.title__animation_item} ${!inView && !ourTeamAnimationDone ? style.start_animation : ""}  `}>Une agence</span>
                        <h2 ref={titleComponent}>
                            <span ref={relativeTitle} className={ style.agence_title}>Une agence,</span>
                            <span ref={collectifTitle} className={style.collectif_title}>un collectif</span>
                        </h2>
                        <div className={style.agency_title__text} ref={titleText}>
                            <p ><mark>Pokou web</mark> est une une agence de communication,
                                un collectif d’indépendants,
                                un studio de production digitale et
                                une coopérative de talents !</p>
                        </div>

                    </div>
                    <div ref={agencyImageContainer} className={ `${style.our_team__agency_image} ${style.agency_image__before_animation}`}>
                        <div ref={patchContainer} className={style.patchwork_image}>
                            <Image height="482" lazyBoundary="500px" width="482" alt="Notre équipe - Pokou web" src="/pokouweb/collectif_illustration_cmzgib_vhrqrw.webp"/>
                        </div>
                    </div>
                </div>

                <div ref={advantageContainer} className={ `${style.our_team__advantages} ${style.our_team__advantages__before_animation}`}>
                    <h3>Les avantages d'un collectif de freelance ?</h3>
                    <div className={style.advantage_container}>
                        <div ref={advantageItem1} className={`${style.advantage_item__before_animation} ${style.advantage_item}`}>
                            <h4>Le tarif</h4>
                            <p>Nos tarifs sont moins élevés que ceux d'une agence "classique", du fait de nos charges réduite et de l'inexistance de frais de structure.</p>
                        </div>
                        <div ref={advantageItem2}  className={`${style.advantage_item__before_animation} ${style.advantage_item}`}>
                            <h4>Moins contraignant</h4>
                            <p>Travailler avec des freelances requiert moins de formalités et un engagement inférieur, cela nous permet de répondre plus aisément à des missions ponctuelles ou à de petits projets. </p>
                        </div>
                        <div ref={advantageItem3}  className={`${style.advantage_item__before_animation} ${style.advantage_item}`}>
                            <h4>Plus d'engagement</h4>
                            <p>Par nature un freelance profite d'une liberté et d'une flexibilité accru. Chacun de nos collaborateurs </p>
                        </div>
                        <div  ref={advantageItem4} className={`${style.advantage_item__before_animation} ${style.advantage_item}`}>
                            <h4>Ouvert aux petits projets</h4>
                            <p>Nous sommes en mesure de répondre à des missions ponctuelles ou des petits projets.</p>
                        </div>

                    </div>
                </div>






                <div className={style.our_team__steps_container}>
                    <FadeTranslateTopWhenVisible tresholdOption={0} animation="middle">
                        <h3 className={style.mobile__step_title}>Un processus <br/> simple</h3>
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
                                    <h4 data-menu="3">Un seul devis</h4>
                                </li>
                                <li onClick={scrollToElement} data-menu="4">
                                    <h4 data-menu="4">Une équipe sur mesure</h4>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={style.our_team__right}>
                        <div ref={ourRight} className={style.our_team__content}>

                            <div ref={projectItem} data-item="1" className={style.scrolling_item}>
                                <FadeTranslateTopWhenVisible tresholdOption={1} animation="slow">
                                    <h4>Un projet !</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, dicta distinctio dolor dolorum eos error ipsam maxime nesciunt nostrum officiis quidem tempora temporibus tenetur ut vero, voluptas voluptatum! Consequuntur, vero.</p>
                                </FadeTranslateTopWhenVisible>
                            </div>


                            <div ref={interlocuteurItem} data-item="2" className={style.scrolling_item}>
                                <FadeTranslateTopWhenVisible tresholdOption={1} animation="slow">
                                    <h4>Un interlocuteur</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque blanditiis cupiditate illum magni modi perspiciatis quibusdam ratione repudiandae veritatis. Aperiam ducimus eaque eveniet maiores vero. Corporis cum repudiandae unde.</p>
                                </FadeTranslateTopWhenVisible>
                            </div>


                            <div ref={devisItem} data-item="3" className={style.scrolling_item}>
                                <FadeTranslateTopWhenVisible tresholdOption={1} animation="slow">
                                    <h4>Un devis !</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda, ducimus expedita harum illum officia qui sed voluptas. Accusamus accusantium aliquam architecto, eos hic magnam nulla perspiciatis sint veniam voluptatibus?</p>
                                </FadeTranslateTopWhenVisible>
                            </div>


                            <div ref={surMesureItem} data-item="4" className={style.scrolling_item}>
                                <FadeTranslateTopWhenVisible tresholdOption={1} animation="slow">
                                    <h4>Une equipe !</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolor ea laudantium omnis quaerat. Commodi, est, numquam. Accusantium, facere id laboriosam minima molestias, numquam omnis, possimus quam quos soluta tempora!</p>
                                </FadeTranslateTopWhenVisible>
                            </div>


                        </div>
                    </div>
                </div>







            </div>



        </div>

    )
}