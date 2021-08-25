import SpeedFadeIn from "../../effects/SpeedFadeIn";
import style from "../../../styles/blocs/service_page/serviceheader.module.scss"
import illuService from "../../../public/illu_service.png";
import Image from "next/image";

export default function ServiceHeaderBloc() {

    return (

          <div className={style.service_header_bloc}>

              <div className={style.header_bloc__left}>
                  <SpeedFadeIn>
                  <h1>L'agence unique.</h1>
                  <p>Nous collaborons avec des marques et des agences pour créer des expériences numériques de classe mondiale. Nous aimons ce que nous faisons et nous croyons en la construction de partenariats fondés sur la confiance, l'honnêteté et la soif de créer des choses incroyables ensemble.</p>

                  </SpeedFadeIn>
              </div>

              <div className={style.header_bloc__right}>
                  <Image  src={illuService}/>

              </div>
          </div>

    )

}