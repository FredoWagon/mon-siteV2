import style from '../../../styles/blocs/about_page/UsPictures.module.scss'
import fred from '../../../public/fred.jpg'
import greg from '../../../public/greg.jpg'
import max from '../../../public/maxence.jpg'
import nono from '../../../public/noemie.jpg'
import olivier from '../../../public/olivier.jpg'
import Image from 'next/image'
import FadeTranslateTopWhenVisible from "../../effects/FadeTranslateTopWhenVisible";

export default function UsPictures() {

    return (
        <div className={style.us_picture__container}>
            <div className={style.us_picture}>
                <h2>Nous</h2>
                <div className={style.us_picture__content}>




                    <div className={style.us_picture__items}>
                        <FadeTranslateTopWhenVisible tresholdOption={0} customStartDistance="custom_nous_picture" animation="fast">
                        <div className={style.us_picture__image}>
                            <Image src={fred}/>

                        </div>
                        </FadeTranslateTopWhenVisible>
                        <div className={style.us_picture__info}>
                            <h3>Frédéric Legrand</h3>
                            <p>Developpeur</p>

                        </div>

                    </div>


                    <div className={style.us_picture__items}>
                        <FadeTranslateTopWhenVisible tresholdOption={0} customStartDistance="custom_nous_picture" animation="middle">
                        <div className={style.us_picture__image}>
                            <Image src={nono}/>

                        </div>
                        </FadeTranslateTopWhenVisible>
                        <div className={style.us_picture__info}>
                            <h3>Noémie Fournier</h3>
                            <p>Developpeur Wordpress</p>

                        </div>

                    </div>


                    <div className={style.us_picture__items}>
                        <FadeTranslateTopWhenVisible tresholdOption={0} customStartDistance="custom_nous_picture" animation="slow">
                        <div className={style.us_picture__image}>
                            <Image src={olivier}/>

                        </div>
                        </FadeTranslateTopWhenVisible>
                        <div className={style.us_picture__info}>
                            <h3>Olivier Bouzon</h3>
                            <p>Developpeur</p>

                        </div>

                    </div>
                    <div className={style.us_picture__items}>
                        <FadeTranslateTopWhenVisible tresholdOption={0} customStartDistance="custom_nous_picture" animation="middle">
                        <div className={style.us_picture__image}>
                            <Image src={greg}/>

                        </div>
                    </FadeTranslateTopWhenVisible>
                        <div className={style.us_picture__info}>
                            <h3>Grégoire Rénaldo</h3>
                            <p>Developpeur</p>

                        </div>

                    </div>


                    <div className={style.us_picture__items}>
                        <FadeTranslateTopWhenVisible tresholdOption={0} customStartDistance="custom_nous_picture" animation="slow">
                        <div className={style.us_picture__image}>
                            <Image src={max}/>

                        </div>
                        </FadeTranslateTopWhenVisible>
                        <div className={style.us_picture__info}>
                            <h3>Maxence Pautre</h3>
                            <p>Developpeur</p>

                        </div>

                    </div>


                </div>
            </div>


        </div>
    )
}