import style from "../../../../styles/blocs/projects_pages/headers_blocs/trendCornerHeaderBloc.module.scss"
import Link from "next/link";

export default function TrendCornerHeaderBloc() {

    return (
        <div className={style.trendcorner_header_bloc__container}>
            <div className={style.trendcorner_header_bloc}>
                <div className={style.trendcorner_header_bloc__content}>
                    <p>TrendCorner</p>
                    <h1>Une application de trading à haute vitesse</h1>
                    <Link  href="#">
                        <a >En cours de réalisation</a>
                    </Link>
                </div>


            </div>

        </div>

    )

}