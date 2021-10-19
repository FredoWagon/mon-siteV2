import style from "../styles/components/cookieModal.module.scss"
import {useEffect, useState} from "react";
import {useAppContext} from "../context/state";
import Image from 'next/image'
import croix from "../public/croix.svg"
import cookieCutter from 'cookie-cutter'
import Link from 'next/link';
import moment from "moment";


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
        const cookieExpiration = moment().add(99, 'days').toDate();
        cookieCutter.set('cookie_consent', true, {expires: cookieExpiration});
        setDisplayModal(false);
    }

    return (
        <>
        {displayModal &&
        <div className={style.cookie_modal__container}>
            <span>En visitant ce site web, vous acceptez notre <Link href="/politique-de-confidentialite"><a >politique sur l'utilisation des cookies.</a></Link> </span>
            <div className={style.cookie_modal__close}>
               <Image width="20.8" height="20.8" onClick={handleCookie} alt="Bouton fermer" src="/pokouweb/croix_spmouh.svg"/>
            </div>

        </div>
        }
        </>
    )
}