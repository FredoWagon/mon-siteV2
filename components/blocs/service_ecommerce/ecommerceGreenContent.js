import style from '../../../styles/blocs/service_ecommerce/ecommerceGreenContent.module.scss'
import Image from "next/image";
import test_illu from '../../../public/landing_illu.svg'
import placeholder from '../../../public/testmock.png'
import Link from "next/link";


export default function EcommerceGreenContent() {

    return (
        <div className={style.ecommerce_green_content__container}>
            <div className={style.ecommerce_green_content}>
                <div className={style.ecommerce_green_content_text__container}>

                    <h2>Au cœur de nos solutions se trouvent</h2>
                    <div className={style.ecommerce_green_content__text_bloc}>
                        <h3></h3>
                        <p></p>

                    </div>
                    <div className={style.ecommerce_green_content__text_bloc}>
                        <h3>1. Une planification minutieuse du processus d'achat
                        </h3>
                        <p>Une expérience de magasinage agréable incite les clients à acheter à nouveau au même endroit. Par conséquent, le processus d'achat doit être simple et les différents points de contact doivent se soutenir mutuellement afin que le service à l'utilisateur soit cohérent sur les différents canaux. Nous concevons chaque boutique e-commerce en analysant attentivement les différentes étapes du parcours d'achat.</p>

                    </div>
                    <div className={style.ecommerce_green_content__text_bloc}>
                        <h3>2. Améliorer la visibilité de votre marque</h3>
                        <p>L'équilibre entre les caractéristiques techniques et le look de votre marque est important. Notre technologie modulaire Everblox garantit que les boutiques en ligne peuvent être entièrement adaptées aux visuels de votre marque. Il est facile de modifier l'apparence du magasin, même si votre stratégie de contenu change.</p>

                    </div>
                    <div className={style.ecommerce_green_content__text_bloc}>
                        <h3>3. Booster les ventes</h3>
                        <p>L'analyse Web fournit des informations précises sur la rentabilité de vos efforts de marketing et sur le comportement des clients dans votre boutique en ligne. Nous vous aidons à utiliser les données des visiteurs comme base pour une prise de décision efficace. Cela nous permet de créer de meilleures expériences utilisateur et des stratégies de vente plus efficaces.</p>

                    </div>
                    <div className={style.ecommerce_green_content__text_bloc}>
                        <h3>4. Surveiller activement les objectifs</h3>
                        <p>Un plan de surveillance approfondi sert de base structurelle pour la mesure. Nous construisons une image de vos clients à partir de plusieurs sources de données, vous aidons à identifier les opportunités de croissance importantes et soutenons votre entreprise en définissant des indicateurs clés pertinents.</p>

                    </div>
                    <div className={style.ecommerce_green_content__text_bloc}>
                        <h3>5. Poursuite du développement et de l'optimisation</h3>
                        <p>Un site Web de commerce électronique ne doit pas être un projet ponctuel, c'est pourquoi nous investissons toujours dans son développement. Par exemple, nous effectuons des tests A/B dans le cadre de l'optimisation des conversions, où nous nous efforçons de trouver des solutions meilleures et plus productives pour votre boutique en ligne. Avec le référencement, nous améliorons votre classement dans les moteurs de recherche, ce qui augmente considérablement la valeur du contenu de votre produit.</p>

                    </div>

                </div>

            </div>
        </div>



    )
}