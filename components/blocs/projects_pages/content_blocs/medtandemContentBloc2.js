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
                            <Image src={medDesktop}/>
                        </div>
                        <div className={style.medtandem__mobile}>
                            <Image src={medMobile}/>
                        </div>


                    </div>
                    <div className={style.text_info__container}>
                        <div className={style.text__bloc}>
                            <h2>Des visuels élégants et une marque plus forte</h2>
                            <p>Le nouveau MedTandem.com est beaucoup plus clair et frais en apparence. Les visuels repensés soutiennent la marque et l'image de qualité de MedTandem. Du point de vue de l'utilisateur, les transactions sur le site sont beaucoup améliorées.</p>
                            <p>Le point de départ de la conception du look visuel était la marque et les avantages concurrentiels de Mafy. Nous nous sommes demandé pourquoi quelqu'un choisit Mafy plutôt que ses concurrents et sur quoi repose le succès de la marque. Les nouveaux visuels devaient refléter le caractère unique de Mafy, les valeurs de l'entreprise, ses avantages concurrentiels et renforcer davantage la marque.</p>

                            <p>La nouvelle structure plus robuste rend le site beaucoup plus accrocheur. Les différences entre les types de produits sont plus faciles à comprendre : le site met mieux en évidence les différences entre les cours en auto-apprentissage, l'enseignement à distance et les cours en présentiel. L'un des souhaits des clients était également d'accroître la popularité des cours à distance et de vendre des services supplémentaires aux étudiants.</p>
                            <p>Nous avons également investi dans la visibilité de Mafy sur les moteurs de recherche et sa présence sur les réseaux sociaux. Sur la base d'une recherche de mots clés, nous avons choisi des termes de recherche pertinents pour apparaître dans les résultats des moteurs de recherche organiques et payants. Nous travaillons constamment avec Mafy pour renforcer sa présence numérique auprès des bons groupes cibles.</p>
                        </div>
                        <div className={style.text__bloc}>
                            <h2>Une navigation claire et un parcours d'achat intuitif</h2>
                            <p>Sur l'ancien site, la navigation était généralisée et rendait le site plus complexe qu'il ne l'était en réalité. Il y avait plusieurs niveaux de navigation principaux, les groupes cibles étaient flous et il était difficile pour l'utilisateur de démarrer le processus d'achat. La navigation a été améliorée avec des niveaux principaux clairs en fonction des groupes cibles – enseignants et étudiants.</p>
                            <p>Auparavant, faire un achat était caché derrière plusieurs clics. Désormais, le site dispose d'un Register-CTA clair et d'une boutique en ligne. Dans son ensemble, la structure du site prend en charge les achats. Dans les vues mobiles, les niveaux principaux sont mis en évidence et les autres pages sont présentées avec une priorité inférieure. Inscription et panier d'achat en un seul clic.</p>

                        </div>

                    </div>
                    <div className={style.main__info__image}>
                        <Image src={medtandem}/>

                    </div>
                    <div className={style.text_info__container}>
                        <div className={style.text__bloc}>
                            <h2>Clarifier le contenu et identifier les groupes cibles</h2>
                            <p>Mafy est surtout connu pour ses cours de coaching. D'un autre côté, les enseignants connaissent généralement Mafynet et les réponses du modèle d'examen. Nous voulions vendre les cours aux étudiants de manière plus efficace et informer davantage les enseignants sur les supports pédagogiques de Mafy. Le site devait donc communiquer deux messages principaux. Mafy souhaitait également être davantage présenté en tant qu'éditeur de matériel d'apprentissage, ainsi le site propose désormais plus de contenu de qualité pour les enseignants.</p>
                            <p>Nous avons identifié quatre groupes cibles principaux pour Mafy. Les candidats à l'université recherchent des informations sur les examens d'entrée et souhaitent en savoir plus sur la formation dans les domaines médical, technique et commercial. Le contenu d'activation sur le site comprend du matériel de révision du baccalauréat, des produits de coaching et du matériel de préparation aux examens d'entrée à l'université. Les lycéens, quant à eux, utilisent Mafy pendant leurs études et lors de la préparation des examens du baccalauréat. Ils reçoivent du matériel de révision, des produits de coaching et d'autres contenus utiles.</p>

                            <p>Les enseignants se retrouvent généralement sur le site à la recherche d'informations. Le contenu qui leur est destiné comprend les réponses aux examens, la commande de licences et d'instructions, le matériel de cours et un bulletin d'information pour les enseignants. Les conseillers d'études du secondaire, à leur tour, soutiennent les étudiants et leur recommandent des cours de coaching. Mafy leur propose des conseils d'étude et à l'avenir également des webinaires.</p>

                        </div>
                        <div className={style.text__bloc}>
                            <h2>Faciliter la maintenance du site</h2>
                            <p>Sur le site précédent, les informations devaient être saisies à de nombreux endroits différents. Étant donné que la boutique en ligne fait partie intégrante du site, il est facile d'apporter des informations sur les cours dans les pages de destination. Cela simplifie le travail des créateurs de contenu.</p>
                            <p>Dans le passé, le site manquait également d'une place pour le contenu des articles. Mafy produit de nombreux contenus utiles et de haute qualité, tels que des modèles de réponses aux examens, des conseils de lecture et des conseils pour les examens d'entrée. Désormais, toutes les informations sont automatiquement ajoutées aux pages de destination pertinentes.</p>

                        </div>

                    </div>


                </div>




            </div>

            <div className={style.main_info__container__green}>

            </div>

        </>



    )
}