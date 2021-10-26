import style from '../../../../styles/blocs/service_ecommerce/mainInfoBloc.module.scss'
import Image from "next/image";
import test_illu from '../../../../public/landing_illu.svg'
import placeholder from '../../../../public/testmock.png'
import medtandemDesktop from '../../../../public/medtandem_desktop.png'
import trendcorder1 from '../../../../public/trend_corner_page_pic_one.png'
import  trendcorner2 from '../../../../public/trend_corner_page_pic_two.png'
import trenddesktop from '../../../../public/trendcorner_desktop.png'

import Link from "next/link";


export default function OnePalmContentBloc() {

    return (
        <>
            <div className={ `${style.main_info__container} ${style.custom_trendcorner__background}` }>
                <div className={style.main__info}>
                    <div className={style.text_info__container}>
                        <div className={style.text__bloc}>
                            <h2>Une école de surf et <br/> une e-boutique</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ducimus ea, eligendi excepturi expedita id illum inventore ipsam nemo nulla quae quis, soluta, temporibus veniam vitae? Fugiat perferendis rem tempora!</p>
                        </div>
                    </div>
                </div>
                <div className={style.main__info__image}>
                    <Image src={trendcorner2}/>
                </div>
                <div className={style.main__info}>

                    <div className={style.text_info__container}>
                        <div className={style.text__bloc}>
                            <h2>Une refonte complète</h2>
                            <p>Le site de ce client nécessitait un coup de fraîcheur depuis sa création. Il fallait distinguer et mettre en valeur les deux activités, ajuster un grand nombre de bugs, le rendre responsive et le traduire dans trois langues. D’autre part le client dispose d’une offre exclusive de planche de surf qu’il a été conseillé de mettre en avant.</p>
<p>Une première étude des forces et points d’améliorations validée par le client, le nouveau site a été mis en staging puis travaillé sans interférer avec le site en cours.  </p>
                        </div>
                        <div className={style.text__bloc}>
                            <h2 >Conception</h2>
                            <p>Le site est réalisé via le CMS WordPress que le client utilisait déjà sur lequel se greffe Elementor Pro pour construire les différentes pages. Viennent se greffer plusieurs extensions pour: traiter les envois de mails, les formulaires, la gestion des pages traduites etc…</p>
                            <p>Plusieurs blocs de CSS additionnels ont été ajouté pour palier aux limites de l’outil et proposer une expérience entièrement personnalisée au client et à l’utilisateur peu importe le support.</p>
                        </div>
                        <div className={style.text__bloc}>
                            <h2>La technologie</h2>
                            <p>Onepalm-Surf est conçu avec le gestionnaire de contenu Wordpress.</p>
                            <div className={style.techno_logo__container}>
                                <img className={style.wordpress_logo__white} alt="CMS WordPress logo" title="CMS WordPress" src="/wordpress.svg"/>
                            </div>
                            <Link href=""><a className={style.text__bloc__white_link}>
                                En savoir plus sur les technologies
                            </a></Link>

                        </div>
                    </div>
                    <div className={style.main__info__image}>
                        <Image src={trenddesktop}/>
                    </div>
                </div>





            </div>

            <div className={style.main_info__container__green}>

            </div>

        </>



    )
}