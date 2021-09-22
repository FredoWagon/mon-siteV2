import style from "/styles/blocs/index_page/Indexheader.module.scss"
import Image from 'next/image'
import illuTest from '/public/illu_test.png'
import illuArabica from '/public/illu_index_arabica.png'


import SpeedFadeIn from "../../effects/SpeedFadeIn";
import Link from 'next/link'


export default function IndexHeaderBloc() {

    return (
        <SpeedFadeIn>
            <div className={style.header_bloc}>
                <div className={style.header_bloc__container}>





                    <div className={style.header_bloc__left}>
                        <h1>Réalisez votre potentiel en ligne</h1>
                        <p>Nous sommes l'agence à guichet unique qui vous aide à attirer les bons utilisateurs sur votre site, à vous assurer qu'ils vivent l'expérience pour laquelle ils sont venus et à les engager après leur visite. Votre entreprise ne peut que récolter les fruits.</p>
                        <Link href="/services">
                            <button>Nos services</button>
                        </Link>
                    </div>
                    <div className={style.header_bloc__right}>
                        <Image  src={illuArabica}/>
                    </div>
                </div>
            </div>
        </SpeedFadeIn>
    )
}