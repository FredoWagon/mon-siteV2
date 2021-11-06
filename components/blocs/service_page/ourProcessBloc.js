import Image from "next/image";
import conception from '../../../public/conception1.jpg'
import style from '../../../styles/blocs/service_page/ourProcessBloc.module.scss'
import concept from '../../../public/concept.png'
import develop from '../../../public/devellopement.png'
import search from '../../../public/search.png'


export default function OurProcessBloc() {

    return (
        <div className={style.our_process__container}>
            <div className={style.our_process__picture}>
                <Image  lazyBoundary="500px" alt="Travail en équipe" layout={"fill"} src="/pokouweb/conception1_dr5lbi_f6ph2v_pozvac.webp"/>
            </div>

            <div className={style.our_process}>
                <h2>Notre processus</h2>
                <p>Travailler avec nous se fait sans effort et vous laisse plus de temps pour les choses importantes.</p>
                <div className={style.our_process__content}>

                    <div className={style.our_process__items}>
                        <div className={style.our_process__image}>
                            <Image  lazyBoundary="500px" layout={"fill"} alt="Recherche" src="/pokouweb/abstrakt-design-06_xb85nt_kcamot.webp"/>
                        </div>
                        <h3>Recherche</h3>
                        <p>Nous examinons en profondeur votre organisation, votre entreprise et votre marque.</p>


                    </div>
                    <div className={style.our_process__items}>
                        <div className={style.our_process__image}>
                            <Image  lazyBoundary="500px" layout={"fill"} alt="Concept" src="/pokouweb/abstrakt-design-05_x2b7e1_wznbto_vuccxg.webp"/>
                        </div>
                        <h3>Concept</h3>
                        <p>Nous formons une compréhension globale de votre entreprise et créons un concept mémorable avec vous.</p>


                    </div>
                    <div className={style.our_process__items}>
                        <div className={style.our_process__image}>
                            <Image  lazyBoundary="500px"layout={"fill"} alt="Developpement" src="/pokouweb/abstrakt-design-134_m6yn5e_thcmba.webp"/>
                        </div>
                        <h3>Design et développement</h3>
                        <p>Jouer, dessiner, concevoir et développer - ce sont les phases où les idées se transforment en un résultat final concret.</p>


                    </div>
                    <div className={style.our_process__items}>
                        <div className={style.our_process__image}>
                            <Image  lazyBoundary="500px" layout={"fill"} alt="Lancement" src="/pokouweb/abstrakt-design-207_uyauup_pprfci.webp"/>
                        </div>
                        <h3>Lancement et assistance</h3>
                        <p>Après le déploiement du produit, nous suivons également les étapes du produit et vous fournissons une assistance continue.</p>


                    </div>


                </div>

            </div>
        </div>
    )
}