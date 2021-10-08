import style from  "../../../styles/blocs/index_page/TheyTrustUs.module.scss"
import Image from 'next/image'
import medTandem from '../../../public/logo-medtandem.png'

import logoTest from '../../../public/logotest1.png'
import logoTest2 from '../../../public/logotest2.png'
import logoTest3 from '../../../public/logotest3.png'

export default function TheyTrustUs() {

    return (
        <div className={style.trust_bloc__container}>
            <div className={style.trust_bloc}>
                <h5>Ils nous font confiance</h5>
                <div className={style.trust_items__container}>
                    <div className={style.trust_items}>
                        <Image
                            objectFit="contain" src={medTandem}/>
                    </div>
                    <div className={style.trust_items}>
                        <Image
                            objectFit="contain" src={logoTest}/>
                    </div>
                    <div className={style.trust_items}>
                        <Image
                            objectFit="contain" src={logoTest2}/>
                    </div>
                    <div className={style.trust_items}>
                        <Image
                            objectFit="contain" src={logoTest3}/>
                    </div>





                </div>
            </div>
        </div>

    )
}