


import style from '../styles/components/backToService.module.scss'
import Link from "next/link";


export default function BackToService() {

    return (
        <div className={style.back_to_service__container}>
            <div className={style.back_to_service}>
                <Link href="/nos-services">
                    <a>Retour aux services</a>
                </Link>
            </div>
        </div>

    )
}