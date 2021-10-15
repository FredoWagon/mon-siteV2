
import FadeTranslateTopWhenVisible from "../../effects/FadeTranslateTopWhenVisible";
import style from "../../../styles/blocs/index_page/servicesPopUpIndex.module.scss"


import ServicesPopUp from "../../ServicesPopUp";

export default function ServicesPopUpIndex() {

    return (
        <FadeTranslateTopWhenVisible tresholdOption={0} animation="middle_mark_green">
            <div className={style.servicesPopUpIndex__title}>
                <h2>Ce que nous faisons </h2>
            </div>
            <FadeTranslateTopWhenVisible tresholdOption={0} animation="slow">
            <ServicesPopUp/>
            </FadeTranslateTopWhenVisible>
        </FadeTranslateTopWhenVisible>
    )
}