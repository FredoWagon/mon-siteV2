import style from '../styles/components/navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.svg'
import {useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";
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

    }, [props])










     useLayoutEffect(() => {
      window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
     }
    }, [])








    // Modification font-size sur resize
    useLayoutEffect(() => {

        window.addEventListener('scroll', handleFontSize, {passive: true})
        return () => {

            window.removeEventListener('scroll', handleFontSize, {passive: true})
        }
    }, [])





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
        const pokouTitle = titleLogo.current
        console.log(logoSizeValue)
        if (logoSizeValue.current === null) {
            const pokouTitleHeight = parseInt(window.getComputedStyle(pokouTitle, null).getPropertyValue('height'));
            logoSizeValue.current = pokouTitleHeight
            console.log(pokouTitle)
            console.log(pokouTitleHeight)
            console.log(logoSizeValue)
        }
        let initialPokouTitleValue = logoSizeValue.current

        if (window.innerWidth > 719 && logoSizeValue !== null ) {
            if (body < 20) {
                setIsNotOnTop(false)
                pokouTitle.style.height= `${initialPokouTitleValue}px`

            } else if (body > 20 && body < 100) {
                pokouTitle.style.height= `${initialPokouTitleValue * 0.8}px`

            } else if (body > 101 && body < 145 ) {
                pokouTitle.style.height= `${initialPokouTitleValue * 0.6}px`

            } else if (body > 145 && body < 160) {
                pokouTitle.style.height= `${initialPokouTitleValue * 0.5}px`

            } else if (body > 160) {
                setIsNotOnTop(true)
                pokouTitle.style.height= `${initialPokouTitleValue * 0.4}px`
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





                    <div ref={navBarTop} className={`${style.navbar__top} ${isNotOnTop ? style.is_not_display : ""} ` }>
                        <Link  href="/">
                            <a className={`${isNotOnTop ? style.is_not_visible : ""}`} >
                                <span>
                                    <img ref={titleLogo} src="/pokou_title_black.svg" alt="Pokouweb Title" />
                                </span>

                            </a>
                        </Link>

                    </div>








                    <div className={style.navbar__bottom}>
                        <div ref={desktopNav} className={style.navbar__bottom__desktop}>
                            <span ref={bullet} style={{left: `${bulletPosition}px`}} className={ `${style.nav__links_bullet}  ${activeBullet ? style.bullet_active : ""}`}/>
                            <div className={style.nav__links_left}>
                                <ul>
                                    <li> <Link  href="/nos-services">
                                        <a ref={serviceLink} onMouseOut={handleOut} onMouseOver={handleHover} >Nos services</a>
                                    </Link></li>
                                    <li> <Link href="/#travaux_anchor">
                                        <a ref={travauxLink} onMouseOut={handleOut} onMouseOver={handleHover}>Travaux</a>
                                    </Link></li>
                                    <li> <Link href="/a-propos">
                                        <a ref={nousLink} onMouseOut={handleOut} onMouseOver={handleHover}>A propos de nous</a>
                                    </Link></li>
                                </ul>
                            </div>
                            <div className={style.nav__links_right}>
                                <ul>
                                    <li>  <Link  href="/contact">
                                        <a ref={contactLink} onMouseOut={handleOut} onMouseOver={handleHover}>Contactez-nous</a>
                                    </Link></li>
                                </ul>


                            </div>
                        </div>
                        <div className={style.navbar__bottom__mobile}>
                            <Link  href="/"><a className={`${ style.is_visible}`}><span>P</span><span className={style.pokou_logo_mobile}>
                              <Image width="23.36" priority={true} alt="Pokou web logo" height="23.36" src="/pokouweb/pokou_logo_cjfdqe.svg"/>
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
                            <li className={`${props.currentPage === "services" ? style.active_link : ""}`}><Link href="/nos-services"><a >Services</a></Link></li>
                            <li onClick={() => setBurgerOpen(false)}><Link href="/#travaux_anchor"><a >Travaux</a></Link></li>
                            <li className={`${props.currentPage === "nous" ? style.active_link : ""}`}> <Link href="/a-propos"><a >A propos</a></Link></li>
                            <li className={`${props.currentPage === "contact" ? style.active_link : ""}`}>   <Link href="/contact"><a >Contact</a></Link></li>
                        </ul>
                    </div>
                    <div className={style.primary_service_burger_menu__content}>
                        <ul>
                            <li className={props.currentPage === "creationweb" ? style.active_link : ""}>
                                <Link href="/nos-services/site-web">Création web</Link>
                            </li>
                            <li className={props.currentPage === "applicationweb" ? style.active_link : ""}>  <Link href="/nos-services/application-web">Applications web</Link></li>
                            <li className={props.currentPage === "ecommerce" ? style.active_link : ""}> <Link href="/nos-services/e-commerce">E-commerce</Link></li>
                        </ul>

                    </div>
                    <div className={style.secondary_service_burger_menu__content}>
                        <ul>
                            <li className={props.currentPage === "conception" ? style.active_link : ""}>
                                <Link href="/nos-services/conception">Conception</Link>
                            </li>
                            <li className={props.currentPage === "developpement" ? style.active_link : ""}>  <Link href="/nos-services/developpement">Développement</Link></li>
                            <li className={props.currentPage === "referencement" ? style.active_link : ""}> <Link href="/nos-services/referencement">Référencement</Link></li>
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