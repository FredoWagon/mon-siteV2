import style from '../styles/components/footer.module.scss'
import Image from 'next/image'
import logo from "../public/logo.svg";
import instagram from "../public/instagram.svg";
import facebook from "../public/facebook.svg";
import flickr from "../public/flickr.svg";
import copryright from "../public/droits-dauteur.svg"
import Link from 'next/link';

export default function Footer(props) {


    return (
        <div className={style.footer}>
            <div className={style.footer_desktop}>
                <div className={style.footer__top}>
                    <p>Nous libérons nos clients pour qu'ils voient grand avec leur marque.</p>
                    <div className={style.footer__sitemap}>
                        <div className={style.sitemap_item}>
                            <ul>
                                <li className={ !props.currentPage ? style.active_current_page : ""}>  <Link href="/">Accueil</Link></li>
                                <li className={`${ props.currentPage === "services" ? style.active_current_page : ""} ${["creationweb", "applicationweb", "ecommerce", "referencement", "developpement", "conception"].includes(props.currentPage) ? style.active_parent_page : "" }`}> <Link href="/services" >Nos services</Link></li>
                                <li className={`${["dashboard", "medtandem", "trendcorner", "onepalm"].includes(props.currentPage) ? style.active_parent_page : "" }`}> <Link href="#">Travaux</Link></li>
                                <li  className={ props.currentPage === "nous" ? style.active_current_page : ""}> <Link href="/about">About</Link></li>
                            </ul>
                        </div>
                        <div className={style.sitemap_item}>
                            <ul>
                                <li  className={ props.currentPage === "contact" ? style.active_current_page : ""}> <Link href="/contact" >Contact</Link></li>
                                <li  className={ props.currentPage === "confidentialite" ? style.active_current_page : ""}> <Link href="/politique-de-confidentialite" >Politique de confidentialité</Link></li>
                            </ul>
                        </div>
                        {!props.currentPage &&
                        <div className={style.sitemap_dynamic_item}>
                            <div className={style.sitemap_dynamic_services}>
                                <ul>
                                    <li className={props.currentPage === "creationweb" ? style.active_current_page : ""}>
                                        <Link href="/services/sitesweb">Création web</Link>
                                    </li>
                                    <li className={props.currentPage === "applicationweb" ? style.active_current_page : ""}>  <Link href="/services/applicationsweb">Applications web</Link></li>
                                    <li className={props.currentPage === "ecommerce" ? style.active_current_page : ""}> <Link href="/services/ecommerce">E-commerce</Link></li>
                                </ul>
                            </div>
                            <div className={style.sitemap_dynamic_works}>
                                <ul>
                                    <li className={props.currentPage === "trendcorner" ? style.active_current_page : ""}> <Link href="/projets/trendcorner">Trend Corner</Link></li>
                                    <li className={props.currentPage === "medtandem" ? style.active_current_page : ""}>   <Link href="/projets/medtandem">Med Tandem</Link></li>
                                    <li className={props.currentPage === "onepalm" ? style.active_current_page : ""}>   <Link href="/projets/onepalm-surf">OnePalm Surf</Link></li>
                                    <li className={props.currentPage === "dashboard" ? style.active_current_page : ""}> <Link href="/projets/dashboard">DashBoard</Link></li>
                                </ul>
                            </div>
                        </div>
                        }
                        {["creationweb", "applicationweb", "ecommerce", "services", "developpement", "conception", "referencement"].includes(props.currentPage) &&
                        <div className={style.sitemap_dynamic_item}>
                            <div className={style.sitemap_dynamic_services}>
                                <ul>
                                    <li className={props.currentPage === "creationweb" ? style.active_current_page : ""}>
                                        <Link href="/services/sitesweb">Création web</Link>
                                    </li>
                                    <li className={props.currentPage === "applicationweb" ? style.active_current_page : ""}>  <Link href="/services/applicationsweb">Applications web</Link></li>
                                    <li className={props.currentPage === "ecommerce" ? style.active_current_page : ""}> <Link href="/services/ecommerce">E-commerce</Link></li>
                                </ul>
                            </div>
                            <div className={style.sitemap_dynamic_sub_services}>
                                <ul>
                                    <li className={props.currentPage === "conception" ? style.active_current_page : ""}>
                                        <Link href="/services/conception">Conception</Link>
                                    </li>
                                    <li className={props.currentPage === "developpement" ? style.active_current_page : ""}>  <Link href="/services/developpement">Développement</Link></li>
                                    <li className={props.currentPage === "referencement" ? style.active_current_page : ""}> <Link href="/services/referencement">Référencement</Link></li>
                                </ul>
                            </div>
                        </div>
                        }
                        {["dashboard", "medtandem", "trendcorner", "onepalm"].includes(props.currentPage) &&
                        <div className={style.sitemap_dynamic_item}>
                            <div className={style.sitemap_dynamic_works}>
                                <ul>
                                    <li className={props.currentPage === "trendcorner" ? style.active_current_page : ""}> <Link href="/projets/trendcorner">Trend Corner</Link></li>
                                    <li className={props.currentPage === "medtandem" ? style.active_current_page : ""}>   <Link href="/projets/medtandem">Med Tandem</Link></li>
                                    <li className={props.currentPage === "onepalm" ? style.active_current_page : ""}>   <Link href="/projets/onepalm-surf">OnePalm Surf</Link></li>
                                    <li className={props.currentPage === "dashboard" ? style.active_current_page : ""}> <Link href="/projets/dashboard">DashBoard</Link></li>
                                </ul>
                            </div>
                        </div>
                        }




                    </div>

                </div>
                <div className={style.footer__middle}>
                    <div className={style.footer__mail}>
                        <p>Pour les nouvelles demandes commerciales :</p>
                        <Link href="/">fedde.leg@gmail.com</Link>
                    </div>
                    <div className={style.footer__social_links}>
                        <span>
                            <Image alt="facebook_logo" src={facebook}/>
                            <Link href="/">FaceBook</Link>
                        </span>
                        <span>
                            <Image alt="instagram_logo" src={instagram}/>
                            <Link href="/">Instagram</Link>
                        </span>

                    </div>
                    <div className={style.footer__adress}>
                        <p>L'Hertimate</p>
                        <p>9 Rue Jeanne Jugan</p>
                        <p>35000 Rennes</p>
                    </div>
                </div>
                <div className={style.footer__bottom}>
                    <h1>pokoù Web</h1>
                </div>
                <div className={style.footer_legal}>
                    <p>© 2021 PokoùWeb, tous droits réservés -</p>
                    <Link href="/mentions-legales">
                        <a> Mentions légales</a>
                    </Link>



                </div>
            </div>
            <div className={style.footer_mobile}>
                <p>Nous libérons nos clients pour qu'ils voient grand avec leur marque.</p>
                <a href="mailto:fedde.leg@gmail.com">fedde.leg@gmail.com</a>

                <div className={style.footer_mobile__social}>
                    <div className={style.footer_social__item}>
                        <Link href="/"><Image alt="facebook_logo" src={facebook}/></Link>
                    </div>
                    <div className={style.footer_social__item}>
                        <Link href="/"><Image alt="instagram_logo" src={instagram}/></Link>
                    </div>





                </div>
                <div className={style.footer_mobile__links}>
                    <div className={style.footer_mobile__links__global}>
                        <ul>
                            <li className={ !props.currentPage ? style.active_current_page : ""}>  <Link href="/">Accueil</Link></li>
                            <li className={`${ props.currentPage === "services" ? style.active_current_page : ""} ${["creationweb", "applicationweb", "ecommerce", "referencement", "developpement", "conception"].includes(props.currentPage) ? style.active_parent_page : "" }`}> <Link href="/services" >Nos services</Link></li>
                            <li className={`${["dashboard", "medtandem", "trendcorner", "onepalm"].includes(props.currentPage) ? style.active_parent_page : "" }`}> <Link href="#">Travaux</Link></li>
                            <li  className={ props.currentPage === "nous" ? style.active_current_page : ""}> <Link href="/about">About</Link></li>
                            <li  className={ props.currentPage === "contact" ? style.active_current_page : ""}> <Link href="/contact" >Contact</Link></li>
                        </ul>
                    </div>

                    {!props.currentPage &&
                    <div className={style.footer_mobile__dynamic_links}>
                        <div className={style.footer_mobile__links__services}>
                            <ul>
                                <li>
                                    <Link href="/services/sitesweb">Création web</Link>
                                </li>
                                <li>  <Link href="/services/applicationsweb">Applications web</Link></li>
                                <li> <Link href="/services/ecommerce">E-commerce</Link></li>
                            </ul>
                        </div>
                        <div className={style.footer_mobile__links__works}>
                            <ul>
                                <li className={props.currentPage === "trendcorner" ? style.active_current_page : ""}> <Link href="/projets/trendcorner">Trend Corner</Link></li>
                                <li className={props.currentPage === "medtandem" ? style.active_current_page : ""}>   <Link href="/projets/medtandem">Med Tandem</Link></li>
                                <li className={props.currentPage === "onepalm" ? style.active_current_page : ""}>   <Link href="/projets/onepalm-surf">OnePalm Surf</Link></li>
                                <li className={props.currentPage === "dashboard" ? style.active_current_page : ""}> <Link href="/projets/dashboard">DashBoard</Link></li>
                            </ul>
                        </div>
                    </div>
                    }
                    {["creationweb", "applicationweb", "ecommerce", "services", "developpement", "conception", "referencement"].includes(props.currentPage) &&
                    <div className={style.footer_mobile__dynamic_links}>
                        <div className={style.footer_mobile__links__services}>
                            <ul>
                                <li className={props.currentPage === "creationweb" ? style.active_current_page : ""}>
                                    <Link href="/services/sitesweb">Création web</Link>
                                </li>
                                <li className={props.currentPage === "applicationweb" ? style.active_current_page : ""}>  <Link href="/services/applicationsweb">Applications web</Link></li>
                                <li className={props.currentPage === "ecommerce" ? style.active_current_page : ""}> <Link href="/services/ecommerce">E-commerce</Link></li>
                            </ul>
                        </div>
                        <div className={style.footer_mobile__links__sub_services}>
                            <ul>
                                <li className={props.currentPage === "conception" ? style.active_current_page : ""}>
                                    <Link href="/services/conception">Conception</Link>
                                </li>
                                <li className={props.currentPage === "developpement" ? style.active_current_page : ""}>  <Link href="/services/developpement">Développement</Link></li>
                                <li className={props.currentPage === "referencement" ? style.active_current_page : ""}> <Link href="/services/referencement">Référencement</Link></li>
                            </ul>
                        </div>
                    </div>
                    }
                    {["dashboard", "medtandem", "trendcorner", "onepalm"].includes(props.currentPage) &&
                    <div className={style.footer_mobile__dynamic_links}>
                        <div className={style.footer_mobile__links__works}>
                            <ul>
                                <li className={props.currentPage === "trendcorner" ? style.active_current_page : ""}> <Link href="/projets/trendcorner">Trend Corner</Link></li>
                                <li className={props.currentPage === "medtandem" ? style.active_current_page : ""}>   <Link href="/projets/medtandem">Med Tandem</Link></li>
                                <li className={props.currentPage === "onepalm" ? style.active_current_page : ""}>   <Link href="/projets/onepalm-surf">OnePalm Surf</Link></li>
                                <li className={props.currentPage === "dashboard" ? style.active_current_page : ""}> <Link href="/projets/dashboard">DashBoard</Link></li>
                            </ul>
                        </div>
                    </div>
                    }











                </div>

                <p className={style.footer_logo}>pokoù Web</p>
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
        </div>
    )
}


/* NOTES
* Pensez qu'il ne faut qu'un seul H1 par page !
* adresse n'est pas bonne !
* */