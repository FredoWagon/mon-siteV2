import style from '../../../../styles/blocs/service_ecommerce/mainInfoBloc.module.scss'
import Image from "next/image";
import test_illu from '../../../../public/landing_illu.svg'
import placeholder from '../../../../public/testmock.png'
import medtandemDesktop from '../../../../public/medtandem_desktop.png'
import masonry_dashboard from "../../../../public/test_dashboard_masonry.png"
import Link from "next/link";


export default function DashboardContentBloc1() {

    return (
        <>
            <div className={ `${style.main_info__container} ${style.center_none}` }>
                <div className={style.main__info}>
                    <div className={`${style.text_info__container} ${style.developpement__text_info}`}>
                        <div className={style.text__bloc}>
                            <h2 className={style.developpement__big_title}>Révolutionner la recherche d'appartement</h2>
                            <p>Notre aventure avec Dashboard a commencé en 2020. Nous nous sommes donné pour mission de rendre la prospection locative plus pratiques que jamais, et c'est ainsi que Dashboard est né. Au lieu de créer une application native, nous avons choisi d'utiliser la technologie émergente Progressive Web App et les opportunités qu'elle offre. Le service a été lancé en douceur en Finlande en janvier 2019 et les retours ont été positifs.</p>
                        </div>
                    </div>
                    <div className={style.main__info__image}>
                        <Image src={placeholder}/>
                    </div>
                    <div className={style.text_info__container}>
                        <div className={style.text__bloc}>
                            <h2 >Combler le fossé entre le client et une coupe de cheveux élégante</h2>
                            <p>M Room a été le premier à introduire un modèle sans rendez-vous sur abonnement uniquement sur la scène des salons de coiffure finlandais. Le modèle commercial a fait ses preuves, mais la croissance de la clientèle nécessite de nouvelles améliorations du flux de clients. Les clients avaient besoin d'outils pour voir les temps d'attente dans tous leurs salons de coiffure à proximité et pouvoir faire la queue dans le confort de leur propre maison, bureau ou salle de gym. Notre solution ? Une application web évolutive qui révolutionne l'expérience d'attente des clients.</p>
                            <p>D'après des recherches sur les utilisateurs, nous avons découvert que les clients de M Room sont des personnes très actives qui aiment utiliser leur temps à bon escient. Travailler, faire de l'exercice, faire du shopping ainsi que se détendre sont des routines quotidiennes pour eux. La coopération étroite avec les clients s'est poursuivie lorsque l'idée et le prototype ont été testés avec les clients de M Room. Les commentaires directs et précieux des utilisateurs finaux ont joué un rôle crucial dans la validation du concept, de la conception et des choix technologiques.</p>
                        </div>
                    </div>
                    <div className={style.main__info__image}>
                        <Image src={placeholder}/>
                    </div>
                    <div className={style.text_info__container}>
                        <div className={style.text__bloc}>
                            <h2 >Concept</h2>
                            <p>My M Room est une application Web progressive, qui permet un développement rapide pour le client en développement rapide. Les clients peuvent trouver des créneaux libres et comparer la longueur de la file d'attente dans les salons de coiffure à proximité. Le service indique quand arriver au magasin pour se mettre sur la sellette dans un délai d'environ 1 à 15 minutes.</p>
                            <p>L'algorithme d'estimation du temps de file d'attente s'améliore quotidiennement depuis le lancement en utilisant des données réelles. L'objectif final est d'obtenir un temps de service exact pour chaque client.</p>
                        </div>
                        <div className={style.text__bloc}>
                            <h2 >La technologie</h2>
                            <p>My M Room est une application Web progressive d'une seule page (SPA, PWA) construite à l'aide de la bibliothèque JavaScript React, avec Redux pour la gestion de l'état. Avec une application Web progressive, nous sommes en mesure d'offrir une expérience de type natif via un navigateur Web. Nous pouvons facilement mettre à jour l'application sans avoir à soumettre de nouvelles versions aux magasins d'applications et attendre leur approbation. Ne pas avoir à maintenir plusieurs versions de l'application garantit un développement rapide.</p>
                            <p>Cependant, PWA est encore une technologie en développement et en particulier avec les appareils Apple iOS, nous avons dû trouver de nombreuses solutions créatives pour combler les lacunes. Sur Android, l'application prend en charge les dernières technologies PWA, notamment les notifications push et la mise en cache hors ligne à long terme. Nous avons décidé d'utiliser React pour créer une base solide pour l'avenir. Une grande attention a été portée à rendre l'interface utilisateur fluide et réactive, en utilisant les applications natives comme source d'inspiration.</p>
                       <p>Le React PWA interagit avec l'API du backend personnalisé de M Room. En tant que telle, l'application nécessite une connexion en ligne pour fonctionner, mais tous les actifs sont mis en cache hors ligne avec le service worker. L'API a été spécifiée et construite dans le cadre de ce projet pour couvrir les besoins de l'application.</p>
                        </div>
                        <div className={style.text__bloc}>
                            <h2 >Concevoir</h2>
                            <p>Notre objectif était de rendre les visites chez le coiffeur plus pratiques que jamais, et pour cela, l'application devait être facile à utiliser et légère. Même si la technologie PWA est encore en développement, nous ne voulions pas rogner sur les raccourcis, mais plutôt offrir une expérience similaire à une application native.</p>
                            <p>Nous avons rationalisé la structure de l'application, tout en offrant à l'utilisateur plusieurs façons de trouver un salon de coiffure approprié. Des interactions fluides guident l'utilisateur à travers une interface utilisateur ciblée, avec un contenu adapté au ton de M Room. Le style visuel de M Room est réalisé dans une interface utilisateur cohérente qui correspond à la marque.</p>
                        </div>
                    </div>



                </div>





            </div>

            <div className={style.main_info__container__green}>

            </div>

        </>



    )
}