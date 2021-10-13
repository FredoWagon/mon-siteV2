import style from "../styles/components/cookieModal.module.scss"
import {useEffect, useState} from "react";
import {useAppContext} from "../context/state";
import Image from 'next/image'
import croix from "../public/croix.svg"
import cookieCutter from 'cookie-cutter'
import Link from 'next/link';


export default function CookieModal() {
    const {cookieModalClosed, setCookieModalState} = useAppContext();
    const [displayModal, setDisplayModal] = useState(false)


    useEffect( () => {
        const cookie = cookieCutter.get('cookie_consent')

        if (cookie) {
            setDisplayModal(false)
        } else {
            setDisplayModal(true)
        }

    },[displayModal])

    const handleCookie = () => {
        cookieCutter.set('cookie_consent', true);
        setDisplayModal(false);
    }

    return (
        <>
        {displayModal &&
        <div className={style.cookie_modal__container}>
            <span>En visitant ce site web, vous acceptez notre <Link href="/politique-de-confidentialite"><a >politique sur l'utilisation des cookies.</a></Link> </span>
            <div className={style.cookie_modal__close}>
                <Image onClick={handleCookie} src={croix}/>
            </div>

        </div>
        }
        </>
    )
}