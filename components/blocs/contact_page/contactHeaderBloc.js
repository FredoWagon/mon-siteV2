import style from "../../../styles/blocs/contact_page/contactHeaderBloc.module.scss"
import Image from 'next/image'
import contact_picture from "../../../public/contact_background.png"
import ContactComponent from "../../ContactComponent";
import SpeedFadeIn from "../../effects/SpeedFadeIn";

export default function ContactHeaderBloc() {

    return (
        <div className={style.contact_header_container}>
            <SpeedFadeIn customClass="custom_contact_header">

            <div className={style.contact_header}>
                <div className={style.contact_header__background_image}>
                    <Image priority={true} width="480" alt="Parlez nous !" height="480" src="/pokouweb/contact_background_itz0o8_aavxnb.webp"/>


                </div>
                <h1>Commençons !</h1>

                <div className={style.contact_header__form}>
                   <ContactComponent/>
                </div>

            </div>
            </SpeedFadeIn>
        </div>
    )
}