import style from "../../styles/blocs/confidentialite/confidentialiteContentBloc.module.scss"
import SpeedFadeIn from "../effects/SpeedFadeIn";

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
                            <p>Nous pouvons mettre à jour cette politique de confidentialité de temps à autre en publiant une nouvelle version en ligne. Vous devriez vérifier cette page de temps en temps pour examiner tout changement. Mais sérieusement, qui le fait ? Nous ferons de notre mieux pour vous informer si des changements surviennent.</p>

                        </div>

                    </div>

                </div>


            </div>
        </div>
    )
}