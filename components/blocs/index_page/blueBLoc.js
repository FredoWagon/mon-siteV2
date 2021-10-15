import style from '../../../styles/blocs/index_page/BlueBloc.module.scss'
import Link from "next/link";
import Image from 'next/image';
import illuBlue from '../../../public/illu_blue_bloc.png'
import avancer_illustration from "../../../public/avancer_illustration.png"
import illuBlue_arabica from '../../../public/illu_blue_bloc_arabica.png'


export default function BlueBLoc() {

    return (
        <div className={style.blue_bloc__container}>
            <div className={style.blue_bloc} >
                <div className={style.blue_bloc__left}>
                    <h2>« Attirer, engager et convertir ».</h2>
                    <p>Une grande partie du travail ne commence qu'après la publication du site. Nous sommes intéressés par les résultats à long terme, et c'est pourquoi nous vous aidons à rassembler le bon public, à engager les visiteurs sur votre site, à les convertir en clients et à les garder heureux après votre visite.</p>
                    <Link href="/services">
                        <button>Nos services</button>
                    </Link>
                </div>
                <div className={style.blue_bloc__right}>
                    <div className={style.blue_bloc__image}>
                        <Image width="893" lazyBoundary="500px" height="893" alt="Construire un projet ensemble" src="/pokouweb/avancer_illustration_kb8xsk_zlyolv.webp"/>
                    </div>

                </div>
            </div>

        </div>
    )
}