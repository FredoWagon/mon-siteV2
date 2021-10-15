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
                        <Image objectFit={"cover"} height="953"  lazyBoundary="500px" width="953" src="/pokouweb/35941778864_a37973fb6e_o-1618x1080_dyiopz_atu7yx.webp"/>
                    </div>
                    <div className={style.cubeBloc__black}>
                        <div className={style.cubeBloc__text}>
                            <h2>Meilleure gestion du site Web</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur corporis culpa dolore ea ipsam libero odit rerum unde? Commodi ea laudantium modi necessitatibus, odit omnis quis quo ratione sit voluptates?</p>
                            <Link href="">
                                <a >A propos d'Everblox</a>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className={ `${style.cubeBloc__row} ${style.cubeBloc__row__reverse}`}>

                    <div className={`${style.cubeBloc__black} ${style.cubeBloc__black__left}`}>
                        <div className={style.cubeBloc__text}>
                            <h2>Meilleure gestion du site Web</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur corporis culpa dolore ea ipsam libero odit rerum unde? Commodi ea laudantium modi necessitatibus, odit omnis quis quo ratione sit voluptates?</p>
                            <Link href="">
                                <a >A propos d'Everblox</a>
                            </Link>
                        </div>

                    </div>
                    <div className={style.cubeBloc__image}>
                        <Image objectFit={"cover"}  lazyBoundary="500px" height="953" width="953" src="/pokouweb/35941778864_a37973fb6e_o-1618x1080_dyiopz_atu7yx.webp"/>
                    </div>

                </div>
                <div className={style.cubeBloc__row}>
                    <div className={style.cubeBloc__image}>
                        <Image objectFit={"cover"} lazyBoundary="500px"  height="953" width="953" src="/pokouweb/35941778864_a37973fb6e_o-1618x1080_dyiopz_atu7yx.webp"/>
                    </div>
                    <div className={style.cubeBloc__black}>
                        <div className={style.cubeBloc__text}>
                            <h2>Meilleure gestion du site Web</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur corporis culpa dolore ea ipsam libero odit rerum unde? Commodi ea laudantium modi necessitatibus, odit omnis quis quo ratione sit voluptates?</p>
                            <Link href="">
                                <a >A propos d'Everblox</a>
                            </Link>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    )
}