import style from '../../../../styles/blocs/service_ecommerce/mainInfoBloc.module.scss'
import Image from "next/image";
import test_illu from '../../../../public/landing_illu.svg'
import placeholder from '../../../../public/testmock.png'
import medDesktop from '../../../../public/medtandem_desktop2.png'
import medMobile from '../../../../public/medtandem_mobile_mockup2.png'
import medtandem from '../../../../public/med_tandem_mockup.png'

import medtandemDesktop from '../../../../public/medtandem_desktop.png'
import Link from "next/link";


export default function MedtandemContentBloc2() {

    return (
        <>
            <div className={`${style.main_info__container} ${style.custom_medtandem__background}`}>

                <div className={style.main__info}>
                    <div className={style.main__info__double_image}>
                        <div className={style.medtandem_desktop}>
                            <Image width="963" height="538" lazyBoundary="500px" alt="Medtandem - desktop mockup" src="/pokouweb/medtandem_desktop2_r1mt35_kxsqjs.webp"/>
                        </div>
                        <div className={style.medtandem__mobile}>
                            <Image width="330" height="649" lazyBoundary="500px" alt="Medtandem - mobile mockup" src="/pokouweb/medtandem_mobile_mockup2_wvdb3s_phjyed.webp"/>
                        </div>


                    </div>
                    <div className={style.text_info__container}>
                        <div className={style.text__bloc}>
                            <h2>L'objectif : des visuels modernes et des ajouts de fonctionnalités</h2>
                            <p>A partir de planches réalisées par un web-designer, nous avons refait toutes les pages du site, de la home à l’espace client, en passant par la page concept et par les pages correspondants aux formations, le tout en responsive. Nous avons dynamisé le site en intégrant des éléments dynamiques : caroussels, video, pop-up informative ou s’affichant lorsqu’une action particuière est demandée. Nous avons également améliorer le système de sélection des formations, en permettant de filtrer les formations par dates et lieux disponibles, en affichant seulement les sessions de formation les plus pertinentes. </p>
                            <p>Nous avons également pu améliorer l’expérience client en ajoutant Stripe pour le paiement ainsi qu’un système d’édition de facture. L’administration du site a aussi été améliorée grâce à l’ajout d’un système de génération et validation de certificat de formation.</p>
                            <p>Enfin, le site se transformant et souhaitant capitaliser sur ses formations gratuites afin d’attirer et acquérir de nouveaux clients, nous avons développé de a à Z un nouveau sytème de Webinar: des formations gratuites en streaming (via Zoom). Les webinars disposent de leurs propres visuels, leurs propres parcours, et d’un back-office dédié. Nous avons également implémenté un système de calendrier, avec rappel par mail automatique, un système de rediffusion et un accès simple pour le client.</p>
                        </div>
                    </div>
                    <div className={style.text_info__container}>
                        <div className={style.text__bloc}>
                            <h2>La technologie</h2>
                            <p>Le site medtandem.com a été codé en Ruby et son franmework Ruby on Rails. Pour le frontEnd nous avons modernisé le site en utilisant stimulus.js. </p>
                            <div className={style.techno_logo__container}>
                                <img className={style.ruby_logo} title="Language Ruby" alt="Language ruby" src="/ruby2.svg"/>
                                <img className={style.rails_logo} title="Framework Ruby On Rails" alt="Framework Ruby On Rails" src="/rails.svg"/>
                                <img className={style.stimulus_logo} title="Stimulus.js" alt="Stimulus.js" src="/stimulusjs.svg"/>
                            </div>

                            <Link href=""><a>
                                En savoir plus sur les technologies
                            </a></Link>

                        </div>


                    </div>
                    <div className={style.main__info__image__long__medtandem_2}>
                        <Image layout={"fill"} lazyBoundary="500px" alt="Medtandem design" src="/pokouweb/med_tandem_mockup_veoqcc_gb0wzk.webp"/>
                        <Image src={medtandem}/>

                    </div>



                </div>




            </div>

            <div className={style.main_info__container__green}>

            </div>

        </>



    )
}