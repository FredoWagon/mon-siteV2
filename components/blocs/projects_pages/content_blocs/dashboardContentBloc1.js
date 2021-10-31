import style from '../../../../styles/blocs/service_ecommerce/mainInfoBloc.module.scss'
import Image from "next/image";
import test_illu from '../../../../public/landing_illu.svg'
import placeholder from '../../../../public/testmock.png'
import medtandemDesktop from '../../../../public/medtandem_desktop.png'

import Link from "next/link";


export default function DashboardContentBloc1() {

    return (
        <>
            <div className={ `${style.main_info__container} ${style.dashboard__info__container}` }>
                <div className={style.main__info}>
                    <div className={`${style.text_info__container} ${style.developpement__text_info}`}>
                        <div className={style.text__bloc}>
                            <h2 className={style.developpement__big_title}>Dashboard</h2>
                            <p>Dashboard est une application métier de gestion d'annonces que nous avons créé pour le compte d'une agence Immobilière Rennaise. L'entreprise était désireuse de rationnaliser ses outils de gestion d'annonce en ligne en un seul outil performant.</p>

                        </div>
                    </div>
                    <div className={style.main__info__image__long__itineraire1}>
                        <Image layout={"fill"} objectFit={"contain"} lazyBoundary="500px" alt="Medtandem mockup" src="/pokouweb/dashboard_mockup_multi_bzharu_lo6fkw.webp"/>
                    </div>

                    <div className={style.text_info__container}>
                        <div className={style.text__bloc}>
                            <h2 >Un outil interne de gestion d'annonces moderne</h2>
                            <p>Dashboard est un bureau virtuel en ligne qui réunit tous les outils nécessaire à la gestion d'annonces immobilières tout en bénéficiant des fonctionnalités moderne.  </p>
                            <p>L'application permet de créer des espaces dédié à chaque intervenant de l'agence afin qu'il puisse gérer son portefeuille de logement. Il dispose ainsi d'un outil lui permettant de rajouter/modifier/archiver des logements, de suivre l'activité de son annonce en ligne en recevant des notifications ainsi qu'un suivi statistique précis. Dashboard centralise les échanges de mails et permet également l'envoi automatique des documents administratifs. L'application est multi-plateforme et sa base de données est hébergé sur le cloud.  </p>
                        </div>
                        <div className={style.text__bloc}>
                            <h2 >Conception</h2>
                            <p>Afin d'avoir une application qui puisse gérer un grand nombre d'intéractions avec la base de données sans que cela nuise à la fluidité d'utilisation nous avons opté pour une partie serveur en node.js/express.js et une base de donnée MongoDB.</p>
                            <p>Pour que l'outil soit le plus agréable possible il nous a semblé optimal d'utiliser la technologie React.js couplé d'un design simple mais efficace.</p>
                        </div>
                        <div className={`${style.dashboard_techno__text_bloc} ${style.text__bloc}`}>
                            <h2 >La technologie</h2>
                            <div className={style.techno_logo__container}>
                                <img className={style.react_logo} alt="React.js logo" title="Framework React.js" src="/react.svg"/>
                                <img className={style.nodejs_logo} alt="Node.js logo" title="Moteur Node.js" src="/nodejs.svg"/>
                                <img className={style.expressjs_logo__black} alt="Express.js logo" title="Framework Express.js" src="/expressjs.svg"/>
                                <img className={style.mongo_logo} alt="MongoDB logo" title="Base de donnée MongoDB" src="/mongo.svg"/>
                            </div>
                            <Link href="/nos-services/technologies"><a className={style.text__bloc__white_link}>
                                En savoir plus sur les technologies
                            </a></Link>
                        </div>
                    </div>

                    <div className={style.main__info__image__long__dashboard_2}>
                        <Image layout={"fill"} lazyBoundary="500px" alt="Medtandem design" src="/pokouweb/dashboard_card_eax3rx_lqjzrp.webp"/>


                    </div>



                </div>





            </div>

        </>



    )
}