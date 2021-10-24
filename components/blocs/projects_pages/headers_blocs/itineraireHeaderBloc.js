import style from "../../../../styles/blocs/projects_pages/headers_blocs/itineraireHeaderBloc.module.scss"
import Image from "next/image";
import Link from "next/link";
export default function ItineraireHeaderBloc() {

    return (
        <div className={style.itineraire_header_bloc__container}>
            <div className={style.itineraire_image__absolute}>
                <Image layout={"fill"} objectFit={"cover"} priority={true} alt="Vignoble dans le brouillard" src="/pokouweb/image-fond-guides-v2_hhz2rf.jpg"/>
            </div>

            <div className={style.itineraire_header_bloc}>
                <div className={style.itineraire_header_bloc__content}>
                    <p>itineraires-vignobles.fr</p>
                    <h1>Découvrez les vignobles autrement </h1>
                    <Link  href="https://www.itineraires-vignobles.fr/">
                        <a target="_blank">
                            Voir le site</a>
                    </Link>
                </div>


            </div>

        </div>

    )

}

