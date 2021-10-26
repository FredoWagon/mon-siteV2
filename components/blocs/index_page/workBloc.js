import style from '../../../styles/blocs/index_page/WorkBloc.module.scss'
import Image from 'next/image'
import trend_corner from '../../../public/trend_corner_vignet.png'
import medtandem from '../../../public/med_tandem_mockup.png'
import testmock from '../../../public/testmock.png'
import onepalm from '../../../public/onepalm_card.png'
import FadeTranslateTopWhenVisible from "../../effects/FadeTranslateTopWhenVisible";
import Link from "next/link";

export default function WorkBloc() {


    return (
        <div className={style.work_bloc__container}>
            <div className={style.work_bloc}>

                <div id="travaux_anchor" className={style.work_intro}>
                    <FadeTranslateTopWhenVisible tresholdOption={0.3} triggerOnceOption={false} animation="middle_mark_bleu">
                        <h2>Nos derniers <mark>projets</mark> </h2>
                        <p>Regardez ce que nous pouvons créer ensemble, épaule contre épaule. Une excellente communication et des processus bien construits sont les clés du monde des projets parfaitement adaptés.</p>


                    </FadeTranslateTopWhenVisible>
                </div>


                <Link href="/travaux/trendcorner">
                    <a className={  `${style.work_item__container} ${style.work_item_new}`  }>
                        <FadeTranslateTopWhenVisible tresholdOption={0.2} animation="middle">
                            <div className={style.work_item}>
                                <div className={style.work_item__image__container}>
                                    <div className={style.work_item__image}>
                                        <div className={style.view_project}>
                                            <p>Voir le projet</p>
                                        </div>
                                        <div className={style.new_project_round}>
                                            <p>Nouveau</p>
                                            <p>projet</p>
                                        </div>
                                        <Image lazyBoundary="500px" alt="Trend corner - projet" layout="fill" src="/pokouweb/trend_corner_vignet_cfnxeb_wh7kyx.webp"/>
                                    </div>
                                </div>
                                <div className={style.work_item__text}>
                                    <div className={style.work_item_title}>
                                        <div className={style.title_animation_blue}></div>
                                        <h3>Trend Corner</h3>
                                    </div>
                                    <p>Une application web innovante de trading sur les crypto-monnaies pour une jeune startup qui a des visées internationale.</p>

                                </div>


                            </div>
                        </FadeTranslateTopWhenVisible>
                    </a>
                </Link>



                <Link href="/travaux/medtandem">
                    <a className={`${style.work_item__container} ${style.work_item_translate}`}>

                        <FadeTranslateTopWhenVisible tresholdOption={0.2} animation="middle">
                            <div className={style.work_item}>
                                <div className={style.work_item__image__container}>
                                    <div className={style.work_item__image}>
                                        <div className={style.view_project}>
                                            <p>Voir le projet</p>
                                        </div>
                                        <Image lazyBoundary="500px" alt="Medtandem - projet" layout="fill" src="/pokouweb/med_tandem_mockup_veoqcc_suqdej.webp"/>

                                    </div>
                                </div>
                                <div className={style.work_item__text}>
                                    <div className={style.work_item_title}>
                                        <div className={style.title_animation_blue}></div>
                                        <h3>MedTandem</h3>
                                    </div>

                                    <p>Une application web qui propose de l'apprentissage en ligne pour les professionnels de santé.</p>

                                </div>


                            </div>
                        </FadeTranslateTopWhenVisible>
                    </a>
                </Link>
                <Link href="/travaux/onepalm-surf">
                    <a className={style.work_item__container}>
                        <FadeTranslateTopWhenVisible tresholdOption={0.2} animation="middle">
                            <div className={style.work_item}>
                                <div className={style.work_item__image__container}>
                                    <div className={style.work_item__image}>
                                        <div className={style.view_project}>
                                            <p>Voir le projet</p>
                                        </div>
                                        <Image lazyBoundary="500px" alt="One palm - projet" layout="fill" src="/pokouweb/onepalm_card_bjcyv6_hydfyr.webp"/>
                                    </div>
                                </div>
                                <div className={style.work_item__text}>
                                    <div className={style.work_item_title}>
                                        <div className={style.title_animation_blue}></div>
                                        <h3>Onepalm surf</h3>
                                    </div>
                                    <p>Un site Web qui conjugue une boutique e-commerce et une plateforme pour une école sur le thème du surf.  </p>

                                </div>


                            </div>
                        </FadeTranslateTopWhenVisible>
                    </a>
                </Link>
                <Link href="/travaux/dashboard">
                    <a className={ `${style.work_item__container} ${style.work_item_translate}`}>
                        <FadeTranslateTopWhenVisible tresholdOption={0.2} animation="middle">
                            <div className={style.work_item}>
                                <div className={style.work_item__image__container}>
                                    <div className={style.work_item__image}>
                                        <div className={style.view_project}>
                                            <p>Voir le projet</p>
                                        </div>
                                        <Image lazyBoundary="500px" alt="Dashboard - projet" layout="fill" src="/pokouweb/dashboard_card_eax3rx_hsrosb.webp"/>
                                    </div>
                                </div>
                                <div className={style.work_item__text}>
                                    <div className={style.work_item_title}>
                                        <div className={style.title_animation_blue}></div>
                                        <h3>DashBoard</h3>
                                    </div>
                                    <p>Une application métier de gestion d'annonces immobilière créée sur mesure pour le compte d'une agence immobilière.</p>

                                </div>


                            </div>
                        </FadeTranslateTopWhenVisible>
                    </a>
                </Link>
                <Link href="/travaux/itineraires-vignobles">
                    <a className={style.work_item__container}>
                        <FadeTranslateTopWhenVisible tresholdOption={0.2} animation="middle">
                            <div className={style.work_item}>
                                <div className={style.work_item__image__container}>
                                    <div className={style.work_item__image}>
                                        <div className={style.view_project}>
                                            <p>Voir le projet</p>
                                        </div>
                                        <Image lazyBoundary="500px" alt="One palm - projet" layout="fill" src="/pokouweb/init_C3_A9naires_vignoble_actjqx_vtfg5u.webp"/>
                                    </div>
                                </div>
                                <div className={style.work_item__text}>
                                    <div className={style.work_item_title}>
                                        <div className={style.title_animation_blue}></div>
                                        <h3>Itinéraires vignobles</h3>
                                    </div>
                                    <p>Un site Web qui propose de créer des parcours de visite à travers les vignobles du Bordelais. </p>

                                </div>


                            </div>
                        </FadeTranslateTopWhenVisible>
                    </a>
                </Link>
                <Link href="/contact">
                    <a className={ `${style.work_item__container} ${style.work_item_translate}`}>
                        <FadeTranslateTopWhenVisible tresholdOption={0.2} animation="middle">
                            <div className={style.work_item}>
                                <div className={style.work_item__image__container}>
                                    <div className={style.work_item__your_project}>
                                        <div className={style.your_project__content}>
                                            <h5>Et si vous nous parliez de votre projet ?</h5>
                                            <div className={style.your_project__image}>
                                                <Image layout={"fill"} objectFit={'contain'} src="/pokouweb/Communications_jpu069_drpn5h.webp"/>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </FadeTranslateTopWhenVisible>
                    </a>
                </Link>

            </div>

        </div>
    )
}