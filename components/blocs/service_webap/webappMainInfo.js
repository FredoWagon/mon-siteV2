import style from '../../../styles/blocs/service_webapp/webappMainInfo.module.scss'
import Image from "next/image";
import webAppIllu from '../../../public/webapp_pic.jpg'
import placeholder from '../../../public/testmock.png'
import Link from "next/link";


export default function WebappMainInfo() {

    return (
        <>
            <div className={style.main_info__container}>
                <div className={style.main__info__intro_image}>
                    <Image  lazyBoundary="500px" alt="Developpement application" layout={"fill"} src="/pokouweb/webapp_pic_vsklma_ds6zef.webp"/>
                </div>

                <div className={style.main__info}>
                    <div className={style.text_info__container}>
                        <div className={style.text__bloc}>
                            <h2>Services numériques polyvalents pour le Web, le
                                mobile et le bureau</h2>
                           <p>Nous vous aidons à atteindre votre plein potentiel en ligne en créant des solutions qui se concentrent sur vos besoins. Nous proposons également un support stratégique et une gamme complète de services autour du produit final numérique, garantissant que le développement se poursuit même après la sortie. Nous ne nous contentons pas de créer des applications, nous créons des plates-formes évolutives pour répondre aux besoins de votre entreprise. Il n'y a pas de solution unique - <Link href="/contact"><a
                               >contactez-nous</a></Link>  pour trouver la technologie qui vous convient .</p>

                        </div>
                        <div className={style.text__bloc}>
                            <h2>Une application Web est le moyen le plus pratique de créer un service SaaS.</h2>
                            <p>Les applications Web sont des sites Web traditionnels dotés de fonctionnalités riches conçues pour fournir divers services. Les applications Web s'exécutent automatiquement sur tous les appareils et sont optimisées pour une utilisation mobile. Le principal avantage d'une application Web est qu'elle n'a pas besoin d'être installée sur l'appareil comme une application native - l'utilisateur n'a besoin que d'une adresse Web et le service s'ouvre directement dans le navigateur.</p>
                            <p>Les applications Web utilisent une base de code unifiée, ce qui signifie des coûts de développement inférieurs et une maintenance plus simple par rapport aux applications natives. L'application Web peut être facilement repensée pour répondre à vos besoins sans les barrières des magasins d'applications. Lorsque vous souhaitez implémenter une nouvelle fonctionnalité, c'est aussi simple que de mettre à jour un site Web.</p>

                        </div>
                        <div className={style.text__bloc}>
                            <h2>PWA combine le meilleur des applications natives et réseau.</h2>
                            <p>PWA intègre la facilité d'utilisation des applications natives dans les applications Web standard. L'utilisateur peut installer l'application sur l'écran d'accueil de son appareil mobile directement depuis le site Web en appuyant sur un bouton.</p>
                            <p>Le plus grand avantage de PWA est sa commodité : la technologie est aussi naturelle qu'un site Web, mais offre à l'utilisateur plusieurs avantages supplémentaires. En plus d'une installation facile, ceux-ci incluent une utilisation hors ligne, des notifications push, des téléchargements de pages instantanés et ne subit pas le frein des magasins d'applications (apple store, play store..).</p>
                            <p>Les applications PWA s'exécutent sur la même base de code sur tous les appareils différents, quel que soit le système d'exploitation (Android, iOS, OSX, Windows). De ce fait, elles permettent d'économiser des coûts de développement et de maintenance importants par rapport aux applications natives.
                                En effet, les applications PWA sont particulièrement bien adaptées aux services activement utilisés sur les ordinateurs et les appareils mobiles.</p>
                        </div>
                        <Link  href="/nos-services/technologies">
                            <a className={style.black_background_link}>Voir nos technologies</a>
                        </Link>

                    </div>
                    <div className={style.main__info__image}>
                        <Image  lazyBoundary="500px" alt="Developpement application" layout={"fill"} src="/pokouweb/app_web_mockup_w6gag1_wc4vwl.webp"/>


                    </div>

                </div>



            </div>
            <div className={style.main_info__container__green}>

            </div>

        </>



    )
}