import style from '../../../styles/blocs/service_page/uxBloc.module.scss'
import Image from "next/image";
import Link from "next/link";
export default function UxBloc() {

    return (
        <div className={style.ux_bloc__container}>
            <div className={style.ux_bloc}>
                <div className={style.ux_bloc__first_content}>
                    <div className={style.ux_bloc__left}>
                        <h2>Obsédé par l'utilisateur</h2>
                        <p>Notre travail s'articule autour de la conception, de l'analyse, du développement, de l'optimisation et de la maintenance. L'idée principale qui traverse tout ce que nous faisons est d'être obsédé par l'utilisateur : d'abord et avant tout, nous pensons toujours aux personnes qui finiront par utiliser ce que nous créons.</p>
                    </div>
                    <div className={style.ux_bloc__right}>
                        <div className={style.ux_image}>
                            <Image  lazyBoundary="500px" alt="Expérience utilisateur" width="660" height="660" src="/pokouweb/main_coeur_nmsqup_hvihmt.webp"/>
                        </div>
                    </div>
                </div>
                <div className={style.ux_bloc__second_content}>
                    <div className={style.ux_item__container} >
                        <div className={style.ux_item}>
                            <h2>Concevoir</h2>
                            <p>
                                <span>Conception des services </span>
                                <span>Expérience utilisateur</span>
                                <span>Interface utilisateur</span>
                            </p>
                            <Link href='/nos-services/conception'>
                                <a>Lire sur la conception</a>
                            </Link>

                        </div>


                    </div>
                    <div className={style.ux_item__container} >
                        <div className={style.ux_item}>
                            <h2>Développement</h2>
                            <p>
                                <span>Sites Web </span>
                                <span>E-commerce</span>
                                <span>Applications Web</span>
                            </p>
                            <Link href='/nos-services/developpement'>
                                <a>Lire sur le développement</a>
                            </Link>
                        </div>



                    </div>
                    <div className={style.ux_item__container} >
                        <div className={style.ux_item}>
                            <h2>Référencement</h2>
                            <p>
                                <span>Optimisation technique </span>
                                <span>Optimisation du contenu</span>
                                <span>Profils des liens</span>
                            </p>
                            <Link href='/nos-services/referencement'>
                                <a>Lire sur le référencement</a>
                            </Link>

                        </div>


                    </div>


                </div>


            </div>
        </div>
    )
}