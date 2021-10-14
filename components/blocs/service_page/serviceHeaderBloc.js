import SpeedFadeIn from "../../effects/SpeedFadeIn";
import style from "../../../styles/blocs/service_page/serviceheader.module.scss"
import illuService from "../../../public/illu_service.png";
import serviceHeader from '../../../public/service_header.png'
import service_illustration from "../../../public/service_illustration.png"
import Image from "next/image";

export default function ServiceHeaderBloc() {

    return (
        <div className={style.service_header_bloc__container}>
            <div className={style.service_header_bloc}>

                <div className={style.header_bloc__left}>
                    <SpeedFadeIn customClass="custom_service_header">
                        <h1>L'agence unique.</h1>
                        <p>Nous travaillons avec des petites et grandes entreprises pour créer des expériences numériques unique. Nous aimons ce que nous faisons et nous croyons en la construction de partenariats fondés sur la confiance, l'honnêteté et la soif de créer des choses incroyables ensemble.</p>

                    </SpeedFadeIn>
                </div>

                <div className={style.header_bloc__right}>
                    <Image priority={true}  src={service_illustration}/>

                </div>
            </div>
        </div>



    )

}