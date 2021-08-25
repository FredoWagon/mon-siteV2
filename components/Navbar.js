import style from '../styles/components/navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.svg'
import {useEffect, useState} from "react";

export default function Navbar(props) {

const [backgroundColor, setBackgroundColor] = useState("")

    useEffect( () => {
        setBackgroundColor(props.backgroundColor)
        return () => {
            console.log("navbar se demonte")
        }
    }, [props])


    return (
        <div className={`${style.navbar} ${style[backgroundColor]}`}>
            <Link href="/">
                <a>
                    <div className={style.navbar__top}>
                        <Image src={logo}/>
                        <h1>pokoù Web</h1>
                    </div>
                </a>
            </Link>
            <div className={style.navbar__bottom}>
                <div className={style.nav__links_left}>
                    <Link href="/services">Nos services</Link>
                    <Link href="/">Travaux</Link>
                    <Link href="/">A propos de nous</Link>


                </div>
                <div className={style.nav__links_right}>
                    <Link href="/">Blog</Link>
                    <Link  href="/">Prendre contact</Link>

                </div>


            </div>

        </div>
    )
}