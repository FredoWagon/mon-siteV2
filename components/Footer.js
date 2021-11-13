import style from '../styles/components/footer.module.scss'
import Image from 'next/image'
import logo from "../public/logo.svg";
import instagram from "../public/instagram.svg";
import facebook from "../public/facebook.svg";
import pokou_logo from "../public/pokou_logo.svg"
import flickr from "../public/flickr.svg";
import copryright from "../public/droits-dauteur.svg"
import Link from 'next/link';

export default function Footer(props) {


    return (
        <div className={`${props.currentPage === "merci" ? style.black_merci_background : ""} ${style.footer}`}>
            <div className={style.footer_desktop}>
                <div className={style.footer__top}>
                    <p>Nous accompagnons nos clients pour qu'ils voient grand avec leur entreprise.</p>
                    <div className={style.footer__sitemap}>
                        <div className={style.sitemap_item}>
                            <ul>
                                <li className={ !props.currentPage ? style.active_current_page : ""}>  <Link href="/">Accueil</Link></li>
                                <li className={`${ props.currentPage === "services" ? style.active_current_page : ""} ${["creationweb", "applicationweb", "ecommerce", "referencement", "developpement", "conception","maintenance", "technologie"].includes(props.currentPage) ? style.active_parent_page : "" }`}> <Link href="/nos-services" >Nos services</Link></li>
                                <li className={`${["dashboard", "medtandem", "trendcorner", "onepalm", "itineraire"].includes(props.currentPage) ? style.active_parent_page : "" }`}> <Link href="/#travaux_anchor">Travaux</Link></li>
                                <li  className={ props.currentPage === "nous" ? style.active_current_page : ""}> <Link href="/a-propos">A propos</Link></li>
                            </ul>
                        </div>
                        <div className={style.sitemap_item}>
                            <ul>
                                <li  className={ ["contact", "merci"].includes(props.currentPage) ? style.active_current_page : ""}> <Link href="/contact" >Contact</Link></li>
                                <li  className={ props.currentPage === "confidentialite" ? style.active_current_page : ""}> <Link href="/politique-de-confidentialite" >Politique de confidentialité</Link></li>
                            </ul>
                        </div>
                        {!props.currentPage &&
                        <div className={style.sitemap_dynamic_item}>
                            <div className={style.sitemap_dynamic_services}>
                                <ul>
                                    <li className={props.currentPage === "creationweb" ? style.active_current_page : ""}>
                                        <Link href="/nos-services/site-web">Création web</Link>
                                    </li>
                                    <li className={props.currentPage === "applicationweb" ? style.active_current_page : ""}>  <Link href="/nos-services/application-web">Applications web</Link></li>
                                    <li className={props.currentPage === "ecommerce" ? style.active_current_page : ""}> <Link href="/nos-services/e-commerce">E-commerce</Link></li>
                                </ul>
                            </div>
                            <div className={style.sitemap_dynamic_works}>
                                <ul>
                                    <li className={props.currentPage === "trendcorner" ? style.active_current_page : ""}> <Link href="/travaux/trendcorner">Trend Corner</Link></li>
                                    <li className={props.currentPage === "medtandem" ? style.active_current_page : ""}>   <Link href="/travaux/medtandem">Med Tandem</Link></li>
                                    <li className={props.currentPage === "onepalm" ? style.active_current_page : ""}>   <Link href="/travaux/onepalm-surf">OnePalm Surf</Link></li>
                                    <li className={props.currentPage === "dashboard" ? style.active_current_page : ""}> <Link href="/travaux/dashboard">DashBoard</Link></li>
                                    <li className={props.currentPage === "itineraire" ? style.active_current_page : ""}> <Link href="/travaux/itineraires-vignobles">Itineraire-vigrobles</Link></li>
                                </ul>
                            </div>
                        </div>
                        }
                        {["creationweb", "applicationweb", "ecommerce", "services", "developpement", "conception", "referencement", "technologie", "maintenance"].includes(props.currentPage) &&
                        <div className={style.sitemap_dynamic_item}>
                            <div className={style.sitemap_dynamic_services}>
                                <ul>
                                    <li className={props.currentPage === "creationweb" ? style.active_current_page : ""}>
                                        <Link href="/nos-services/site-web">Création web</Link>
                                    </li>
                                    <li className={props.currentPage === "applicationweb" ? style.active_current_page : ""}>  <Link href="/nos-services/application-web">Applications web</Link></li>
                                    <li className={props.currentPage === "ecommerce" ? style.active_current_page : ""}> <Link href="/nos-services/e-commerce">E-commerce</Link></li>
                                </ul>
                            </div>
                            <div className={style.sitemap_dynamic_sub_services}>
                                <ul>
                                    <li className={props.currentPage === "conception" ? style.active_current_page : ""}>
                                        <Link href="/nos-services/conception">Conception</Link>
                                    </li>
                                    <li className={props.currentPage === "developpement" ? style.active_current_page : ""}>  <Link href="/nos-services/developpement">Développement</Link></li>
                                    <li className={props.currentPage === "referencement" ? style.active_current_page : ""}> <Link href="/nos-services/referencement">Référencement</Link></li>
                                    <li className={props.currentPage === "maintenance" ? style.active_current_page : ""}> <Link href="/nos-services/maintenance-et-suivi">Maintenance</Link></li>
                                    <li className={props.currentPage === "technologie" ? style.active_current_page : ""}> <Link href="/nos-services/technologies">Technologies</Link></li>
                                </ul>
                            </div>


                        </div>
                        }
                        {["dashboard", "medtandem", "trendcorner", "onepalm", "itineraire"].includes(props.currentPage) &&
                        <div className={style.sitemap_dynamic_item}>
                            <div className={style.sitemap_dynamic_works}>
                                <ul>
                                    <li className={props.currentPage === "trendcorner" ? style.active_current_page : ""}> <Link href="/travaux/trendcorner">Trend Corner</Link></li>
                                    <li className={props.currentPage === "medtandem" ? style.active_current_page : ""}>   <Link href="/travaux/medtandem">Med Tandem</Link></li>
                                    <li className={props.currentPage === "onepalm" ? style.active_current_page : ""}>   <Link href="/travaux/onepalm-surf">OnePalm Surf</Link></li>
                                    <li className={props.currentPage === "dashboard" ? style.active_current_page : ""}> <Link href="/travaux/dashboard">DashBoard</Link></li>
                                    <li className={props.currentPage === "itineraire" ? style.active_current_page : ""}> <Link href="/travaux/itineraires-vignobles">Itineraire-vigrobles</Link></li>
                                </ul>
                            </div>
                        </div>
                        }




                    </div>

                </div>
                <div className={style.footer__middle}>
                    <div className={style.footer__mail}>
                        <a href="mailto:contact@pokouweb.fr">contact@pokouweb.fr</a>
                        <span>TEL : <a href="tel:+33768178697">07 68 17 86 97</a> </span>
                    </div>

                        <div className={style.footer__social_links}>
                        <span>
                             <img className={style.sociale_linkedin} src="/linkedin.svg" alt="Linkedin icon"/>
                            <a target="_blank" href="https://www.linkedin.com/company/poko%C3%B9web/about/">LinkedIn</a>
                        </span>


                    </div>
                    <div className={style.footer__adress}>
                        <div className={style.adress_item}>
                            <p className={style.adress_title}>L'Hertimate</p>
                            <p>9 Rue Jeanne Jugan</p>
                            <p>35590</p>
                        </div>
                        <div className={style.adress_item}>
                            <p className={style.adress_title}>Lormont</p>
                            <p> 43 Rue Marc Tallavi</p>
                            <p>33310</p>
                        </div>
                    </div>
                </div>
                <div className={style.footer__bottom}>
                    <div className={style.footer_title}>pokoù Web
                    </div>
                </div>
                <div className={style.footer_legal}>
                    <p>© 2021 PokoùWeb, tous droits réservés -</p>
                    <Link href="/mentions-legales">
                        <a> Mentions légales</a>
                    </Link>



                </div>
            </div>
            <div className={style.footer_mobile}>
                <p>Nous accompagnons nos clients pour qu'ils voient grand avec leur entreprise.</p>
                <div className={style.footer_mobile__mail}>
                    <a href="mailto:contact@pokouweb.fr">contact@pokouweb.fr</a>
                    <span>TEL : <a href="tel:+33768178697">07 68 17 86 97</a> </span>
                </div>



                <div className={style.footer_mobile__social}>
                    <div className={style.footer_social__item}>
                            <a target="_blank" href="https://www.linkedin.com/company/poko%C3%B9web/about/" >
                                <img className={style.sociale_linkedin} src="/linkedin.svg" alt="Linkedin icon"/>
                            </a>
                    </div>

                </div>


                <div className={style.footer_mobile__links}>
                    <div className={style.footer_mobile__links__global}>
                        <ul>
                            <li className={ !props.currentPage ? style.active_current_page : ""}>  <Link href="/">Accueil</Link></li>
                            <li className={`${ props.currentPage === "services" ? style.active_current_page : ""} ${["creationweb", "applicationweb", "ecommerce", "referencement", "developpement", "conception", "maintenance", "technologie"].includes(props.currentPage) ? style.active_parent_page : "" }`}> <Link href="/nos-services" >Nos services</Link></li>
                            <li className={`${["dashboard", "medtandem", "trendcorner", "onepalm", "itineraire"].includes(props.currentPage) ? style.active_parent_page : "" }`}> <Link href="/#travaux_anchor">Travaux</Link></li>
                            <li  className={ props.currentPage === "nous" ? style.active_current_page : ""}> <Link href="/a-propos">A propos</Link></li>
                            <li  className={ ["contact", "merci"].includes(props.currentPage) ? style.active_current_page : ""}> <Link href="/contact" >Contact</Link></li>
                        </ul>
                    </div>

                    {!props.currentPage &&
                    <div className={style.footer_mobile__dynamic_links}>
                        <div className={style.footer_mobile__links__services}>
                            <ul>
                                <li>
                                    <Link href="/nos-services/site-web">Création web</Link>
                                </li>
                                <li>  <Link href="/nos-services/application-web">Applications web</Link></li>
                                <li> <Link href="/nos-services/e-commerce">E-commerce</Link></li>
                            </ul>
                        </div>
                        <div className={style.footer_mobile__links__works}>
                            <ul>
                                <li className={props.currentPage === "trendcorner" ? style.active_current_page : ""}> <Link href="/travaux/trendcorner">Trend Corner</Link></li>
                                <li className={props.currentPage === "medtandem" ? style.active_current_page : ""}>   <Link href="/travaux/medtandem">Med Tandem</Link></li>
                                <li className={props.currentPage === "onepalm" ? style.active_current_page : ""}>   <Link href="/travaux/onepalm-surf">OnePalm Surf</Link></li>
                                <li className={props.currentPage === "dashboard" ? style.active_current_page : ""}> <Link href="/travaux/dashboard">DashBoard</Link></li>
                                <li className={props.currentPage === "itineraire" ? style.active_current_page : ""}> <Link href="/travaux/itineraires-vignobles">Itineraire-vigrobles</Link></li>
                            </ul>
                        </div>
                    </div>
                    }
                    {["creationweb", "applicationweb", "ecommerce", "services", "developpement", "conception", "referencement","technologie","maintenance"].includes(props.currentPage) &&
                    <div className={style.footer_mobile__dynamic_links}>
                        <div className={style.footer_mobile__links__services}>
                            <ul>
                                <li className={props.currentPage === "creationweb" ? style.active_current_page : ""}>
                                    <Link href="/nos-services/site-web">Création web</Link>
                                </li>
                                <li className={props.currentPage === "applicationweb" ? style.active_current_page : ""}>  <Link href="/nos-services/application-web">Applications web</Link></li>
                                <li className={props.currentPage === "ecommerce" ? style.active_current_page : ""}> <Link href="/nos-services/ec-ommerce">E-commerce</Link></li>
                            </ul>
                        </div>
                        <div className={style.footer_mobile__links__sub_services}>
                            <ul>
                                <li className={props.currentPage === "conception" ? style.active_current_page : ""}>
                                    <Link href="/nos-services/conception">Conception</Link>
                                </li>
                                <li className={props.currentPage === "developpement" ? style.active_current_page : ""}>  <Link href="/nos-services/developpement">Développement</Link></li>
                                <li className={props.currentPage === "referencement" ? style.active_current_page : ""}> <Link href="/nos-services/referencement">Référencement</Link></li>
                                <li className={props.currentPage === "maintenance" ? style.active_current_page : ""}> <Link href="/nos-services/maintenance-et-suivi">Maintenance</Link></li>
                                <li className={props.currentPage === "technologie" ? style.active_current_page : ""}> <Link href="/nos-services/technologies">Technologies</Link></li>
                            </ul>
                        </div>


                    </div>
                    }
                    {["dashboard", "medtandem", "trendcorner", "onepalm", "itineraire"].includes(props.currentPage) &&
                    <div className={style.footer_mobile__dynamic_links}>
                        <div className={style.footer_mobile__links__works}>
                            <ul>
                                <li className={props.currentPage === "trendcorner" ? style.active_current_page : ""}> <Link href="/travaux/trendcorner">Trend Corner</Link></li>
                                <li className={props.currentPage === "medtandem" ? style.active_current_page : ""}>   <Link href="/travaux/medtandem">Med Tandem</Link></li>
                                <li className={props.currentPage === "onepalm" ? style.active_current_page : ""}>   <Link href="/travaux/onepalm-surf">OnePalm Surf</Link></li>
                                <li className={props.currentPage === "dashboard" ? style.active_current_page : ""}> <Link href="/travaux/dashboard">DashBoard</Link></li>
                                <li className={props.currentPage === "itineraire" ? style.active_current_page : ""}> <Link href="/travaux/itineraires-vignobles">Itineraire-vigrobles</Link></li>
                            </ul>
                        </div>
                    </div>
                    }











                </div>

                <p className={style.footer_logo}>pokoù Web
                </p>
                <div className={style.mobile__footer_legal}>
                    <p>© 2021 PokoùWeb, tous droits réservés</p>
                    <Link href="/mentions-legales">
                        <a>Mentions légales </a>
                    </Link>
                    <Link href="/politique-de-confidentialite">
                        <a>- Politique de confidentialité</a>
                    </Link>

                </div>

            </div>
            <div className={style.footer_logo__image}>
                <div className={style.logo_image_footer__container}>
                    <img width="96"  height="96" src="/pokou_logo.svg" alt="Pokouweb logo"/>
                    <div className={style.image_text_animation}>
                        <img src="/bulle.svg" alt="bulle db"/>
                        <p>Pokoù signifie <mark>« bisous »</mark> en breton !</p>
                    </div>
                </div>


            </div>
        </div>
    )
}


