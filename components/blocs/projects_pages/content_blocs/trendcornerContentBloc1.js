import style from '../../../../styles/blocs/service_ecommerce/mainInfoBloc.module.scss'
import Image from "next/image";
import test_illu from '../../../../public/landing_illu.svg'
import placeholder from '../../../../public/testmock.png'
import medtandemDesktop from '../../../../public/medtandem_desktop.png'
import trendcorder1 from '../../../../public/trend_corner_page_pic_one.png'
import  trendcorner2 from '../../../../public/trend_corner_page_pic_two.png'
import trenddesktop from '../../../../public/trendcorner_desktop.png'

import Link from "next/link";


export default function TrendcornerContentBloc1() {

    return (

            <div className={ `${style.main_info__container} ${style.custom_trendcorner__background}` }>
                <div className={style.main_info__long_image}>
                    <div className={style.long_image__container}>
                        <div className={ `${style.long_image__content} ${style.trend_corner__first_image}`}>
                            <Image  lazyBoundary="500px" alt="Developpement application" layout={"fill"} src="/pokouweb/trend_corner_page_pic_one_rgfjkt_nqncyg.webp"/>
                        </div>
                        <div>

                        </div>
                    </div>

                </div>
                <div className={style.main__info}>

                    <div className={style.text_info__container}>
                        <div className={style.text__bloc}>
                            <h2 >Une interface de trading en ligne innovante</h2>
                            <p>Trend Corner est une jeune startup spécialisée dans le trading de crypto-monnaies. Elle propose, moyennant un abonnement mensuel, un espace personnel de trading complet muni d'outils avancés afin de pouvoir passer des ordres sur les différents marché crypto. Son innovation majeure tient au fait qu'elle propose également un outil puissant de flux d'informations spécialisé en temps réel.</p>
                        </div>
                    </div>
                </div>
                <div className={style.main__info__image__long}>
                    <Image layout={"fill"} lazyBoundary="500px"   alt="Trend Corner - design" src="/pokouweb/trend_corner_page_pic_two_khf95h_qe6yeq.webp"/>
                </div>
                <div className={style.main__info}>

                    <div className={ `${style.no_bottom_margin} ${style.text_info__container}`}>
                        <div className={style.text__bloc}>
                            <h2>Réalisation</h2>
                            <p>Pour le passage des ordres nous passerons par l'api Binance, leader dans le domaine du trade de cryptio-monnaie. Afin d'avoir les outils visuels nécessaire à la compréhension du marché nous allons utiliser des API de graph, user de notre créativité et nous appuyer sur les visuels designé par nos soins.</p>
                            <p>L'outil d'aggrégation d'information nous demande de mettre en place des websockets afin de lier en temps réel notre application au marché. </p>
                            <p>La gestion des paiments et des abonnement seront géré à travers Stripe.</p>
                        </div>
                        <div className={style.text__bloc}>
                            <h2 >La technologie</h2>
                            <p>Une plateforme de trading nécéssite des technologies spécifiques répondant à des exigences claires : une grande rapidité d'éxecution et une expérience utilisateur optimisée. Nous avons opté pour un backEnd node.js avec le framework express.js et react.js pour le frontEnd. Profitant des executions non bloquante de node.js et de la réactivité sans pareil de react.js.</p>
                            <p>Pour la base de donnée, nous utilisons MongoDB</p>
                           <div className={style.techno_logo__container}>
                               <img className={style.react_logo} alt="React.js logo" title="Framework React.js" src="/react.svg"/>
                               <img className={style.nodejs_logo} alt="Node.js logo" title="Moteur Node.js" src="/nodejs.svg"/>
                               <img className={style.expressjs_logo__white} alt="Express.js logo" title="Framework Express.js" src="/expressjs.svg"/>
                               <img className={style.mongo_logo} alt="MongoDB logo" title="Base de donnée MongoDB" src="/mongo.svg"/>
                               <img className={style.stripe_logo} title="Paiment Stripe" alt="Stripe logo" src="/stripe.svg"/>
                           </div>

                            <Link href="/nos-services/technologies"><a className={style.text__bloc__white_link}>
                                En savoir plus sur les technologies
                            </a></Link>
                        </div>
                    </div>

                    <div className={style.main__info__image}>
                        <Image width="1376" priority={true} height="769"  lazyBoundary="500px"   alt="Trend Corner - mockup" src="/pokouweb/trendcorner_desktop_ssb8is_l5shdh.png"/>
                    </div>
                </div>






            </div>






    )
}