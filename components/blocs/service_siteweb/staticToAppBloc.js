import style from '../../../styles/blocs/service_siteweb/staticToAppBloc.module.scss'
import Image from "next/image";
import illu_statis from '../../../public/illu_blue_bloc.png'
import bottom_img from '../../../public/online-web-design.jpg'
import Link from "next/link";

export default function  StaticToAppBloc() {

    return(
        <div className={style.statictoapp__container}>
            <div className={style.statictoapp}>
                <div className={style.static__row}>
                    <div className={style.static__left}>
                        <h2>Un outil indispensable</h2>
                        <p>Aujourd’hui avoir un site web est devenu indispensable. Vous lancez ou possedez une entreprise ? Un site permettra à vos clients de vous retrouver facilement pour travailler avec vous. Vous avez une boutique ou souhaitez faire de la vente ? Un site marchand bien fait vous permettra d’augmenter votre chiffre d’affaire, de bien gérer votre stock et de suivre simplement vos ventes.</p>

                    </div>
                    <div className={style.static__picture_one}>
                        <Image  lazyBoundary="500px" layout={"fill"} src="/pokouweb/website_illustration_irftee_eu0uci.webp"/>
                    </div>

                </div>
                <div className={`${style.static__row} ${style.right__type}` }>

                    <div className={style.static__right}>
                        <Image  lazyBoundary="500px" width="668" height="718" src="/pokouweb/flowercrown_rushyj_kiawsw.webp"/>
                    </div>
                    <div className={style.static__left}>
                        <h2>De l'écoute à la technique</h2>
                        <p>CMS ? Site scalable ? React ? Rails ? Wordpress ? Joomla ? Nodejs ? De multiple technologies sont disponibles, chacune avec leurs avantages et leurs inconvénients. Mais une chose est sûre, en discutant ensemble de votre projet et de vos objectifs, nous trouverons la meilleure solution technique à votre besoin. Nous vous expliquerons pourquoi nous favorisons telle ou telle solution : adaptée au besoin, au budget, au délai, administration du site simple pour le client et toute autre bonne raison :-) </p>
                        <p> Le but est que vous soyez maître de votre site en comprenant chacun des choix qui seront effectués. Avant de coder, nous définirons clairement ce dont vous avez besoin, pour vous livrer le plus rapidement possible. Nous ferons des points réguliers, pour être bien sûr que le site codé correspond bien à vos attentes. Nous privilégions une communication régulière, afin d’avoir les bonnes informations qui circulent.</p>
                        <p>Nous restons disponibles à tout moment si vous avez la moindre question pendant tout le process de développement, et après la mise en ligne.</p>
                        <div className={style.static_link_box}>
                            <Link  href="/nos-services/technologies">
                                <a>
                                    En savoir plus sur nos technologies</a>
                            </Link>
                        </div>

                    </div>

                </div>
                <div className={style.static__row}>
                    <div className={style.static__left}>
                        <h2>La réussite avec un beau design</h2>
                        <p>L'aspect graphique d'un produit numérique est au moins aussi important que sa qualité technique. Un design efficace sert vos clients à utiliser votre produit, et plus son utilisation lui sera agréable plus il sera enthousiaste à travailler avec vous. </p>
                        <div className={style.static_link_box}>
                            <Link  href="/nos-services/conception">
                                <a>
                                    En savoir plus sur la conception</a>
                            </Link>
                        </div>

                    </div>
                    <div className={style.static__right}>
                        <Image  lazyBoundary="500px" width="705" height="705" src="/pokouweb/devellopement_jl57at_xb3l8w.webp"/>
                    </div>

                </div>

            </div>
            <div className={style.statictoapp__bottom_image}>
                <Image  lazyBoundary="500px" alt="Conception site internet"layout={"fill"} src="/pokouweb/online-web-design_zswu79_ow4y6a_wslpdk.webp"/>
            </div>
            <div className={style.statictoapp}>
                <div className={style.static__row}>
                    <div className={style.static__left}>
                        <h2>Nous privilégions la qualité à la quantité</h2>
                        <p>Chaque projet est pour nous l'occasion de créer un objet unique qui nous permet d'essayer de nouvelles choses.</p>
                        <p>Notre organisation en collectif nous donne la chance de pouvoir choisir nos projets, nous travaillons avec un nombre de clients réduit car nous pensons que la proximité engage la qualité. Nous aimons ce que nous faisons et nous aimons le faire avec vous.</p>


                    </div>
                    <div className={`${style.static__right} ${style.static__right__colored}`}>
                        <Image  lazyBoundary="500px" width="1024" height="1024" src="/pokouweb/Other_07_lta8fd_wrvzwk.webp"/>
                    </div>

                </div>
                <div className={`${style.static__row} ${style.right__type}` }>

                    <div className={ `${style.static__right} ${style.static__right__colored}`}>
                        <Image  lazyBoundary="500px" width="705" height="705" src="/pokouweb/site_web_illu_ebhdor_h8xmud.webp"/>
                    </div>
                    <div className={style.static__left}>
                        <h2>Nous travaillons avec des outils moderne</h2>
                        <p>Le web est en mutation constante et notre travail est de pouvoir vous offrir des solutions moderne toujours plus adapté à vos besoins.</p>
<p>Nous travaillons avec le nouvel Bubble.io qui nous permet de produire des applications complexe pour un budget contenu. Parfaitement adapté aux start-ups et pour un premier lancement d'application.  </p>
                   <p>Egalement, pour nos clients qui nécessite plus de performance nous leur proposons la solution JamStack avec la technologie Next.js et des solutions d'hébergement tel que Vercel ou Netlify. </p>
                    </div>

                </div>
                <div className={style.static__row}>
                    <div className={style.static__left}>
                        <h2>Nous ne vous laissons pas seuls après le lancement.</h2>
                        <p>Lancer un produit n'est qu'une étape, mais le maintenir est un marathon. Beaucoup se concentrent sur la finition d'un projet à temps mais oublient le site après le lancement. En réalité, un site Web n'est jamais un projet ponctuel et le plus de valeur est créée après le lancement en optimisant le service. Nous pensons que votre site ou service doit s'améliorer continuellement et suivre les changements constants du monde en ligne.</p>
                        <p>Notre code cohérent et sécurisé et nos méthodes éprouvées garantissent que le développement ultérieur est possible même pour les projets à grande échelle. Nous développons des sites de manière flexible sur le long terme et apprenons quelque chose de nouveau de chaque projet. Cela signifie que la base du prochain est toujours un peu meilleure.</p>
                        <div className={style.static_link_box}>
                            <Link  href="/nos-services/maintenance-et-suivi">
                                <a>
                                    En savoir plus sur le suivi</a>
                            </Link>
                        </div>
                    </div>
                    <div className={`${style.static__right} ${style.static__right__colored}`}>
                        <Image  lazyBoundary="500px" width="1024" height="1171" src="/pokouweb/exploded_mockup_tm6fak_mobbcq.webp"/>
                    </div>

                </div>

            </div>

            <div className={style.green_background__container}>
                <div className={`${style.statictoapp} ${style.statictoapp__green_background}`}>
                    <div className={style.static__row}>
                        <div className={style.static__left}>
                            <h2>Nous vous offrons un soutien stratégique et de l'aide.</h2>
                            <p>Nous considérons votre entreprise dans son ensemble et nous nous efforçons de comprendre tous les facteurs qui contribuent à son succès. Nous voulons vous aider à vous démarquer de vos concurrents de la meilleure façon possible.</p>
                            <p>La base de tout notre travail est une compréhension approfondie de votre organisation et de vos méthodes de travail. Nous sommes des résolveurs de problèmes qui souhaitent aider la direction de votre organisation à trouver une stratégie numérique axée sur les résultats afin que vos clients puissent être servis efficacement.</p>
                        </div>
                        <div className={style.static__right}>
                            <Image  lazyBoundary="500px" width="688" height="688" src="/pokouweb/abstrakt-design-02_bhmfsg_kajf8y.webp"/>
                        </div>

                    </div>
                    <div className={`${style.static__row} ${style.right__type}` }>

                        <div className={style.static__right}>
                            <Image  lazyBoundary="500px" width="705" height="705" src="/pokouweb/abstrakt-design223_lzngh9_znckgy.webp"/>
                        </div>
                        <div className={style.static__left}>
                            <h2>Nous sommes là pour le long terme.</h2>
                            <p>Nous vous voyons comme un partenaire, nous croyons en la construction de partenariats fondés sur la confiance, l'honnêteté et la soif de créer des choses incroyables ensemble. Nous mettons à votre disposition une équipe de développeurs, de concepteurs et d'analystes chevronnés qui sont également des personnes formidables avec lesquelles il est agréable de travailler. Ce que vous obtenez de nous, c'est une solide expérience, de la transparence, beaucoup de compétences et peut-être quelques mauvaises blagues.</p>

                        </div>

                    </div>


                </div>
            </div>




        </div>
    )
}