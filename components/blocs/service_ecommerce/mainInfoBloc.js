import style from '../../../styles/blocs/service_ecommerce/mainInfoBloc.module.scss'
import Image from "next/image";
import test_illu from '../../../public/landing_illu.svg'
import placeholder from '../../../public/testmock.png'
import Link from "next/link";


export default function MainInfoBloc() {

    return (

        <div className={style.main_info__container}>
            <div className={style.main__info}>
                <div className={style.text_info__container}>
                    <div className={style.text__bloc}>
                        <h2>Une bonne expérience utilisateur signifie des clients satisfaits et plus de ventes.</h2>
                        <p>Il est fort possible que l'acheteur ne voie jamais le produit dans la vraie vie avant de prendre la décision d'achat. Par conséquent, votre présentation doit être meilleure que celle de vos concurrents pour que votre produit survive. Nous voulons vous aider à y arriver!</p>
                        <p>Nous adaptons nos solutions pour servir vos objectifs commerciaux uniques et créer une expérience complète autour des achats en ligne. Notre objectif est de présenter votre produit au public cible dans sa forme la plus honnête, afin qu'ils puissent presque sentir qu'il est là, devant eux. Nos principaux outils incluent Shopify et la plate-forme open source WooCommerce, deux des principales plates-formes de commerce électronique au monde. Le choix de l'open source garantit que vous n'êtes pas lié à un seul fournisseur de services et vous permet d'éviter des coûts imprévus.</p>
<p>Pour des projets de plus grandes tailles, qui nécessitent des performances à la pointe, nos solutions sur mesure sont priorisées.</p>
                    </div>
                    <div className={style.text__bloc}>
                        <h2>Chaque produit est unique.</h2>
                        <p>Quel est l'argument de vente unique de votre produit ? Comment aide-t-il vos clients à surmonter leurs problèmes ? Quelle est l'histoire du produit ? Qui essaie-t-il d'aider et pourquoi est-ce important ?</p>
                        <p>Ce sont toutes des questions essentielles qui aident les utilisateurs à comprendre votre produit ou service. Avec vous, notre objectif est de trouver les avantages concurrentiels et les caractéristiques les plus attrayantes de votre produit à présenter au public.</p>

                    </div>
                    <Link  href="/nos-services/technologies">
                        <a className={style.black_background_link}>Voir nos technologies</a>
                    </Link>
                </div>

            </div>
            <div className={style.main_info__long_image}>
                <div className={style.long_image__container}>
                    <div className={style.long_image__content}>
                        <Image  lazyBoundary="500px" alt="Developpement application" layout={"fill"} src="/pokouweb/igor-miske-JVSgcV8_vb4-unsplash_lmnxud_qt9mgz.webp"/>
                    </div>
                    <div>

                    </div>
                </div>

            </div>



        </div>






    )
}