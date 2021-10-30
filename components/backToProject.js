


import style from '../styles/components/backToProject.module.scss'
import Link from "next/link";


export default function BackToProject(props) {

    return (
        <div className={`${style.back_to_project__container} ${style[props.backgroundColor]}`}>
            <div className={style.back_to_project}>
                <Link href="/#travaux_anchor">
                    <a>Retour aux travaux</a>
                </Link>
            </div>
        </div>

    )
}