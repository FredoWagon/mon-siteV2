import Image from "next/image";
import style from '../../../styles/blocs/service_page/cubeBloc.module.scss'
import develop from '../../../public/devellopement.png'
import Link from 'next/link'



export default function CubeBloc() {
    return (
        <div className={style.cubeBloc__container}>
            <div className={style.cubeBloc}>
                <div className={style.cubeBloc__row}>
                    <div className={style.cubeBloc__image}>
                        <Image objectFit={"cover"} height="953"  lazyBoundary="500px" width="953" src="/pokouweb/ux-indonesia-2NDWFiD0UMM-unsplash_rxqrky_z9wuv8.webp"/>
                    </div>
                    <div className={style.cubeBloc__black}>
                        <div className={style.cubeBloc__text}>
                            <h2>Meilleure gestion du site Web</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur corporis culpa dolore ea ipsam libero odit rerum unde? Commodi ea laudantium modi necessitatibus, odit omnis quis quo ratione sit voluptates?</p>
                            <Link href="">
                                <a >A propos de quelque chose</a>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className={ `${style.cubeBloc__row} ${style.cubeBloc__row__reverse}`}>

                    <div className={`${style.cubeBloc__black} ${style.cubeBloc__black__left}`}>
                        <div className={style.cubeBloc__text}>
                            <h2>Service après vente</h2>
                            <p>Simple, stable et sécurisé. Nous prenons la responsabilité de vous fournir un service de maintenance fiable et sans tracas pour votre site.</p>
                            <Link href="">
                                <a >A propos de la maintenance</a>
                            </Link>
                        </div>

                    </div>
                    <div className={style.cubeBloc__image}>
                        <Image objectFit={"cover"}  lazyBoundary="500px" height="953" width="953" src="/pokouweb/ux-indonesia-2NDWFiD0UMM-unsplash_rxqrky_z9wuv8.webp"/>
                    </div>

                </div>
                <div className={style.cubeBloc__row}>
                    <div className={style.cubeBloc__image}>
                        <Image objectFit={"cover"} lazyBoundary="500px"  height="953" width="953" src="/pokouweb/markus-spiske-KeFyYzxqmH0-unsplash_q0dihe_yjgvjj.webp"/>
                    </div>
                    <div className={style.cubeBloc__black}>
                        <div className={style.cubeBloc__text}>
                            <h2>Chaque projet, sa technologie</h2>
                            <p>Nous maitrisons un ensemble de technologies moderne afin de répondre au plus proche de vos besoins et de votre budget.</p>
                            <Link href="">
                                <a >A propos des technologies</a>
                            </Link>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    )
}