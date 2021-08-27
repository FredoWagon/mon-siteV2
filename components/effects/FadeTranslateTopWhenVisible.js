import {useInView} from "react-intersection-observer";
import {useEffect} from "react";
import style from "../../styles/effects/fadeTranslateTopWhenVisible.module.scss"

export default function FadeTranslateTopWhenVisible(props) {
    const {ref, inView, entry} = useInView({
        threshold: 1,
    })

    const option = {
        slow: style.slow_entering,
        middle: style.middle_entering,
        fast: style.fast_entering
    }


    return (
        <div ref={ref} className={`${style.beforeEnteringStyle} ${inView ? option[props.animation] : ""}`}>
           {props.children}
        </div>
    )
}