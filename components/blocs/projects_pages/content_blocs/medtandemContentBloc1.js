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
                            <h2>Le défi : une structure complexe</h2>
                            <p>L'ancien medTandem.com a servi ses groupes cibles malgré la structure, pas à cause d'elle. Le site avait beaucoup de bon contenu, mais il manquait une hiérarchie claire et la navigation sur le site prenait trop de temps à l'utilisateur. Les messages nécessitaient des éclaircissements, en particulier pour les vues mobiles. Les pages mobiles étaient longues et leur mise en page se cassait par endroits, ce qui rendait les pages difficiles à lire et l'essentiel se perdait souvent dans un corps de texte. L'ancien site ne fonctionnait pas non plus de la meilleure façon possible pour les producteurs de contenu, car les informations devaient être saisies à de nombreux endroits différents.</p>
                            <p>Dans la solution précédente, le site Web et le commerce électronique de Medtandem étaient implémentés en tant que deux systèmes distincts. Ainsi, l'un de nos objectifs était de fusionner le site Web et la boutique de commerce électronique sur la même plate-forme. Même si les produits de Medtandem sont attrayants pour son public cible, l'apparence de l'ancien site ne supportait pas cela de la meilleure façon. Le site n'a pas non plus vraiment incité les utilisateurs à acheter les matériaux et services de Medtandem : la navigation vers la boutique en ligne via la page d'accueil était difficile, les différences entre les types de produits étaient difficiles à comprendre et le choix du bon produit était ardu.</p>

                        </div>
                        <div className={style.text__bloc}>
                            <h2>L'objectif : des visuels modernes et des ajouts de fonctionnalités</h2>
                            <p>Au début de notre collaboration, le manque de clarté du site est apparu comme le problème le plus important. Medtandem veut communiquer la stabilité et la fiabilité car il produit un volume élevé de matériel d'apprentissage de qualité. Dans le même temps, l'objectif était d'équilibrer cette image avec un look moderne et jeune, car leurs groupes cibles sont principalement constitués d'étudiants.</p>
                            <p>Nos priorités étaient une structure plus claire et des parcours d'achat mieux définis, une mise en page fraîche et moderne, une boutique en ligne parfaitement intégrée au site et une interface mobile plus conviviale. Les supports marketing de Mafy ont également été mis à jour pour refléter le nouveau look visuel.</p>
                            <p>La boutique en ligne de Medtandem a été implémentée en tant que partie intégrante du site avec WooCommerce. Le chemin d'achat de l'utilisateur fonctionne de manière transparente sans connexion. L'automatisation du marketing a également été mise en œuvre sur le site via Active Campaign.</p>
                        </div>
                    </div>


                </div>
                <div className={style.main__info__image}>
                    <Image src={medtandemDesktop}/>
                </div>



            </div>

            <div className={style.main_info__container__green}>

            </div>

        </>



    )
}