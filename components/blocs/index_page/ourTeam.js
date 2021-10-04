import style from '../../../styles/blocs/index_page/OurTeam.module.scss'
import {InView, useInView} from "react-intersection-observer";
import collectif from '../../../public/collectif.jpg'
import Image from 'next/image'
import {useEffect, useRef, useState, useContext} from "react";
import Link from 'next/link'
import {useAppContext} from "../../../context/state";


export default function OurTeam() {

    const {ourTeamAnimationDone, setState} = useAppContext();

    const ourRight = useRef();
    const ourLeft = useRef();

    const absoluteTitle = useRef();
    const relativeTitle = useRef();
    const titleComponent = useRef();
    const collectifTitle = useRef();
    const titleText = useRef();




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
            console.log('je me demonte')
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
            const elementTopPosition = entry.target.offsetTop - 100
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

        if ( (absoluteTitlePosition < viewPortMiddleHeight) && !ourTeamAnimationDone) {
            absoluteTitle.current.classList.add(`${style.end_animation}`)
            relativeTitle.current.classList.add(`${style.agence_title_animation}`)

            setTimeout(() => {
                titleComponent.current.classList.add(`${style.end_animation}`)
            }, 100)
            setTimeout(() => {
                collectifTitle.current.classList.add(`${style.collectif_title__animation}`)
                titleText.current.classList.add(`${style.text_animation}`)
            }, 1000)

        } else if (ourTeamAnimationDone) {
            absoluteTitle.current.classList.add(`${style.end_animation}`)
            relativeTitle.current.classList.add(`${style.agence_title_animation}`)
            titleComponent.current.classList.add(`${style.end_animation}`)
            titleText.current.classList.add(`${style.text_animation}`)
            setTimeout(() => {
                titleComponent.current.classList.add(`${style.end_animation}`)
            }, 100)
            setTimeout(() => {
                collectifTitle.current.classList.add(`${style.collectif_title__animation}`)
                titleText.current.classList.add(`${style.text_animation}`)
            }, 1000)
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
                                <p ref={titleText}><mark>Pokou web</mark> est une une agence de communication,
                                    un collectif d’indépendants,
                                    un studio de production digitale et
                                    une coopérative de talents !</p>


                            </div>

                        </div>






                        <div className={style.our_team__steps_container}>
                            <div className={style.our_team__left}>
                                <div ref={ourLeft}  className={style.our_team__menu_container}>
                                    <ul ref={menuList}>
                                        <li onClick={scrollToElement} data-menu="1" className={style.active_step}>
                                            <h3 data-menu="1">Un projet</h3>
                                        </li>
                                        <li onClick={scrollToElement} data-menu="2">
                                        <h3 data-menu="2">Un interlocuteur unique</h3>
                                        </li>
                                        <li onClick={scrollToElement} data-menu="3">
                                        <h3 data-menu="3">Un seul devis</h3>
                                        </li>
                                        <li onClick={scrollToElement} data-menu="4">
                                            <h3 data-menu="4">Une équipe créée sur mesure</h3>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className={style.our_team__right}>
                                <div ref={ourRight} className={style.our_team__content}>
                                    <div ref={projectItem} data-item="1" className={style.scrolling_item}>
                                        <h3>Un projet !</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, dicta distinctio dolor dolorum eos error ipsam maxime nesciunt nostrum officiis quidem tempora temporibus tenetur ut vero, voluptas voluptatum! Consequuntur, vero.</p>
                                    </div>
                                    <div ref={interlocuteurItem} data-item="2" className={style.scrolling_item}>
                                        <h3>Un interlocuteur</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque blanditiis cupiditate illum magni modi perspiciatis quibusdam ratione repudiandae veritatis. Aperiam ducimus eaque eveniet maiores vero. Corporis cum repudiandae unde.</p>
                                    </div>
                                    <div ref={devisItem} data-item="3" className={style.scrolling_item}>
                                        <h3>Un devis !</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda, ducimus expedita harum illum officia qui sed voluptas. Accusamus accusantium aliquam architecto, eos hic magnam nulla perspiciatis sint veniam voluptatibus?</p>
                                    </div>
                                    <div ref={surMesureItem} data-item="4" className={style.scrolling_item}>
                                        <h3>Une equipe !</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolor ea laudantium omnis quaerat. Commodi, est, numquam. Accusantium, facere id laboriosam minima molestias, numquam omnis, possimus quam quos soluta tempora!</p>
                                    </div>

                                </div>
                            </div>
                        </div>







                    </div>



                </div>

    )
}