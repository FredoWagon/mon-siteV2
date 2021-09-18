import style from '../../../styles/blocs/index_page/BlueBloc.module.scss'
import Link from "next/link";
import Image from 'next/image';
import illuBlue from '../../../public/illu_blue_bloc.png'
import illuBlue_arabica from '../../../public/illu_blue_bloc_arabica.png'


export default function BlueBLoc() {

    return (
        <div className={style.blue_bloc__container}>
            <div className={style.blue_bloc} >
                <div className={style.blue_bloc__left}>
                    <h2>« Construisez-le et ils viendront ».</h2>
                    <p> <strong>Non, ils ne le feront pas.</strong> Le travail ne commence qu'une fois que votre site Web ou service est opérationnel. Nous nous soucions des résultats et vous aidons à attirer votre public cible, à engager vos utilisateurs sur site, à les convertir en clients et à les ravir après leur visite.</p>
                    <Link href="/services">
                        <button>Nos services</button>
                    </Link>
                </div>
                <div className={style.blue_bloc__right}>
                    <div className={style.blue_bloc__image}>
                        <Image src={illuBlue_arabica}/>

                    </div>

                </div>
            </div>

        </div>
    )
}