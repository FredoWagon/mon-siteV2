import style from "../../styles/blocs/confidentialite/confidentialiteContentBloc.module.scss"
import SpeedFadeIn from "../effects/SpeedFadeIn";
import Link from 'next/link'

export default function MentionsContentBloc() {


    return (
        <div className={style.confidentialite_content_bloc__container}>

            <div className={ `${style.confidentialite__header__container} ${style.confidentialite__background_blue}`}>
                <div className={style.confidentialite__header}>
                    <SpeedFadeIn customClass="custom_confidentialite_header">

                        <div className={style.confidentialite__header__content}>
                            <h6>Mentions légales</h6>
                            <h1>Bienvenue sur la page la plus appréciée du site !</h1>



                        </div>
                    </SpeedFadeIn>
                </div>



            </div>
            <div className={style.confidentialite__main_content__container}>

                <div className={style.confidentialite__main}>
                    <div className={style.confidentialite__main__content}>
                        <div className={style.confidentialite__maint__text_bloc}>
                            <h2>1. Conditions générales d’utilisation du site et des services proposés.</h2>
                            <p>L’utilisation du site PokouWeb.com implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site PokouWeb.com sont donc invités à les consulter de manière régulière.</p>
                            <p>Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par PokouWeb.com, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention.</p>
                            <p>Le site PokouWeb.com est mis à jour régulièrement par M. Alexandre Bennat. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.</p>

                        </div>
                        <div className={style.confidentialite__maint__text_bloc}>
                            <h2>2. Description des services fournis.</h2>
                            <p>Le site PokouWeb.com a pour objet de fournir une information concernant l’ensemble des activités de la société.</p>
                            <p>PokouWeb s’efforce de fournir sur le site PokouWeb.com des informations aussi précises que possible. Toutefois, il ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>
                            <p>Tous les informations indiquées sur le site PokouWeb.com sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site PokouWeb.com ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.</p>

                        </div>
                        <div className={style.confidentialite__maint__text_bloc}>
                            <h2>3. Limitations contractuelles sur les données techniques.</h2>
                            <p>Le site utilise la technologie JavaScript.</p>
                            <p>Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour.</p>

                        </div>
                        <div className={style.confidentialite__maint__text_bloc}>
                            <h2>4. Propriété intellectuelle et contrefaçons.</h2>
                            <p>PokouWeb est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.</p>
                            <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de PokouWeb.</p>
                            <p>Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>

                        </div>
                        <div className={style.confidentialite__maint__text_bloc}>
                            <h2>5. Limitations de responsabilité.</h2>
                            <p>PokouWeb ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site PokouWeb.com, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.</p>
                            <p>PokouWeb ne pourra également être tenue responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site PokouWeb.com.</p>
                            <p>Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition des utilisateurs. PokouWeb se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, PokouWeb se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie…).</p>

                        </div>
                        <div className={style.confidentialite__maint__text_bloc}>
                            <h2>6. Gestion des données personnelles.</h2>
                            <p>En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l’article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.</p>
                            <p>A l’occasion de l’utilisation du site PokouWeb.com, peuvent êtres recueillies : l’URL des liens par l’intermédiaire desquels l’utilisateur a accédé au site PokouWeb.com, le fournisseur d’accès de l’utilisateur, l’adresse de protocole Internet (IP) de l’utilisateur.</p>
                            <p>En tout état de cause PokouWeb ne collecte des informations personnelles relatives à l’utilisateur que pour le besoin de certains services proposés par le site PokouWeb.com. L’utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu’il procède par lui-même à leur saisie. Il est alors précisé à l’utilisateur du site PokouWeb.com l’obligation ou non de fournir ces informations.</p>
                            <p>Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d’une copie du titre d’identité avec signature du titulaire de la pièce, en précisant l’adresse à laquelle la réponse doit être envoyée.</p>
                            <p>Aucune information personnelle de l’utilisateur du site PokouWeb.com n’est publiée à l’insu de l’utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l’hypothèse du rachat de PokouWeb et de ses droits permettrait la transmission des dites informations à l’éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l’utilisateur du site PokouWeb.com.</p>
                            <p>Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.</p>

                        </div>
                        <div className={style.confidentialite__maint__text_bloc}>
                            <h2>7. Droit applicable et attribution de juridiction.</h2>
                            <p>Tout litige en relation avec l’utilisation du site PokouWeb.com est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Bordeaux.</p>

                        </div>
                        <div className={style.confidentialite__maint__text_bloc}>
                            <h2>8. Les principales lois concernées.</h2>
                            <p>Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l’informatique, aux fichiers et aux libertés.</p>
                            <p>Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique.</p>

                        </div>
                        <div className={style.confidentialite__maint__text_bloc}>
                            <h2>9. Crédits Photos - Illustrations</h2>
                           <ul>
                               <li>pix</li>
                               <li>clouck</li>
                               <li>Photographies: <Link href="https://unsplash.com//"><a target="_blank" >unsplash.com</a></Link></li>
                               <li>Illustrations: <Link href="https://absurd.design/"><a target="_blank" >absurd.design</a></Link></li>
                               <li>Illustrations: <Link href="https://craftwork.design/"><a target="_blank">craftwork.design</a></Link></li>
                           </ul>

                        </div>
                        <div className={style.confidentialite__maint__text_bloc}>
                            <h2>10. Lexique</h2>
                           <p>Utilisateur : Internaute se connectant, utilisant le site susnommé.</p>
                            <p>Informations personnelles : « les informations qui permettent, sous quelque forme que ce soit, directement ou non, l’identification des personnes physiques auxquelles elles s’appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).</p>

                        </div>
                        <Link href="/">
                            <a>Retour à l'acceuil</a>
                        </Link>


                        </div>




                    </div>

                </div>



        </div>
    )
}