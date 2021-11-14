import style from '../styles/components/navbar.module.scss'
import workBlocStyle from "../styles/blocs/index_page/WorkBloc.module.scss"
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.svg'
import {useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";
import TranslateOnScroll from "./effects/navbarTranslateOnScroll";
import pokou_logo from "../public/pokou_logo.svg"
import {useAppContext} from "../context/state";
import { useInView } from 'react-intersection-observer';

export default function Navbar(props) {

    // Stock le nom de la classe à appliquer à la navbar (background color en fonction des pages)
    const [backgroundColor, setBackgroundColor] = useState("")
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

    const completeNavbar = useRef(null)

    // pour lanimation du logo
    const navBarTop = useRef(null);

    //Animation pour lien travaux
    const workBlocRef = useRef();
    const [inViewRef, inView] = useInView();

    //Mini menu
    const [miniMenuOpen, setMiniMenuOpen] = useState(false)
    const minimenu = useRef(null);
    const shareLogo = useRef(null);
    const bisouLogo = useRef(null);
    const minimenuBtn = useRef(null);
    const bisouContainer = useRef(null);

    const {bisous, ajouterBisous} = useAppContext();
    const bisouCompteur = useRef(null);




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
                referencement: serviceLink.current,
                itineraire: travauxLink.current,
                technologie: serviceLink.current,
                maintenance: serviceLink.current,
                merci: contactLink.current

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

        if (!props.currentPage) {
            workBlocRef.current = document.querySelector(`.${workBlocStyle.work_bloc__container}`);
            inViewRef(workBlocRef.current);
        }
        setBackgroundColor(props.backgroundColor)
        if (["background--white", "background--blue", "background--yellow"].includes(props.backgroundColor)) {
            setBurgerBlackVersion(true)
        }

    }, [props])










    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])








    // Modification font-size sur resize
    useEffect(() => {
        window.addEventListener('scroll', handleFontSize, {passive: true})
        return () => {

            window.removeEventListener('scroll', handleFontSize, {passive: true})
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
            closeMiniMenu();
            bodyComponent.removeAttribute('style');
            bodyComponent.classList.remove('stop_scrolling')
        }
    },[burgerOpen])

    // Animation du lien travaux

    const travauxLinkAnimation = () => {
        if (inView) {
            const currentLink = travauxLink.current
            const leftNavBarDistance = desktopNav.current.getBoundingClientRect().left
            const currentLinkRect = currentLink.getBoundingClientRect()
            const xCenterOfElement = currentLinkRect.left +  ((currentLinkRect.right - currentLinkRect.left -24) / 2)
            const bulletPosition = xCenterOfElement - leftNavBarDistance
            setBulletPosition(bulletPosition)
            setBulletInitialPosition(bulletPosition)
            setActiveBullet(true)
        } else {
            setActiveBullet(false)
        }
    }


    // MiniMenuMobile

    const handleMiniMenu = (event) => {

        const pokouLogo = minimenuBtn.current.parentElement
        const shareLogoElement = shareLogo.current
        const bisouElement = bisouLogo.current
        if (!pokouLogo.classList.contains(`${style.active_pokou}`)) {
            openMiniMenu()
        } else {
            closeMiniMenu()
        }
    }

    // Ouvrir minimenu
    const openMiniMenu = () => {
        const pokouLogo = minimenuBtn.current.parentElement
        const shareLogoElement = shareLogo.current
        const bisouElement = bisouLogo.current
        const bisousCompteur = bisouCompteur.current
        pokouLogo.classList.add(`${style.active_pokou}`)
        setTimeout(() => {
            shareLogoElement.classList.add(`${style.active_share_logo}`)
            bisouElement.classList.add(`${style.active_bisou_logo}`)
        }, 200)
        setTimeout(() => {
            bisousCompteur.classList.add(`${style.show_compteur}`)
        },600)
    }

    // Fermer minimenu
    const closeMiniMenu = () => {
        const pokouLogo = minimenuBtn.current.parentElement
        const shareLogoElement = shareLogo.current
        const bisouElement = bisouLogo.current
        const bisousCompteur = bisouCompteur.current
        shareLogoElement.classList.remove(`${style.active_share_logo}`)
        bisouElement.classList.remove(`${style.active_bisou_logo}`)
        bisousCompteur.classList.remove(`${style.show_compteur}`)

        setTimeout(() => {
            pokouLogo.classList.remove(`${style.active_pokou}`)
        }, 300)
    }

    // Partager la page

    const handleShare = async () => {

        try {
            const shareData = {
                title: "PokouWeb | Agence Digitale",
                text: "Nous créons des sites Web intelligents et beaux!",
                url: "https://www.pokouweb.fr"
            }
            await navigator.share(shareData)
            console.log("Partage lancé")
        } catch (err) {
            console.log(err)
        }
    }



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
        if (!props.currentPage && !activeBullet ) {
            bulletElement.classList.remove(`${style.bullet_active}`)
        } else {
            setBulletPosition(bulletInitialPosition)
        }


    }

    // Gère la taille de la police en fonction du scroll, aussi utilisé lors de l'event resize
    const handleFontSize = () => {
        if (!props.currentPage) {
            travauxLinkAnimation()
        }

        const body = window.scrollY
        const pokouTitle = titleLogo.current
        if (logoSizeValue.current === null) {
            const pokouTitleHeight = parseInt(window.getComputedStyle(pokouTitle, null).getPropertyValue('height'));
            logoSizeValue.current = pokouTitleHeight
        }
        let initialPokouTitleValue = logoSizeValue.current

        if (window.innerWidth > 719 && logoSizeValue !== null ) {
            if (body < 20) {
                setIsNotOnTop(false)
                pokouTitle.style.height= `${initialPokouTitleValue}px`

            } else if (body > 20 && body < 100) {
                pokouTitle.style.height= `${initialPokouTitleValue * 0.8}px`

            } else if (body > 101 && body < 145 ) {
                let newValue = initialPokouTitleValue * 0.6
                pokouTitle.style.height= `${newValue >= 40 ? newValue : 40}px`

            } else if (body > 145 && body < 160) {
                let newValue = initialPokouTitleValue * 0.5
                pokouTitle.style.height= `${newValue >= 40 ? newValue : 40}px`

            } else if (body > 160) {
                setIsNotOnTop(true)
                pokouTitle.style.height= `${40}px`
            }
        }





    }


    // Change la taille de la police en fonction du resize, aligner sur les media css
    const handleResize = () => {
        const bodyWith = window.innerWidth

        if (bodyWith > 719) {
            setBurgerOpen(false)
        }

        if (bodyWith <= 719) {
            logoSizeValue.current = 38
            handleFontSize()
        } else if (bodyWith > 960 && bodyWith <= 1439) {
            logoSizeValue.current = 72
            handleFontSize()
        } else if (bodyWith > 719 && bodyWith <= 960) {
            logoSizeValue.current = 51
            handleFontSize()
        } else {
            logoSizeValue.current = 112
            handleFontSize()
        }
    }

    // Ouvre le menu burger
    const openBurgerMenu = () => {
        setBurgerOpen(!burgerOpen)
    }

    // créer des bisous

    const handleBisous = () => {
        ajouterBisous()
        const bisou = document.createElement('img')
        const bisouParent = bisouContainer.current
        bisou.src="/coeurrouge.svg"
        bisouParent.appendChild(bisou)

        let delay = Math.random() * 200;
        let destinationX = (Math.random() - 0.5) * 300;
        let destinationY = (Math.random() - 0.5) * 300;
        let rotation = Math.random() * 520;
        let size = (Math.random() *3) +0.5

        const animation = bisou.animate([
            {
                opacity: 1
            },
            {
                transform: `translate(-50%, -50%) translate(${destinationX}px, ${destinationY}px) rotate(${rotation}deg) scale(${size})`,
                opacity: 0,
            }
        ], {
            duration: Math.random() * 1000 + 5000,
            easing: 'cubic-bezier(0, .9, .57, 1)',
            delay: delay
        })
        animation.onfinish = removeBisou;
    }

    const removeBisou = (e) => {
        e.target.effect.target.remove();
    }

    return (
        <TranslateOnScroll ref={completeNavbar}   isBurgerOpen={burgerOpen}>
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

                            <Link  href="/"><a className={`${ style.is_visible}`}> <img src="/pokou_title_black.svg" alt="Pokouweb Title" /></a></Link>
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
                            <li onClick={() => setBurgerOpen(false)} className={`${!props.currentPage && !inView? style.active_link : ""}`}><Link scroll={true} href="/"><a >Acceuil</a></Link></li>
                            <li className={`${props.currentPage === "services" ? style.active_link : ""}`}><Link href="/nos-services"><a >Services</a></Link></li>
                            <li className={`${inView ? style.active_link : "" }`} onClick={() => setBurgerOpen(false)}><Link href="/#travaux_anchor"><a >Travaux</a></Link></li>
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
                    {/* <div className={style.secondary_service_burger_menu__content}>
                        <ul>
                            <li className={props.currentPage === "conception" ? style.active_link : ""}>
                                <Link href="/nos-services/conception">Conception</Link>
                            </li>
                            <li className={props.currentPage === "developpement" ? style.active_link : ""}>  <Link href="/nos-services/developpement">Développement</Link></li>
                            <li className={props.currentPage === "referencement" ? style.active_link : ""}> <Link href="/nos-services/referencement">Référencement</Link></li>
                        </ul>
                    </div> */}
                    <div  className={style.burger_menu__logo}>
                        <div ref={minimenu} className={style.interactive_logo_container}>
                            <div ref={shareLogo} onClick={handleShare} className={style.share_logo}>
                                <img className={style.share_button} src="/share.svg" alt="Share icon"/>
                            </div>
                            <div ref={bisouLogo} onClick={handleBisous} className={style.bisous_logo}>
                                <img className={style.share_button} src="/coeurcoeur.svg" alt="Bisou icon"/>
                            </div>

                            <span ref={bisouCompteur} className={style.bisou_compteur}>
                                {bisous > 0 &&
                                <p>{bisous}</p>
                                }


                            </span>

                        </div>

                        <img ref={minimenuBtn} onClick={handleMiniMenu} src="/pokou_logo.svg" alt="Pokouweb logo"/>
                        <div ref={bisouContainer} className={style.bisous_container}>


                        </div>



                    </div>

                </div>

            </div>
        </TranslateOnScroll>
    )
}