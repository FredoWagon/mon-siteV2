import {useEffect, useState} from "react";
import style from "../../styles/effects/speedFadeIn.module.scss";

export default function SpeedFadeIn( props) {

    const [transition, setTransition] = useState("")
    const [customClass, setCustomClass] = useState("")
    useEffect(() => {

        props.customClass ? setCustomClass(props.customClass) : ""

        setTimeout( () => {
            setTransition("isFadeIn");
        },0)
    }, )


    return (
        <div className={` ${style.speed_fade_in} ${style[customClass]}`}>
            <div className={` ${style.speed_fade_in__content} ${style[customClass]} ${style[transition]}`}>
                {props.children}
            </div>
        </div>

)
}