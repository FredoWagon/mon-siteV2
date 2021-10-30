import style from '../../../../styles/blocs/service_ecommerce/mainInfoBloc.module.scss'
import Image from "next/image";
import test_illu from '../../../../public/landing_illu.svg'
import placeholder from '../../../../public/testmock.png'
import medtandemDesktop from '../../../../public/medtandem_desktop.png'
import Link from "next/link";



export default function ItineraireContentBloc1() {

    return (
        <>
            <div className={`${style.main_info__container} ${style.custom_itineraire__background}`}>
                <div className={style.main__info}>
                    <div className={`${style.itineraire__text_info} ${style.text_info__container}`}>
                        <div className={style.text__bloc}>
                            <h2>Une ballade à travers <br/> les vignes</h2>
                            <p>Itinéraires-vignobles propose aux curieux voyageurs qui passent par le bordelais de les aider à s'informer sur les vignobles de la région et, plus particulièrement, de les aider à planifier des itinéraires agréable et ludique ! </p>
                            <p>Le site collabore avec un grand nombre de châteaux qui, pour chacun d'eux, propose une page dédiée pour que les visiteurs puisse en apprendre d'avantage sur son histoire, sa localité, ainsi que des photos et des informations pratiques. </p>

                        </div>
                    </div>


                </div>
                <div className={style.main__info__image__long__itineraire1}>
                    <Image layout={"fill"} objectFit={"contain"} lazyBoundary="500px" alt="Medtandem mockup" src="/pokouweb/mockup_itinerairev3_wuqqqr_gz7jhv.webp"/>
                </div>
                <div className={style.main__info}>
                <div className={`${style.itineraire__text_info2} ${style.text_info__container}`}>
                    <div className={style.text__bloc}>
                        <h2>Un project existant qui veut aller plus loin</h2>
                        <p>Le site Itinéraires-vignobles est un site existant, joliement produit par l'agence <a href="https://agenceadvb.com/" rel="noreferrer noopener" target="_blank">ADVB</a>, qui désirait améliorer l'expérience utilisateur en rapprochant le visiteur du site des châteaux et des vignobles.</p>
                        <p>Nous avons créé un système de formulaire modulable pour que les utilisateurs puissent directement contacter les vignobles ainsi que de planifier une visite, une dégustation et d'autres prestations. Egalement, nous avons renforcé l'administration du site d'un système de suivi statistique de ces formulaires afin d'affiner le suivi des utilisateurs et ainsi de préparer le futur des fonctionnalités.</p>
                        <p>De nouveaux vignobles et châteaux prenant part à l'aventure Itinéraires-vignobles a nécessité que nous créions de nouvelles pages. Ce qui a piqué notre créativité, en produisant de jolies visuels et fonctionnalités, ainsi que notre soif du vin ! </p>
                    </div>
                </div>
                </div>

                <div className={style.main__info}>
                    <div className={style.text_info__container}>
                        <div className={style.text__bloc}>
                            <h2>La technologie</h2>
                            <p>Le site Itinéraires-vignobles a été construit grâce au "système de gestion de contenu" (CMS) : Joomla.</p>
                            <div className={style.techno_logo__container}>
                                <img className={style.joomla_logo} title="CMS Joomla" src="/Joomla!-Logo.svg"/>
                            </div>
                            <Link href="/nos-services/technologies"><a>
                                En savoir plus sur les technologies
                            </a></Link>
                         </div>
                    </div>
                    <div className={style.main__info__image__long__itineraire2}>
                        <Image layout={"fill"} objectFit={"contain"} lazyBoundary="500px" alt="Medtandem mockup" src="/pokouweb/itineraire_mockup2_mis4i1_ojjrau.webp"/>
                    </div>
                </div>







            </div>

            <div className={style.main_info__container__green}>

            </div>

        </>



    )
}