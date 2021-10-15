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
                            <h2>Présentation du projet</h2>
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
                            <h2 >Concept</h2>
                            <p>Le Slush PWA est une application basée sur un navigateur qui permet un développement agile et offre une expérience utilisateur transparente. Les 20 000 techniciens pourraient créer leur propre emploi du temps, mettre en signet leurs conférenciers et restaurants préférés et profiter au maximum de leur expérience à Slush.</p>
                            <p>Notre solution a rendu l'expérience plus interactive et fluide, nous a permis de réagir rapidement aux changements et a permis d'atteindre les visiteurs avec des notifications ou des messages en temps opportun.</p>
                        </div>
                        <div className={style.text__bloc}>
                            <h2 >La technologie</h2>
                            <p>Alors, à quoi servent ces applications Web progressives ? Au lieu d'avoir à télécharger l'application à partir d'un magasin d'applications, l'utilisateur peut simplement visiter l'URL et enregistrer l'application sur son écran d'accueil. En utilisant l'API Service Worker, la PWA a l'apparence d'une application native tout en travaillant dans le navigateur. Cela le rend indépendant de l'appareil, facile à utiliser et rapide à entretenir.</p>
                            <p>Notre solution a rendu L'application Slush utilise WordPress comme backend, rendant la saisie de contenu aussi facile que pour n'importe quel site WordPress. Le contenu est ensuite récupéré via l'API WordPress Rest vers l'application basée sur React + Redux. La mise en cache intelligente dans la PWA la rend rapide et conviviale hors ligne, comme toute application native. L'application Slush a également été intégrée à la plate-forme Slush via la connexion Firebase de Google, et les réunions qui y étaient organisées pouvaient être récupérées sur My Slush. plus interactive et fluide, nous a permis de réagir rapidement aux changements et a permis d'atteindre les visiteurs avec des notifications ou des messages en temps opportun.</p>
                        </div>
                        <div className={style.text__bloc}>
                            <h2 >Concevoir</h2>
                            <p>Pour que l'application fonctionne comme le meilleur ami d'un visiteur de Slush, nous voulions en faire une extension du cerveau . L'aspect et la convivialité familiers de Slush ont été convertis en un design optimisé pour une utilisation en déplacement. L'ajout de conférenciers, de conférences et de déjeuners à l'agenda de l'utilisateur a été simplifié à tous les niveaux.</p>
                            <p>Le thème sombre rend l'application agréable pour les yeux et réduit l'utilisation de la batterie. Des détails précis dans l'interface utilisateur, rappelant les lasers perçant l'air brumeux de Messukeskus, guident l'utilisateur à travers chaque interaction. Des transitions fluides ajoutent ce petit plus pour donner l'impression que n'importe quelle application native pourrait le faire.</p>
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