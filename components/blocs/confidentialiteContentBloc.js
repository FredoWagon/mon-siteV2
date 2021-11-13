import style from "../../styles/blocs/confidentialite/confidentialiteContentBloc.module.scss"
import SpeedFadeIn from "../effects/SpeedFadeIn";
import Link from 'next/link'

export default function ConfidentialiteContentBloc() {


    return (
        <div className={style.confidentialite_content_bloc__container}>

            <div className={style.confidentialite__header__container}>
                <div className={style.confidentialite__header}>
                    <SpeedFadeIn customClass="custom_confidentialite_header">

                        <div className={style.confidentialite__header__content}>
                            <h6>Politique de confidentialité</h6>
                            <h1>Nous sommes chargés de protéger votre vie privée.</h1>

                            <p><strong>Cette politique de confidentialité s'applique à notre site Web www.pokouweb.com.</strong></p>
                            <i>Dernière modification : 01.10.2021</i>

                            <div className={style.confidentialite__text_bloc}>
                                <p>Cette politique de confidentialité explique comment nous traitons et utilisons les données collectées auprès des utilisateurs sur notre site Web. En utilisant le site Web, vous acceptez nos pratiques en matière de données décrites dans la présente politique de confidentialité. Si vous n'acceptez pas les pratiques en matière de données décrites dans la présente politique de confidentialité, vous ne devez pas utiliser le site Web. C'est si simple.</p>
                            </div>
                            <div className={style.confidentialite__text_bloc}>
                                <p>Vous avez également la possibilité d'explorer le site Web sans fournir aucune information sur vous-même. Sachez que cela se traduira par une qualité de service et une expérience moindres.</p>
                            </div>
                            <div className={style.confidentialite__text_bloc}>
                                <p>Passons donc à nos pratiques de données. Alerte spoiler :  aucune astuce sophistiquée ou escroquerie sournoise incluse. Mais si vous lisez assez longtemps, vous pourriez être récompensé.</p>
                            </div>

                        </div>
                    </SpeedFadeIn>
                </div>



            </div>
            <div className={style.confidentialite__main_content__container}>

                <div className={style.confidentialite__main}>
                    <div className={style.confidentialite__main__content}>
                        <div className={style.confidentialite__maint__text_bloc}>
                            <h2>1. Modifications de cette politique de confidentialité</h2>
                            <p>Nous pouvons mettre à jour cette politique de confidentialité de temps à autre en publiant une nouvelle version en ligne. Vous devriez vérifier cette page de temps en temps pour examiner tout changement. Mais sérieusement, qui le fait ? Nous ferons de notre mieux pour vous informer si des changements surviennent.</p>

                        </div>
                        <div className={style.confidentialite__maint__text_bloc}>
                            <h4>Technologie employée</h4>
                            <p>Next.js</p>
                            <h4>Hébergement</h4>
                            <p>Netlify.com</p>
                            <h4>Coordonnées</h4>
                            <p>Si vous avez des questions sur cette politique de confidentialité, veuillez nous envoyer un e-mail à <mark>contact@pokouweb.fr</mark> </p>
                        </div>
                        <div className={style.confidentialite__maint__text_bloc}>
                            <h2>2. Les informations que nous collectons</h2>
                            <p>Nous collectons des informations lorsque vous utilisez notre site Web ou saisissez des informations sur notre site, par exemple via un formulaire. Votre consentement nous donne la base légale pour le traitement des données collectées. Voici une liste de ce que vous pouvez nous attendre à collecter :</p>
                            <ul>
                                <li>Nom et coordonnées (nom et prénom, adresse e-mail, numéro de téléphone, adresse postale, code postal, bureau de poste et pays)</li>
                                <li>Informations sur le projet fournies par le client</li>
                                <li>Votre consentement et/ou objection au marketing</li>
                                <li>Informations que vous nous fournissez dans une demande d'emploi</li>
                                <li>Informations sur votre ordinateur et vos visites sur ce site Web, y compris votre adresse IP, votre emplacement géographique, le type de navigateur, la source de référence. Veuillez consulter la section Informations de navigation ci-dessous.
                                </li>
                                
                            </ul>

                        </div>
                        <div className={style.confidentialite__maint__text_bloc}>
                            <h2>3. Informations de navigation</h2>
                            <h4>3.1. Cookies</h4>
                             <p>Nous utilisons des cookies de navigateur. En bref, un cookie de navigateur est un fichier texte qui est placé sur votre disque dur par un serveur Web. L'un des principaux objectifs des cookies de navigateur est de fournir une fonctionnalité de commodité qui vous fera gagner du temps et améliorera votre expérience.</p>
                            <p>PokouWeb garde une trace des sites Web et des pages que vous visitez dans le domaine www.PokouWeb.com. Cela nous permet de voir quelles parties du site PokouWeb vous utilisez le plus. Nous pouvons utiliser ces données pour fournir du contenu personnalisé et des promotions sur le site Web PokouWeb aux utilisateurs, dont le comportement indique qu'ils sont intéressés par un domaine particulier.</p>
                            <p>Dans le cas où vous ne souhaitez pas que nous installions de cookies sur votre ordinateur, vous pouvez désactiver l’installation des cookies dans votre navigateur.
                                Vous trouverez l’ensemble des informations pour désactiver les cookies pour chacun des navigateurs suivants :</p>
                            <p> Chrome :</p>
                                <a rel="noreferrer" href="https://support.google.com/chrome/answer/95647?hl=fr&ref_topic=14666" target="_blank">https://support.google.com/chrome/answer/95647?hl=fr&ref_topic=14666</a>
                            <p> Internet Explorer:</p>
                                <a rel="noreferrer" href=" https://support.microsoft.com/fr-fr/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank"> https://support.microsoft.com/fr-fr/help/17442/windows-internet-explorer-delete-manage-cookies</a>
                            <p> Firefox :</p>
                                <a rel="noreferrer" href="https://support.mozilla.org/fr/kb/protection-renforcee-contre-pistage-firefox-ordinateur" target="_blank">https://support.mozilla.org/fr/kb/protection-renforcee-contre-pistage-firefox-ordinateur</a>
                            <p>
                                Safari :</p>
                                <a rel="noreferrer" href="https://support.apple.com/fr-fr/HT201265" target="_blank">https://support.apple.com/fr-fr/HT201265</a>
                            <p> Opéra :</p>
                                <a rel="noreferrer" href="https://help.opera.com/en/latest/web-preferences/" target="_blank">https://help.opera.com/en/latest/web-preferences/</a>
                               </div>
                        <div className={style.confidentialite__maint__text_bloc}>
                            <h2>4. Comment nous utilisons les informations</h2>
                            <p>Nous utilisons les informations que nous collectons des manières suivantes.</p>
                            <h4>4.1. Comment nous utilisons les informations personnelles</h4>
                            <p>Nous pouvons utiliser le profilage client pour :</p>
                            <ul>
                                <li>améliorer la qualité du service</li>
                                <li>améliorer le ciblage de notre marketing</li>
                            </ul>
                            <p>Nous pouvons utiliser les informations personnelles pour :</p>
                            <ul>
                                <li>améliorer votre expérience de navigation en personnalisant le site</li>
                                <li>vous contacter et envoyer des informations que nous pensons susceptibles de vous intéresser par courrier, e-mail ou tout autre moyen</li>
                                <li>vous envoyer des communications marketing liées aux activités de tiers soigneusement sélectionnés que nous pensons susceptibles de vous intéresser</li>
                            </ul>
                            <h4>4.2. Comment nous utilisons les informations de navigation</h4>
                            <p>Nous utilisons les informations de navigation pour exploiter et améliorer le site Web. Nous pouvons également utiliser les informations de navigation seules ou en combinaison avec des informations personnelles pour vous fournir des informations personnalisées sur PokouWeb.</p>
                            <h4>4.3. Nous ne vendons jamais d'informations personnelles</h4>
                            <p>Nous ne vendrons jamais vos informations personnelles à des tiers. Nous pouvons, de temps à autre, vous contacter au nom de partenaires commerciaux externes au sujet d'une offre particulière susceptible de vous intéresser. Dans ces cas, nous ne transférons pas vos informations personnelles uniques à un tiers.</p>
                            <h4>4.4. Les fournisseurs de services</h4>
                            <p>Nous employons d'autres sociétés pour fournir des services aux visiteurs de notre site Web. Dans certains cas, nous pouvons avoir besoin de partager vos informations avec eux pour vous offrir une expérience utilisateur complète. Dans de tels cas, nous demandons explicitement au tiers de reconnaître et d'adhérer à nos politiques de confidentialité et de traitement des données client. Signification du contenu de cette politique de confidentialité.</p>


                            <h4>4.5. Fonctionnalités des médias sociaux</h4>
                            <p>Notre site Web comprend des fonctionnalités de médias sociaux, telles que le bouton Facebook Like et des widgets, tels que le bouton Share this ou des mini-programmes interactifs qui s'exécutent sur notre site. <strong> Cette politique de confidentialité ne s'applique pas à ces fonctionnalités.</strong>   Vos interactions avec ces fonctionnalités sont régies par la politique de confidentialité et les autres politiques des sociétés qui les fournissent.</p>
                            <h4>4.6. Sites Web externes</h4>
                            <p>Notre site Web contient des liens vers d'autres sites Web. Veuillez noter que nous ne contrôlons pas et ne sommes pas responsables du contenu ou des pratiques utilisés sur ces autres sites Web. <strong>Cette politique de confidentialité ne s'applique pas à ces autres sites Web</strong> , qui sont soumis à leurs politiques de confidentialité et autres.</p>
                            <h4>4.7. Conservation des renseignements personnels</h4>
                            <p>Nous conservons les informations personnelles que vous acceptez de fournir pendant deux (2) ans, puis nous supprimons les informations en toute sécurité. Vous pouvez également demander que nous supprimions vos informations des serveurs à tout moment. Ce n'est pas tout - en savoir plus sur vos droits ci-dessous dans  6. Comment accéder et contrôler vos informations personnelles .</p>
                            <p>Pour utiliser vos droits, veuillez nous contacter directement (voir :  2 Coordonnées ). Nous modifierons, corrigerons ou supprimerons rapidement vos informations et vous informerons des mesures que nous avons prises.</p>
                            <p>Très bien alors - on dirait que vous méritez un autre cookie !  ??</p>

                        </div>

                        <Link href="/">
                            <a>Retour à l'accueil</a>
                        </Link>



                    </div>

                </div>


            </div>
        </div>
    )
}