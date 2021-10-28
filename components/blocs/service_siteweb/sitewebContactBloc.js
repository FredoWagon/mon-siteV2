import style from '../../../styles/blocs/service_technologies/technoContactComponent.module.scss'
import Image from "next/image";
import test_illu from '../../../public/landing_illu.svg'
import siteweb_illustration from "../../../public/website_illustration.png"
import Link from "next/link";
import SpeedFadeIn from "../../effects/SpeedFadeIn";
import ContactComponent from "../../ContactComponent";

export default function SitewebContactBloc() {

    return (

        <div className={style.techno_contact__container}>
            <h2>Et si nous en parlions ensemble ?</h2>
            <div className={style.techno_contact}>

                <ContactComponent/>

            </div>

        </div>

    )
}