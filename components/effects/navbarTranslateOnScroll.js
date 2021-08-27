import {useEffect, useRef, useState} from "react";
import style from "../../styles/effects/navbarTranslateOnScroll.module.scss"

export default function TranslateOnScroll(props) {

    const previousPosition = useRef(0)
    const [goingUp, setGoingUp] = useState(true)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handdleMenuSize = () => {
            if (mobileMenuOpen) {
                setTimeout(() => {
                    setMobileMenuOpen(false)
                }, 500)
            } else {
                setMobileMenuOpen(true)
            }
    }


    const handleScroll = () => {
        const currentPosition = window.scrollY
        if (currentPosition > 150 &&  window.innerWidth > 719) {
        if (previousPosition.current > currentPosition && !goingUp ) {
            setGoingUp(true)
        } else if (previousPosition.current < currentPosition && goingUp) {
            setGoingUp(false)
        }
        previousPosition.current = currentPosition
        }
    }

    useEffect(() => {
        if (mobileMenuOpen != props.isBurgerOpen) {
            handdleMenuSize()
        }
    },[props.isBurgerOpen])


    useEffect(() => {

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)

        }
    })


    return (
        <div className={`${style.navbar_top} ${!goingUp ? style.navbar_translate : ""} ${mobileMenuOpen ? style.burger_menu_size : "" }`}>
            {props.children}
        </div>
    )
}