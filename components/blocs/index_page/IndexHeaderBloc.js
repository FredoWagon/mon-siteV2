import style from "/styles/blocs/index_page/Indexheader.module.scss"
import Image from 'next/image'
import illuTest from '/public/illu_test.png'
import illuArabica from '/public/illu_index_arabica.png'
import mozillaTest from '../../../public/mozilla-labs.jpg'
import tablette_med from '../../../public/tablette_med.png'
import phone_med from '../../../public/phone_medtandem.png'
import landing from '../../../public/landing_illu.svg'
import serviceHeader from '../../../public/service_header.png'
import serviceTest from "../../../public/service_header_test.png"
import goutte from "../../../public/goutte.svg"
import test_illu_mozzilla from './../../../public/test_header_illu.jpg'


import SpeedFadeIn from "../../effects/SpeedFadeIn";
import Link from 'next/link'


export default function IndexHeaderBloc() {

    return (
        <SpeedFadeIn>
            <div className={style.header_bloc__container}>
                <div className={style.header_bloc}>
                    <div className={style.header_bloc__left}>
                        <h1>Réalisez votre potentiel en ligne</h1>
                        <p>Nous sommes l'agence digitale qui vous aide à attirer les bons utilisateurs sur votre site, à vous assurer qu'ils vivent l'expérience pour laquelle ils sont venus et à les engager après leur visite. Votre entreprise ne peut qu'en récolter les fruits.</p>
                        <Link href="/services">
                            <button>Nos services</button>
                        </Link>
                    </div>
                    <div className={style.header_bloc__right}>
                        <div className={style.image_animation}>
                          {/*     <Image width="660" height="660" src="/pokouweb/pokouweb_service_header_pdsjob-f_webp_fl_awebp_fl_animated_c_limit_w_750_q_1_z9sglg.webp"/>
                           */}



                        </div>

                    </div>
                </div>
            </div>
        </SpeedFadeIn>
    )
}