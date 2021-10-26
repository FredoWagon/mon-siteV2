import style from '../../../../styles/blocs/service_ecommerce/mainInfoBloc.module.scss'
import Image from "next/image";
import test_illu from '../../../../public/landing_illu.svg'
import placeholder from '../../../../public/testmock.png'
import medtandemDesktop from '../../../../public/medtandem_desktop.png'

import Link from "next/link";


export default function MedtandemContentBloc1() {

    return (
        <>
            <div className={`${style.main_info__container} ${style.custom_medtandem__background}`}>
                <div className={style.main__info}>
                    <div className={style.text_info__container}>
                        <div className={style.text__bloc}>
                            <h2>Une deuxième peau pour un site mature</h2>
                            <p>Medtandem disposait déjà d’une pemière mouture, fonctionnelle, mais pas parfaite. L’UX vieillissante méritait un bon coup de pinceau pour être au goût du jour. Il était également temps d’impléménter un nouveau système de paiement facilitant le parcours d’achat et la gestion des factures. Le site ne disposait pas de système d’emailing, nous avons pu y pallier.</p>

                        </div>
                    </div>


                </div>
                <div className={style.main__info__image__long__medtandem}>
                    <Image layout={"fill"} lazyBoundary="500px" alt="Medtandem mockup" src="/pokouweb/medtandem_desktop_pggvcw_q82gw9.webp"/>
                </div>



            </div>

            <div className={style.main_info__container__green}>

            </div>

        </>



    )
}