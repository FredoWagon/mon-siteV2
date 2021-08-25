import {useEffect, useState} from "react";
import style from "../../styles/effects/speedFadeIn.module.scss";

export default function SpeedFadeIn( {children}) {

    const [transition, setTransition] = useState("")
    useEffect(() => {
        setTimeout( () => {
            setTransition("isFadeIn");
        },0)
    }, [])


    return (
        <div className={` ${style.speed_fade_in} ${style[transition]}`}>
            {children}
        </div>
)
}