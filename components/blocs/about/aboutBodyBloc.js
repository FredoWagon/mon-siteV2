import aboutMainImage from "../../../public/merci_background.jpg"
import style from '../../../styles/blocs/about_page/aboutBodyBloc.module.scss'
import Image from "next/image";
import illuTest from "../../../public/concept.png"

export default function AboutBodyBloc() {

    return (
        <div className={style.about_body__container}>

            <div className={style.about_body}>
                <h2>Nos valeurs</h2>
                <div className={style.about_body__content}>
                    <div className={style.about_body__item}>
                        <div className={style.about_item__image}>
                            <Image  lazyBoundary="500px" alt="Honnêteté" height="660" width="660" src="/pokouweb/honnete_illu_jqbh1h_hm5say.webp"/>
                        </div>
                        <h3>Honnêteté</h3>
                        <p>Nous supposons l'honnêteté et nous misons sur la transparence. Nous parlons même si c'est difficile, car cela ne peut que nous aider à grandir. Une grande confiance signifie la liberté, et avec la liberté vient la responsabilité. Prendre ses responsabilités et être ouvert et honnête sont les principes directeurs pour nous tous et nous permettent de faire de notre mieux.</p>
                    </div>
                    <div className={style.about_body__item}>
                        <div className={style.about_item__image}>
                            <Image  lazyBoundary="500px" alt="Curiosité" height="660" width="660" src="/pokouweb/curiosite_illu_qtrm4i_k8uutv.webp"/>
                        </div>
                        <h3>Curiosité</h3>
                        <p>Le business du web est en constante évolution. Pour être continuellement pertinents, nous devons être curieux de notre métier en tant qu'individus. Nous testons, nous explorons, nous nous efforçons toujours vers la prochaine itération. Nous pensons que la peur d'essayer tue plus de rêves que l'échec ne le fera jamais.</p>
                    </div>
                    <div className={style.about_body__item}>
                        <div className={style.about_item__image}>
                            <Image  lazyBoundary="500px" alt="La maîtrise" height="660" width="660" src="/pokouweb/maitrise2_illu_m2cgps_aybnwv.webp"/>
                        </div>
                        <h3>La maîtrise</h3>
                        <p>Nous sommes obsédés par notre métier.  Nous étudions attentivement nos clients pour mieux les comprendre et mieux les servir. Nous maîtrisons les tenants et aboutissants techniques afin de donner à nos clients les meilleurs outils pour voir grand avec leur marque. Nous sommes des résolveurs de problèmes résilients qui ne se cachent jamais des défis ou des responsabilités.</p>
                    </div>
                    <div className={style.about_body__item}>
                        <div className={style.about_item__image}>
                            <Image  lazyBoundary="500px" alt="Sincère" height="660" width="660" src="/pokouweb/sincere_illu_ncmu0r_xzpvbp.webp"/>
                        </div>
                        <h3>Sincère</h3>
                        <p>Nous pensons que l'inclusion facilite l'innovation et que la diversité améliore la créativité. Nous nous efforçons toujours de nous remarquer, de nous aider et de nous soutenir mutuellement, même lorsque cela nécessite un amour dur. Nous partageons nos victoires et nos défaites avec l'équipe. Nous avons toujours à l'esprit les meilleurs intérêts de nos clients et nous voulons leur rendre la confiance qu'ils nous accordent. Nous voulons les ravir même lorsque cela ne nous profite pas à court terme.</p>
                    </div>

                </div>

            </div>
        </div>
    )
}