import style from '../../../styles/blocs/service_siteweb/staticToAppBloc.module.scss'
import Image from "next/image";
import illu_statis from '../../../public/illu_blue_bloc.png'
import bottom_img from '../../../public/online-web-design.jpg'

export default function  StaticToAppBloc() {

    return(
        <div className={style.statictoapp__container}>
            <div className={style.statictoapp}>
                <div className={style.static__row}>
                    <div className={style.static__left}>
                        <h2>Du sitre vitrine ..</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur molestias quibusdam recusandae. Autem eveniet illum labore modi possimus quaerat, quia quisquam totam! Architecto ea nemo tempore velit veniam! Adipisci, in!</p>

                    </div>
                    <div className={style.static__right}>
                        <Image src={illu_statis}/>

                    </div>

                </div>
                <div className={`${style.static__row} ${style.right__type}` }>

                    <div className={style.static__right}>
                        <Image src={illu_statis}/>

                    </div>
                    <div className={style.static__left}>
                        <h2>à l'application Web</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur molestias quibusdam recusandae. Autem eveniet illum labore modi possimus quaerat, quia quisquam totam! Architecto ea nemo tempore velit veniam! Adipisci, in!</p>

                    </div>

                </div>
                <div className={style.static__row}>
                    <div className={style.static__left}>
                        <h2>et plus encore !</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur molestias quibusdam recusandae. Autem eveniet illum labore modi possimus quaerat, quia quisquam totam! Architecto ea nemo tempore velit veniam! Adipisci, in!</p>

                    </div>
                    <div className={style.static__right}>
                        <Image src={illu_statis}/>

                    </div>

                </div>

            </div>
            <div className={style.statictoapp__bottom_image}>
                <Image src={bottom_img}/>

            </div>
            <div className={style.statictoapp}>
                <div className={style.static__row}>
                    <div className={style.static__left}>
                        <h2>Du sitre vitrine ..</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur molestias quibusdam recusandae. Autem eveniet illum labore modi possimus quaerat, quia quisquam totam! Architecto ea nemo tempore velit veniam! Adipisci, in!</p>

                    </div>
                    <div className={style.static__right}>
                        <Image src={illu_statis}/>

                    </div>

                </div>
                <div className={`${style.static__row} ${style.right__type}` }>

                    <div className={style.static__right}>
                        <Image src={illu_statis}/>

                    </div>
                    <div className={style.static__left}>
                        <h2>à l'application Web</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur molestias quibusdam recusandae. Autem eveniet illum labore modi possimus quaerat, quia quisquam totam! Architecto ea nemo tempore velit veniam! Adipisci, in!</p>

                    </div>

                </div>
                <div className={style.static__row}>
                    <div className={style.static__left}>
                        <h2>et plus encore !</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur molestias quibusdam recusandae. Autem eveniet illum labore modi possimus quaerat, quia quisquam totam! Architecto ea nemo tempore velit veniam! Adipisci, in!</p>

                    </div>
                    <div className={style.static__right}>
                        <Image src={illu_statis}/>

                    </div>

                </div>

            </div>

            <div className={style.green_background__container}>
                <div className={`${style.statictoapp} ${style.statictoapp__green_background}`}>
                    <div className={style.static__row}>
                        <div className={style.static__left}>
                            <h2>Du sitre vitrine ..</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur molestias quibusdam recusandae. Autem eveniet illum labore modi possimus quaerat, quia quisquam totam! Architecto ea nemo tempore velit veniam! Adipisci, in!</p>

                        </div>
                        <div className={style.static__right}>
                            <Image src={illu_statis}/>

                        </div>

                    </div>
                    <div className={`${style.static__row} ${style.right__type}` }>

                        <div className={style.static__right}>
                            <Image src={illu_statis}/>

                        </div>
                        <div className={style.static__left}>
                            <h2>à l'application Web</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur molestias quibusdam recusandae. Autem eveniet illum labore modi possimus quaerat, quia quisquam totam! Architecto ea nemo tempore velit veniam! Adipisci, in!</p>

                        </div>

                    </div>


                </div>
            </div>




        </div>
    )
}