import {useEffect, useRef, useState} from "react";
import style from "../../styles/effects/navbarTranslateOnScroll.module.scss"

export default function TranslateOnScroll(props) {

    const previousPosition = useRef(0)
    const [goingUp, setGoingUp] = useState(true)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isMobileView, setIsMobileView] = useState(false);

    const handdleMenuSize = () => {

        if (!mobileMenuOpen) {
            setMobileMenuOpen(true)
        } else {
            setMobileMenuOpen(false)
        }
    }


    const handleScroll = () => {
        const currentPosition = window.scrollY
        const viewPortWith = window.innerWidth
        if (currentPosition > 150 && viewPortWith > 719 ) {
            if (previousPosition.current > currentPosition && !goingUp ) {
                setGoingUp(true)
            } else if (previousPosition.current < currentPosition && goingUp) {
                setGoingUp(false)
            }
            previousPosition.current = currentPosition
        } else if (viewPortWith <= 719) {
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
        if (window.innerWidth <= 719) {
            setIsMobileView(true)
        }


        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)

        }
    })




    return (
        <div id="navBar_effect" className={`${style.navbar_top} ${!goingUp ? style.navbar_translate : ""} ${isMobileView ? style.navbar_top__mobile : ""} ${mobileMenuOpen ? style.burger_menu_size : "" }`}>
            {props.children}
        </div>
    )
}