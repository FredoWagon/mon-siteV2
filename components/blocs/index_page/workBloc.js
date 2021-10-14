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

                            <Link href="/">
                                <a>Nos travaux</a>
                            </Link>
                        </FadeTranslateTopWhenVisible>
                    </div>


                <Link href="/projets/trendcorner">
                    <div className={  `${style.work_item__container} ${style.work_item_new}`  }>
                        <FadeTranslateTopWhenVisible tresholdOption={0.2} animation="middle">
                        <div className={style.work_item}>
                            <div className={style.work_item__image__container}>
                                <div className={style.work_item__image}>
                                    <div className={style.view_project}>
                                        <p>Voir la projet</p>
                                    </div>
                                    <div className={style.new_project_round}>
                                        <p>Nouveau</p>
                                        <p>projet</p>
                                    </div>
                                    <Image lazyBoundary="500px" layout="fill" src={trend_corner}/>
                                </div>
                            </div>
                            <div className={style.work_item__text}>
                                <div className={style.work_item_title}>
                                    <div className={style.title_animation_blue}></div>
                                    <h3>Trend Corner</h3>
                                </div>
                                <p>Un site Web pour l'application qui rend la lecture de musique légale pour les entreprises.</p>

                            </div>


                        </div>
                        </FadeTranslateTopWhenVisible>
                    </div>
                </Link>



               <Link href="/projets/medtandem">
                <div className={`${style.work_item__container} ${style.work_item_translate}`}>

                    <FadeTranslateTopWhenVisible tresholdOption={0.2} animation="middle">
                    <div className={style.work_item}>
                        <div className={style.work_item__image__container}>
                            <div className={style.work_item__image}>
                                <div className={style.view_project}>
                                    <p>Voir la projet</p>
                                </div>
                                <Image lazyBoundary="500px" layout="fill" src={medtandem}/>
                            </div>
                        </div>
                        <div className={style.work_item__text}>
                            <div className={style.work_item_title}>
                                <div className={style.title_animation_blue}></div>
                                <h3>MedTandem</h3>
                            </div>

                            <p>Un site Web pour l'application qui rend la lecture de musique légale pour les entreprises.</p>

                        </div>


                    </div>
                    </FadeTranslateTopWhenVisible>
                </div>
               </Link>
                <Link href="/projets/onepalm-surf">
                    <div className={style.work_item__container}>
                        <FadeTranslateTopWhenVisible tresholdOption={0.2} animation="middle">
                            <div className={style.work_item}>
                                <div className={style.work_item__image__container}>
                                    <div className={style.work_item__image}>
                                        <div className={style.view_project}>
                                            <p>Voir la projet</p>
                                        </div>
                                        <Image lazyBoundary="500px"  layout="fill" src={onepalm}/>
                                    </div>
                                </div>
                                <div className={style.work_item__text}>
                                    <div className={style.work_item_title}>
                                        <div className={style.title_animation_blue}></div>
                                        <h3>Onepalm surf</h3>
                                    </div>
                                    <p>Un site Web pour l'application qui rend la lecture de musique légale pour les entreprises.</p>

                                </div>


                            </div>
                        </FadeTranslateTopWhenVisible>
                    </div>
                </Link>
                <Link href="/projets/dashboard">
                <div className={ `${style.work_item__container} ${style.work_item_translate}`}>
                    <FadeTranslateTopWhenVisible tresholdOption={0.2} animation="middle">
                    <div className={style.work_item}>
                        <div className={style.work_item__image__container}>
                            <div className={style.work_item__image}>
                                <div className={style.view_project}>
                                    <p>Voir la projet</p>
                                </div>
                                <Image lazyBoundary="500px" layout="fill" src={testmock}/>
                            </div>
                        </div>
                        <div className={style.work_item__text}>
                            <div className={style.work_item_title}>
                                <div className={style.title_animation_blue}></div>
                                <h3>DashBoard</h3>
                            </div>
                            <p>Un site Web pour l'application qui rend la lecture de musique légale pour les entreprises.</p>

                        </div>


                    </div>
                    </FadeTranslateTopWhenVisible>
                </div>
                </Link>

            </div>

        </div>
    )
}