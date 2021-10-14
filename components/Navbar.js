import style from '../styles/components/navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.svg'
import {useCallback, useEffect, useRef, useState} from "react";
import TranslateOnScroll from "./effects/navbarTranslateOnScroll";
import pokou_logo from "../public/pokou_logo.svg"
import {useAppContext} from "../context/state";

export default function Navbar(props) {

    // Stock le nom de la classe à appliquer à la navbar (background color en fonction des pages)
    const [backgroundColor, setBackgroundColor] = useState("")
    // Variable dynamique qui modifie le fontSize du titre du site => Manipulé dans handleFontSize
    const [logoSize, setLogoSize] = useState(null)
    // Variable qui vérifie si l'on est en haut de la page ou non afin d'afficher une ligne grise par l'ajout d'une classe
    const [isNotOnTop, setIsNotOnTop] = useState(false)
    // Variable qui ouvre ou non le burger menu, sur click de l'icone burger
    const [burgerOpen, setBurgerOpen] = useState(false)
    // Ajout ou supression d'une classe en fonction du background, donc de la page > qui rend le burger menu blanc ou noir
    const [burgerBlackVersion, setBurgerBlackVersion] = useState(false)
    // Je stocke ici le titre du site afin de récupérer la valeur fontSize css initiale afin de mettre à jour la valeur étalon
    const titleLogo = useRef(null)
    // La ou est stoké la valeur étalon en fonction de la taille du with, provenant des medias querry du css qu premier chargement et sinon a partir de l'event resize
    const logoSizeValue = useRef(null)
    //Active bullet ?
    const [activeBullet, setActiveBullet] = useState(false)
    //Position du bullet
    const [bulletPosition, setBulletPosition] = useState(-10)
    // Desktop navbar
    const desktopNav = useRef(null)
    // La bille (bullet)
    const bullet = useRef(null)
    // Les elements lien
    const serviceLink = useRef(null)
    const travauxLink = useRef(null)
    const nousLink = useRef(null)
    const contactLink = useRef(null)
    // Bullet position
    const [bulletInitialPosition, setBulletInitialPosition] = useState()

    // pour lanimation du logo
    const navBarTop = useRef(null);
    const {logoAnimation, setLogoAnimationState} = useAppContext();
    const pokouLogo = useRef(null);
    const pokouLogoSize = useRef(null)


    // Changement du background de la navbar et modification de la couleur du navbar burger gestion du bullet
    useEffect( () => {
        // Gérer la position du bullet
        if (props.currentPage && props.currentPage !== "confidentialite" && props.currentPage !== "legale") {
            const links = {
                services: serviceLink.current,
                travaux: travauxLink.current,
                nous: nousLink.current,
                contact: contactLink.current,
                creationweb: serviceLink.current,
                ecommerce: serviceLink.current,
                applicationweb: serviceLink.current,
                dashboard: travauxLink.current,
                medtandem: travauxLink.current,
                onepalm: travauxLink.current,
                trendcorner: travauxLink.current,
                conception: serviceLink.current,
                developpement: serviceLink.current,
                referencement: serviceLink.current
            }

            const currentLink = links[props.currentPage]


            const leftNavBarDistance = desktopNav.current.getBoundingClientRect().left
            const currentLinkRect = currentLink.getBoundingClientRect()
            const xCenterOfElement = currentLinkRect.left +  ((currentLinkRect.right - currentLinkRect.left -24) / 2)
            const bulletPosition = xCenterOfElement - leftNavBarDistance
            setBulletPosition(bulletPosition)
            setBulletInitialPosition(bulletPosition)
            setActiveBullet(true)




        }
        setBackgroundColor(props.backgroundColor)
        if (["background--white", "background--blue", "background--yellow"].includes(props.backgroundColor)) {
            setBurgerBlackVersion(true)
        }
        return () => {
        }
    }, [props])

    // Initialisation du composant
    useEffect(() => {
        const title = titleLogo.current
        const logo = pokouLogo.current
        const titleFontSize = parseInt(window.getComputedStyle(title, null).getPropertyValue('font-size'));
        const logoWidth = parseInt(window.getComputedStyle(logo, null).getPropertyValue('width'));
        setLogoSize(titleFontSize)
        logoSizeValue.current = titleFontSize
        pokouLogoSize.current = logoWidth


        if (!logoAnimation) {
            navBarTop.current.classList.remove(style.logo_animation)
            setLogoAnimationState(true);
        }




    }, [logoAnimation])



    // Modification font-size sur resize
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    // Movile menu
    useEffect(() => {
        const bodyComponent = document.querySelector('body');
        const scrollBarWith = window.innerWidth - document.body.clientWidth
        if (burgerOpen) {
            bodyComponent.style.paddingRight= `${scrollBarWith}px`
            bodyComponent.classList.add('stop_scrolling')
        } else {
            bodyComponent.removeAttribute('style');
            bodyComponent.classList.remove('stop_scrolling')
        }
    },[burgerOpen])


    // Modification font-size sur scroll
    useEffect( () => {
        window.addEventListener('scroll', handleFontSize, {passive: true})
        return () => {
            window.removeEventListener('scroll', handleFontSize, {passive: true})
        }
    })

    // Animation sur le hover des liens
    const handleHover = (e) => {
        const navBarElement = desktopNav.current
        const bulletElement = bullet.current
        bulletElement.classList.add(`${style.bullet_active}`)
        const leftNavBarDistance = navBarElement.getBoundingClientRect().left
        const element = e.target
        const elementRect = element.getBoundingClientRect()
        const xCenterOfElement = elementRect.left +  ((elementRect.right - elementRect.left -24) / 2)

        setBulletPosition(xCenterOfElement - leftNavBarDistance )
    }

    //Animation sur le out du hover
    const handleOut = (e) => {
        const bulletElement = bullet.current
        if (!props.currentPage) {
            bulletElement.classList.remove(`${style.bullet_active}`)
        } else {
            setBulletPosition(bulletInitialPosition)
        }


    }

    // Gère la taille de la police en fonction du scroll, aussi utilisé lors de l'event resize
    const handleFontSize = () => {
        const body = window.scrollY
        let value = logoSizeValue.current
        let logoWidthValue = pokouLogoSize.current


        if (window.innerWidth > 719 ) {
            if (body < 20) {
                setLogoSize(value)
                setIsNotOnTop(false)
                pokouLogo.current.style.width = `${logoWidthValue}px`

                pokouLogo.current.style.left = ""
                titleLogo.current.style.marginLeft = ""
            } else if (body > 20 && body < 100) {
                setLogoSize(value * 0.8)
                titleLogo.current.style.marginLeft = "6.9rem"

                pokouLogo.current.style.width = `${logoWidthValue * 0.8}px`

                pokouLogo.current.style.left = "3.3rem"
            } else if (body > 101 && body < 145 ) {
                setLogoSize(value * 0.6)
                titleLogo.current.style.marginLeft = "5.16rem"
                pokouLogo.current.style.width = `${logoWidthValue * 0.6}px`

                pokouLogo.current.style.left = "2.45rem"
            } else if (body > 145 && body < 160) {
                setLogoSize(value * 0.5)
                titleLogo.current.style.marginLeft = "4.3rem"
                pokouLogo.current.style.width = `${logoWidthValue * 0.5}px`

                pokouLogo.current.style.left = "2rem"

            } else if (body > 160) {
                setIsNotOnTop(true)
                setLogoSize(value * 0.40)
                titleLogo.current.style.marginLeft = "3.4rem"
                pokouLogo.current.style.width = `${logoWidthValue * 0.4}px`

                pokouLogo.current.style.left = "1.65rem"
            }
        }
    }

    // Change la taille de la police en fonction du resize, aligner sur les media css
    const handleResize = () => {
        const bodyWith = window.innerWidth

        if (bodyWith > 719) {
            setBurgerOpen(false)
        }

        if (bodyWith < 719) {
            logoSizeValue.current = 38
            handleFontSize()
        } else if (bodyWith < 800) {
            logoSizeValue.current = 80
            handleFontSize()
        } else {
            logoSizeValue.current = 96
            handleFontSize()
        }
    }

    // Ouvre le menu burger
    const openBurgerMenu = () => {
        setBurgerOpen(!burgerOpen)
    }



    return (
        <TranslateOnScroll  isBurgerOpen={burgerOpen}>
            <div  className={`${style.navbar} ${isNotOnTop ? style.navbar__grey_line : ""} ${style[backgroundColor]} ${burgerOpen ? style.menu_opened : "" }`}>
                <div className={style.navbar_container}>





                    <div ref={navBarTop} className={`${style.navbar__top} ${isNotOnTop ? style.is_not_display : ""} ${!logoAnimation ? style.logo_animation : ""} ` }>
                        <Link  href="/">
                            <a style={ logoSize ? {fontSize: logoSize} : null} className={`${isNotOnTop ? style.is_not_visible : ""}`} ref={titleLogo}>
                                <span>P</span>KOÙ WEB
                                <span ref={pokouLogo} className={style.pokou_logo}>
                            <Image priority={true} src={pokou_logo}/>
                        </span>
                            </a>
                        </Link>
                    </div>






                    <div className={style.navbar__bottom}>
                        <div ref={desktopNav} className={style.navbar__bottom__desktop}>
                            <span ref={bullet} style={{left: `${bulletPosition}px`}} className={ `${style.nav__links_bullet}  ${activeBullet ? style.bullet_active : ""}`}/>
                            <div className={style.nav__links_left}>
                                <Link  href="/services">
                                    <a ref={serviceLink} onMouseOut={handleOut} onMouseOver={handleHover} >Nos services</a>
                                </Link>
                                <Link href="/#travaux_anchor">
                                    <a ref={travauxLink} onMouseOut={handleOut} onMouseOver={handleHover}>Travaux</a>
                                </Link>
                                <Link href="/about">
                                    <a ref={nousLink} onMouseOut={handleOut} onMouseOver={handleHover}>A propos de nous</a>
                                </Link>
                            </div>
                            <div className={style.nav__links_right}>

                                <Link  href="/contact">
                                    <a ref={contactLink} onMouseOut={handleOut} onMouseOver={handleHover}>Contactez-nous</a>
                                </Link>
                            </div>
                        </div>
                        <div className={style.navbar__bottom__mobile}>
                            <Link  href="/"><a className={`${ style.is_visible}`}><span>P</span><span className={style.pokou_logo_mobile}>
                            <Image src={pokou_logo}/>
                        </span>KOÙ WEB</a></Link>
                            <div  onClick={openBurgerMenu} className={ `${style.burger__icon} ${burgerBlackVersion ? style.black_version : ""} ${burgerOpen ? style.is_open : ""}` }>
                                <div className={style.icon__span}></div>
                                <svg x="0" y="0"  width="54px" height="54px" viewBox="0 0 54 54">
                                    <path d="M16.500,27.000 C16.500,27.000 24.939,27.000 38.500,27.000 C52.061,27.000 49.945,15.648 46.510,11.367 C41.928,5.656 34.891,2.000 27.000,2.000 C13.193,2.000 2.000,13.193 2.000,27.000 C2.000,40.807 13.193,52.000 27.000,52.000 C40.807,52.000 52.000,40.807 52.000,27.000 C52.000,13.000 40.837,2.000 27.000,2.000"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.burger__menu} ${burgerOpen ? style.burger__menu__open : ""}`}>
                <div className={style.burger__menu__container}>
                    <div className={style.main_burger_menu__content}>
                        <ul>
                            <li onClick={() => setBurgerOpen(false)} className={`${!props.currentPage? style.active_link : ""}`}><Link scroll={true} href="/"><a >Acceuil</a></Link></li>
                            <li className={`${props.currentPage === "services" ? style.active_link : ""}`}><Link href="/services"><a >Services</a></Link></li>
                            <li onClick={() => setBurgerOpen(false)}><Link href="/#travaux_anchor"><a >Travaux</a></Link></li>
                            <li className={`${props.currentPage === "nous" ? style.active_link : ""}`}> <Link href="/about"><a >A propos</a></Link></li>
                            <li className={`${props.currentPage === "contact" ? style.active_link : ""}`}>   <Link href="/contact"><a >Contact</a></Link></li>
                        </ul>
                    </div>
                    <div className={style.primary_service_burger_menu__content}>
                        <ul>
                            <li className={props.currentPage === "creationweb" ? style.active_link : ""}>
                                <Link href="/services/sitesweb">Création web</Link>
                            </li>
                            <li className={props.currentPage === "applicationweb" ? style.active_link : ""}>  <Link href="/services/applicationsweb">Applications web</Link></li>
                            <li className={props.currentPage === "ecommerce" ? style.active_link : ""}> <Link href="/services/ecommerce">E-commerce</Link></li>
                        </ul>

                    </div>
                    <div className={style.secondary_service_burger_menu__content}>
                        <ul>
                            <li className={props.currentPage === "conception" ? style.active_link : ""}>
                                <Link href="/services/conception">Conception</Link>
                            </li>
                            <li className={props.currentPage === "developpement" ? style.active_link : ""}>  <Link href="/services/developpement">Développement</Link></li>
                            <li className={props.currentPage === "referencement" ? style.active_link : ""}> <Link href="/services/referencement">Référencement</Link></li>
                        </ul>
                    </div>

                </div>
                <div className={style.burger_menu__logo}>
                    <Image src={pokou_logo}/>

                </div>
            </div>
        </TranslateOnScroll>
    )
}