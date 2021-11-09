import style from '../../../styles/blocs/service_technologies/technologieContentBloc.module.scss'
import Image from "next/image";
import illu_statis from '../../../public/illu_blue_bloc.png'
import bottom_img from '../../../public/online-web-design.jpg'

export default function  TechnologieContentBloc() {

    return(
        <div className={style.technologie_content__container}>
            <div className={style.technologie_content}>
                <h2>Ce ne sont pas les outils, c'est la façon dont vous les utilisez.</h2>
                <div className={style.techno__menu}>
                    <div className={style.techno__menu_item}>
                        <div className={style.techno_menu__title}>
                            <img src="/terminal-line.svg" alt=""/>
                            <h3>Sur mesure</h3>
                        </div>
                        <p>L'ensemble des outils de programmation que nous utilisons à l'élaboration des solutions web les plus exigeante. C'est ici que les technophiles que nous sommes nous exprimons le mieux !  </p>

                        <div className={style.techno_subcontent__container}>
                            <div className={style.techno_subcontent}>
                                <h5>Language de programmation</h5>
                                <div className={style.techno_subcontent__icons}>
                                    <div className={style.subicons__container}>
                                        <img src="/ruby2.svg" alt="Ruby icon" title="Language Ruby"/>

                                    </div>
                                    <div className={style.subicons__container}>
                                        <img src="/html5.svg" alt="Html icon" title="Language HTML"/>
                                    </div>
                                    <div className={style.subicons__container}>
                                        <img src="/javascript.svg" alt="Javascript icon" title="Language javascript"/>
                                    </div>
                                    <div className={style.subicons__container}>
                                        <img src="/css.svg" alt="Css icon" title="Language CSS"/>
                                    </div>

                                </div>

                            </div>
                            <div className={ `${style.bigger_icons} ${style.techno_subcontent}`}>
                                <h5>Framework Back End</h5>
                                <div className={style.techno_subcontent__icons}>
                                    <div className={style.subicons__container}>
                                        <img src="/rails.svg" alt="Rails icon" title="Ruby On Rails"/>
                                    </div>
                                    <div className={`${style.bigger_icons} ${style.subicons__container}`}>
                                        <img src="/expressjs.svg" alt="Html icon" title="Express.js"/>
                                    </div>
                                    <div className={`${style.bigger_icons} ${style.subicons__container}`}>
                                        <img src="/nodejs2.svg" alt="Node.js icon" title="Node.js"/>
                                    </div>

                                </div>

                            </div>
                            <div className={style.techno_subcontent}>
                                <h5>Framework Front End</h5>
                                <div className={style.techno_subcontent__icons}>
                                    <div className={style.subicons__container}>
                                        <img src="/react.svg" alt="React icon" title="Framework React.js"/>

                                    </div>
                                    <div className={style.subicons__container}>
                                        <img src="/nextjs.svg" alt="Next.js icon" title="Framework Next.js"/>
                                    </div>
                                    <div className={style.subicons__container}>
                                        <img src="/stimulusjs.svg" alt="Stimulus.js icon" title="Librairie Stimulus.js"/>
                                    </div>


                                </div>

                            </div>
                            <div className={`${style.base_logo} ${style.techno_subcontent}`}>
                                <h5>Base de données</h5>
                                <div className={style.techno_subcontent__icons}>
                                    <div className={style.subicons__container}>
                                        <img src="/mysql.svg" alt="MySQL icon" title="Base de données MySQL"/>
                                    </div>
                                    <div className={style.subicons__container}>
                                        <img src="/postsql.svg" alt="PostgreSQL icon" title="Base de données PostgreSQL"/>
                                    </div>
                                    <div className={style.subicons__container}>
                                        <img src="/mongo.svg" alt="MongoDB icon" title="Base de données MongoDB"/>
                                    </div>


                                </div>

                            </div>
                        </div>


                    </div>
                    <div className={style.techno__menu_item}>
                        <div className={style.techno_menu__title}>
                            <img src="/cms2.svg" alt=""/>
                            <h3>CMS</h3>
                        </div>
                        <p>CMS est l'acronyme de Content Management System, ou système de gestion de contenu. Il s'agit d'une plateforme ou d'un logiciel permettant de créer et modifier facilement un site internet.</p>

                        <div className={style.techno_subcontent__container}>

                            <div className={style.techno_subcontent}>
                                <h5>Création de site généraliste</h5>
                                <div className={style.techno_subcontent__icons}>
                                    <div className={style.subicons__container}>
                                        <img src="/wordpress.svg" alt="Wordpress icon" title="CMS WordPress"/>

                                    </div>
                                    <div className={style.subicons__container}>
                                        <img src="/joomla.svg" alt="Joomla icon" title="CMS Joomla"/>
                                    </div>



                                </div>

                            </div>
                            <div className={style.techno_subcontent}>
                                <h5>Site e-commerce</h5>
                                <div className={style.techno_subcontent__icons}>
                                    <div className={style.subicons__container}>
                                        <img src="/shopify.svg" alt="Shopify icon" title="CMS Shopify"/>

                                    </div>
                                    <div className={style.subicons__container}>
                                        <img src="/woocommerce.svg" alt="WooCommerce icon" title="CMS WooCommerce"/>
                                    </div>



                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={style.techno__menu_item}>
                        <div className={style.techno_menu__title}>
                            <img src="/bubble.svg" alt=""/>
                            <h3>Bubble.io</h3>
                        </div>
                        <p>Bubble est une nouvelle technologie no-code mise à la disposition des développeurs qui souhaitent créer des applications complexe en réduisant significativement le temps et coût de production.</p>

                        <div className={style.techno_subcontent__container}>

                            <div className={`${style.bubble_icons} ${style.techno_subcontent}`}>

                                <div className={style.techno_subcontent__icons}>
                                    <div className={style.subicons__container}>
                                        <img src="/Bubble_logo.svg" alt="Bubble icon" title="Bubble.io"/>
                                    </div>




                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}