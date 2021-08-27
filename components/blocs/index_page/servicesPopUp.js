import {useInView} from "react-intersection-observer";
import FadeTranslateTopWhenVisible from "../../effects/FadeTranslateTopWhenVisible";

export default function ServicesPopUp() {



    return (
        <div>
            <FadeTranslateTopWhenVisible animation="middle">
                <h2>Ce que nous faisont</h2>
            </FadeTranslateTopWhenVisible>
            <FadeTranslateTopWhenVisible animation="slow">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet aperiam architecto asperiores beatae commodi, corporis distinctio enim expedita incidunt inventore iure labore neque perferendis perspiciatis provident quia sit soluta.</p>
            </FadeTranslateTopWhenVisible>
            <div>


            </div>

        </div>
    )
}