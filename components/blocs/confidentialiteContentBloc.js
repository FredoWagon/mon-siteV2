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
                            <h2>2. Administrateur de la base de données et coordonnées</h2>
                            <h4>2.1 Nom et administrateur de la base de données</h4>
                            <p>Vercel.com</p>
                            <h4>2.2 Coordonnées</h4>
                            <p>Si vous avez des questions sur cette politique de confidentialité, veuillez nous envoyer un e-mail à <mark>fedde.leg@gmail.com</mark> </p>
                        </div>
                        <div className={style.confidentialite__maint__text_bloc}>
                            <h2>3. Les informations que nous collectons</h2>
                            <p>Nous collectons des informations lorsque vous utilisez notre site Web ou saisissez des informations sur notre site, par exemple via un formulaire. Votre consentement nous donne la base légale pour le traitement des données collectées. Voici une liste de ce que vous pouvez nous attendre à collecter :</p>
                            <ul>
                                <li>Nom et coordonnées (nom et prénom, adresse e-mail, numéro de téléphone, adresse postale, code postal, bureau de poste et pays)</li>
                                <li>Votre rôle, nom de l'entreprise et titre du poste</li>
                                <li>Vos intérêts</li>
                                <li>Informations sur le projet fournies par le client</li>
                                <li>Votre consentement et/ou objection au marketing</li>
                                <li>Informations que vous nous fournissez dans une demande d'emploi</li>
                                <li>Informations sur votre ordinateur et vos visites sur ce site Web, y compris votre adresse IP, votre emplacement géographique, le type de navigateur, la source de référence, l'historique des recherches, l'historique YouTube, les données des sites partenaires, la durée de la visite et les pages consultées. Veuillez consulter la section Informations de navigation ci-dessous.
                                </li>
                                
                            </ul>

                        </div>
                        <div className={style.confidentialite__maint__text_bloc}>
                            <h2>4. Informations de navigation</h2>
                            <h4>4.1. Cookies</h4>
                            <p>Nous utilisons des cookies pour personnaliser et optimiser votre expérience en ligne. Un cookie est un aliment cuit ou cuit qui est petit, plat et sucré. Il contient généralement de la farine, du sucre et un certain type d'huile ou de graisse. Ce ne sont pas les cookies que nous utilisons.</p>
                          <p>Nous utilisons des cookies de navigateur. En bref, un cookie de navigateur est un fichier texte qui est placé sur votre disque dur par un serveur Web. L'un des principaux objectifs des cookies de navigateur est de fournir une fonctionnalité de commodité qui vous fera gagner du temps et améliorera votre expérience.</p>
                            <p>PokouWeb garde une trace des sites Web et des pages que vous visitez dans le domaine www.PokouWeb.com. Cela nous permet de voir quelles parties du site PokouWeb vous utilisez le plus. Nous pouvons utiliser ces données pour fournir du contenu personnalisé et des promotions sur le site Web PokouWeb aux utilisateurs, dont le comportement indique qu'ils sont intéressés par un domaine particulier. C'est pour ton bien!</p>
                            <p>Vous avez la possibilité d'accepter ou de refuser les cookies du navigateur. Conseil de pro : vous ne devez jamais refuser les cookies de type alimentaire, et refuser les cookies du navigateur sur notre site Web n'a également que très peu de sens. Si vous choisissez de refuser les cookies du navigateur, vous ne pourrez peut-être pas profiter pleinement des fonctionnalités interactives du site Web.</p>
                            <p>Vous devez maintenant connaître les différences entre les cookies et les cookies de navigateur. Si vous avez lu jusqu'ici, nous aimerions vous récompenser en vous invitant pour un cookie à notre bureau.</p>

                            <h4>4.2. Fichiers journaux</h4>
                            <p>Nous pouvons collecter des informations démographiques à l'aide de fichiers journaux qui ne sont pas associés à votre nom ou à d'autres informations d'identification personnelle.</p>
                            <p>De plus, certaines informations sur le matériel et les logiciels de votre ordinateur sont automatiquement collectées. Ces informations peuvent inclure votre adresse IP, le type d'appareil et de navigateur, les noms de domaine, les heures d'accès et les adresses de sites Web de référence.</p>
                            <p>Ces informations sont utilisées pour fournir des statistiques générales concernant l'utilisation de notre site Web et pour nous aider à maintenir une qualité de service élevée. À ces fins, nous pouvons lier ces données collectées automatiquement à vos informations personnelles telles que le nom, l'adresse e-mail, l'adresse et le numéro de téléphone.</p>
                        </div>
                        <div className={style.confidentialite__maint__text_bloc}>
                            <h2>5. Comment nous utilisons les informations</h2>
                            <p>Nous utilisons les informations que nous collectons des manières suivantes.</p>
                            <h4>5.1. Comment nous utilisons les informations personnelles</h4>
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
                            <h4>5.2. Comment nous utilisons les informations de navigation</h4>
                            <p>Nous utilisons les informations de navigation pour exploiter et améliorer le site Web. Nous pouvons également utiliser les informations de navigation seules ou en combinaison avec des informations personnelles pour vous fournir des informations personnalisées sur PokouWeb.</p>
                            <h4>5.3. Nous ne vendons jamais d'informations personnelles</h4>
                            <p>Nous ne vendrons jamais vos informations personnelles à des tiers. Nous pouvons, de temps à autre, vous contacter au nom de partenaires commerciaux externes au sujet d'une offre particulière susceptible de vous intéresser. Dans ces cas, nous ne transférons pas vos informations personnelles uniques à un tiers.</p>
                            <h4>5.4. Les fournisseurs de services</h4>
                            <p>Nous employons d'autres sociétés pour fournir des services aux visiteurs de notre site Web. Dans certains cas, nous pouvons avoir besoin de partager vos informations avec eux pour vous offrir une expérience utilisateur complète. Dans de tels cas, nous demandons explicitement au tiers de reconnaître et d'adhérer à nos politiques de confidentialité et de traitement des données client. Signification du contenu de cette politique de confidentialité.</p>


                            <h4>5.5. Fonctionnalités des médias sociaux</h4>
                            <p>Notre site Web comprend des fonctionnalités de médias sociaux, telles que le bouton Facebook Like et des widgets, tels que le bouton Share this ou des mini-programmes interactifs qui s'exécutent sur notre site. <strong> Cette politique de confidentialité ne s'applique pas à ces fonctionnalités.</strong>   Vos interactions avec ces fonctionnalités sont régies par la politique de confidentialité et les autres politiques des sociétés qui les fournissent.</p>
                            <h4>5.6. Sites Web externes</h4>
                            <p>Notre site Web contient des liens vers d'autres sites Web. Veuillez noter que nous ne contrôlons pas et ne sommes pas responsables du contenu ou des pratiques utilisés sur ces autres sites Web. <strong>Cette politique de confidentialité ne s'applique pas à ces autres sites Web</strong> , qui sont soumis à leurs politiques de confidentialité et autres.</p>
                            <h4>5.7. Conservation des renseignements personnels</h4>
                            <p>Nous conservons les informations personnelles que vous acceptez de fournir pendant deux (2) ans, puis nous supprimons les informations en toute sécurité. Vous pouvez également demander que nous supprimions vos informations des serveurs à tout moment. Ce n'est pas tout - en savoir plus sur vos droits ci-dessous dans  6. Comment accéder et contrôler vos informations personnelles .</p>
                            <h4>5.8. Événements d'entreprise</h4>
                            <p>Si nous (ou nos actifs) sommes acquis par une autre société, que ce soit par fusion, acquisition, faillite ou autre, cette société recevrait toutes les informations recueillies par PokouWeb sur le site Web jusqu'à ce point.</p>
                            <div className={style.confidentialite__maint__text_bloc}>
                                <h2>6. Comment accéder et contrôler vos informations personnelles</h2>
                               
                                <p>Si et quand vous acceptez de nous fournir vos informations personnelles, cela ne signifie pas que nous vous possédons. En ce qui concerne les informations fournies, vous avez le droit de :
                                </p>
                               <ul>
                                   <li>examiner les informations utilisateur que nous avons collectées à votre sujet</li>
                                   <li>nous demander de corriger toute erreur, information obsolète ou omission dans les informations personnelles que nous avons collectées</li>
                                   <li>demander que vos informations d'utilisateur ne soient pas utilisées pour vous contacter</li>
                                   <li>demander que vos informations d'utilisateur soient supprimées de nos dossiers</li>
                                   <li>refuser d'être contacté par PokouWeb ou des tiers</li>
                               </ul>
                                <p>Pour utiliser vos droits, veuillez nous contacter directement (voir :  2 Coordonnées ). Nous modifierons, corrigerons ou supprimerons rapidement vos informations et vous informerons des mesures que nous avons prises.</p>
                                <p>Très bien alors - on dirait que vous méritez un autre cookie !  ??</p>
                            </div>

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