import style from '../../../styles/blocs/service_concept/conceptionContentBloc.module.scss'
import Image from "next/image";
import illu_statis from '../../../public/illu_blue_bloc.png'
import bottom_img from '../../../public/online-web-design.jpg'

export default function ConceptionContentBloc() {

    return(
        <div className={style.conception_content__container}>
            <div className={style.conception_content}>
                <div className={style.conception_content_title}>
                    <h2>Des principes</h2>
                    <p>Nous pensons que la convivialité et la visibilité vont de pair et que l'utilisateur doit toujours être prioritaire.</p>
                </div>
                <div className={style.conception_content__menu}>
                    <div className={style.conception_menu__item}>
                        <h3>Les inventions plutôt que les conventions</h3>
                        <p>La perspicacité humaine et les idées originales nous font avancer dans notre travail</p>

                    </div>
                    <div className={style.conception_menu__item}>
                        <h3>Curiosité</h3>
                        <p>Chaque projet est pour nous l'occasion d'apprendre et de nous amuser</p>
                    </div>
                    <div className={style.conception_menu__item}>
                        <h3>Fonctionnalisme</h3>
                        <p>La cohérence et la modularité créent l'harmonie d'une solution aboutie</p>
                    </div>
                    <div className={style.conception_menu__item}>
                        <h3>Une première approche humaine</h3>
                        <p>Convivialité, lisibilité, accessibilité — nous concevons des services pour de vrais humains.</p>
                    </div>


                </div>
                <div className={style.conception_content__image}>
                    <Image  lazyBoundary="500px" objectFit={"cover"} alt="Ux design" layout={"fill"} src="/pokouweb/amelie-mourichon-wusOJ-2uY6w-unsplash_ofoeuo_jbxt2v.webp"/>

                </div>
                <div className={style.conception_content_title}>
                    <h2>La conception en pratique
                    </h2>
                    <p>Les bons services numériques sont à la fois beaux et intuitifs à utiliser. Nous mettons en œuvre le design thinking à chaque étape de la construction d'un produit numérique.</p>
                </div>
                <div className={style.conception_content__menu}>

                    <div className={`${style.menu__item__bigger_with} ${style.conception_menu__item}`}>
                        <h3>Design de l'interface utilisateur</h3>
                        <p>Des polices à la navigation en passant par les animations, nos solutions visent toujours la convivialité. Nous concevons des interfaces intuitives et aidons les utilisateurs à interagir sans effort avec votre entreprise. Chaque point de contact est conçu pour rapprocher les utilisateurs des résultats que vous souhaitez.</p>

                    </div>
                    <div className={`${style.menu__item__bigger_with} ${style.conception_menu__item}`}>
                        <h3>Conception de l'expérience utilisateur</h3>
                        <p>Une expérience utilisateur de premier ordre est essentielle pour faire aimer votre marque aux utilisateurs et les amener à revenir à votre service encore et encore. Nous nous assurons que les interactions entre l'utilisateur et le service fonctionnent bien à chaque étape du parcours de l'utilisateur.</p>
                    </div>
                    <div className={`${style.menu__item__bigger_with} ${style.conception_menu__item}`}>
                        <h3>Conception graphique</h3>
                        <p>Logos, icônes, infographies.. Nous créons des identités visuelles qui soutiennent votre marque, cultivons l'intérêt des bonnes personnes et vous démarquent de la foule.</p>
                    </div>
                    <div className={`${style.menu__item__bigger_with} ${style.conception_menu__item}`}>
                        <h3>Compréhension commerciale</h3>
                        <p>Notre processus de conception de services commence par l'acquisition d'une compréhension approfondie de votre organisation. Nous créons des stratégies numériques complètes et des parcours utilisateurs soigneusement planifiés conçus pour augmenter votre taux de conversion.</p>
                    </div>
                    <div className={`${style.menu__item__bigger_with} ${style.conception_menu__item}`}>
                        <h3>Conception centrée sur l'utilisateur</h3>
                        <p>Nous collectons et analysons des données pour bien comprendre les besoins de vos utilisateurs. Nous organisons des entretiens et des enquêtes et créons des profils d'utilisateurs qui aident à identifier les besoins des utilisateurs et à concevoir des expériences utilisateur fluides.</p>
                    </div>
                    <div className={`${style.menu__item__bigger_with} ${style.conception_menu__item}`}>
                        <h3>Concept de design</h3>
                        <p>La conception du concept utilise à la fois la compréhension des entreprises et celle des utilisateurs. Nous combinons vos objectifs, votre mission et vos données dans un concept stratégique qui reste à l'esprit et fonctionne sur tous les canaux numériques.</p>
                    </div>


                </div>

            </div>
        </div>
    )
}