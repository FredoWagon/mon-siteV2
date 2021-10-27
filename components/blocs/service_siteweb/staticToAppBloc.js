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
                        <p>CMS ? Site scalable ? React ? Rails ? Wordpress ? Joomla ? Nodejs ? <Link href="/nos-services/technologies"><a >De multiple technologies sont disponibles</a></Link>  , chacune avec leurs avantages et leurs inconvénients. Mais une chose est sûre, en discutant ensemble de votre projet et de vos objectifs, nous trouverons la meilleure solution technique à votre besoin. Nous vous expliquerons pourquoi nous favorisons telle ou telle solution : adaptée au besoin, au budget, au délai, administration du site simple pour le client et toute autre bonne raison :-) </p>
                        <p> Le but est que vous soyez maître de votre site en comprenant chacun des choix qui seront effectués. Avant de coder, nous définirons clairement ce dont vous avez besoin, pour vous livrer le plus rapidement possible. Nous ferons des points réguliers, pour être bien sûr que le site codé correspond bien à vos attentes. Nous privilégions une communication régulière, afin d’avoir les bonnes informations qui circulent.</p>
                        <p>Nous restons disponibles à tout moment si vous avez la moindre question pendant tout le process de développement, et après la mise en ligne.</p>
                        <Link  href="/nos-services/technologies">
                            <a>
                                Voir nos technologies</a>
                        </Link>
                    </div>

                </div>
                <div className={style.static__row}>
                    <div className={style.static__left}>
                        <h2>La réussite avec un beau design</h2>
                        <p>L'aspect graphique d'un produit numérique est au moins aussi important que sa qualité technique. Un design efficace sert vos clients à utiliser votre produit, et plus son utilisation lui sera agréable plus il sera enthousiaste à travailler avec vous. </p>
                        <p>Ce que l'on nomme 'expérience utilisateur' est l'ensemble du parcours </p>
                    </div>
                    <div className={style.static__right}>
                        <Image  lazyBoundary="500px" width="705" height="705" src="/pokouweb/developpement_illustration_vn1fce_pckezf.webp"/>
                    </div>

                </div>

            </div>
            <div className={style.statictoapp__bottom_image}>
                <Image  lazyBoundary="500px" alt="Conception site internet"layout={"fill"} src="/pokouweb/online-web-design_zswu79_ow4y6a_wslpdk.webp"/>
            </div>
            <div className={style.statictoapp}>
                <div className={style.static__row}>
                    <div className={style.static__left}>
                        <h2>Du sitre vitrine ..</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur molestias quibusdam recusandae. Autem eveniet illum labore modi possimus quaerat, quia quisquam totam! Architecto ea nemo tempore velit veniam! Adipisci, in!</p>

                    </div>
                    <div className={style.static__right}>
                        <Image  lazyBoundary="500px" width="705" height="705" src="/pokouweb/developpement_illustration_vn1fce_pckezf.webp"/>
                    </div>

                </div>
                <div className={`${style.static__row} ${style.right__type}` }>

                    <div className={style.static__right}>
                        <Image  lazyBoundary="500px" width="705" height="705" src="/pokouweb/developpement_illustration_vn1fce_pckezf.webp"/>
                    </div>
                    <div className={style.static__left}>
                        <h2>à l'application Web</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur molestias quibusdam recusandae. Autem eveniet illum labore modi possimus quaerat, quia quisquam totam! Architecto ea nemo tempore velit veniam! Adipisci, in!</p>

                    </div>

                </div>
                <div className={style.static__row}>
                    <div className={style.static__left}>
                        <h2>et plus encore !</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur molestias quibusdam recusandae. Autem eveniet illum labore modi possimus quaerat, quia quisquam totam! Architecto ea nemo tempore velit veniam! Adipisci, in!</p>

                    </div>
                    <div className={style.static__right}>
                        <Image  lazyBoundary="500px" width="705" height="705" src="/pokouweb/developpement_illustration_vn1fce_pckezf.webp"/>
                    </div>

                </div>

            </div>

            <div className={style.green_background__container}>
                <div className={`${style.statictoapp} ${style.statictoapp__green_background}`}>
                    <div className={style.static__row}>
                        <div className={style.static__left}>
                            <h2>Du sitre vitrine ..</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur molestias quibusdam recusandae. Autem eveniet illum labore modi possimus quaerat, quia quisquam totam! Architecto ea nemo tempore velit veniam! Adipisci, in!</p>

                        </div>
                        <div className={style.static__right}>
                            <Image  lazyBoundary="500px" width="705" height="705" src="/pokouweb/developpement_illustration_vn1fce_pckezf.webp"/>
                        </div>

                    </div>
                    <div className={`${style.static__row} ${style.right__type}` }>

                        <div className={style.static__right}>
                            <Image  lazyBoundary="500px" width="705" height="705" src="/pokouweb/developpement_illustration_vn1fce_pckezf.webp"/>
                        </div>
                        <div className={style.static__left}>
                            <h2>à l'application Web</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur molestias quibusdam recusandae. Autem eveniet illum labore modi possimus quaerat, quia quisquam totam! Architecto ea nemo tempore velit veniam! Adipisci, in!</p>

                        </div>

                    </div>


                </div>
            </div>




        </div>
    )
}