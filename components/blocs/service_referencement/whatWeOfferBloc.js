import style from '../../../styles/blocs/service_referencement/whatWeOfferBloc.module.scss'
import Image from "next/image";
import test_illu from '../../../public/landing_illu.svg'
import Link from "next/link";
import SpeedFadeIn from "../../effects/SpeedFadeIn";

export default function WhatWeOfferBloc() {

    return (

       <div className={style.whatWeOfferBloc__container}>
           <div className={style.whatWeOfferBloc}>
               <h2>Ce que nous offrons</h2>
               <div className={style.whatWeOfferBloc__row}>
                   <div className={style.whatWeOfferBloc__items}>
                       <h3>Recherche de mots clés</h3>
                       <p>Avec la recherche par mots clés, l'objectif est de trouver les termes de recherche que vos clients potentiels utilisent lorsqu'ils recherchent des services ou des produits liés à votre entreprise. Le contenu optimisé garantit que votre site est trouvé dans les résultats de recherche en répondant aux besoins des clients potentiels.</p>

                   </div>
                   <div className={style.whatWeOfferBloc__items}>
                       <h3>Référencement technique</h3>
                       <p>L'optimisation technique affecte la structure et les performances d'un site. Il garantit qu'un site est facilement trouvé et indexé par les robots des moteurs de recherche. Optimiser et tester différentes structures de site est la base pour obtenir la meilleure visibilité.</p>

                   </div>

               </div>
               <div className={style.whatWeOfferBloc__row}>
                   <div className={style.whatWeOfferBloc__items}>
                       <h3>Création de liens</h3>
                       <p>Les moteurs de recherche évaluent votre site en fonction des liens d'autres sites vers le vôtre. Plus la page qui renvoie vers votre page est populaire et de haute qualité, plus le lien offre de la valeur. La création de liens doit faire partie d'un plan de contenu efficace et facile à respecter.</p>

                   </div>
                   <div className={style.whatWeOfferBloc__items}>
                       <h3>Rapports SERP</h3>
                       <p>En référencement, le but est d'influencer le classement d'un site dans les résultats des moteurs de recherche. Le développement des mots-clés sélectionnés doit être suivi à un rythme régulier. Dans les rapports SERP (Search Engine Results Page), nous surveillons le développement de votre site spécifiquement du point de vue du trafic organique.</p>

                   </div>

               </div>

           </div>
       </div>

    )
}