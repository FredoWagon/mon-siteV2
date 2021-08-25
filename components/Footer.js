import style from '../styles/components/footer.module.scss'
import Image from 'next/image'
import logo from "../public/logo.svg";
import instagram from "../public/instagram.svg";
import facebook from "../public/facebook.svg";
import flickr from "../public/flickr.svg";
import Link from 'next/link';

export default function Footer() {

    return (
        <div className={style.footer}>
            <div className={style.footer__top}>
                <p>Nous libérons nos clients pour qu'ils voient grand avec leur marque.</p>
                <div className={style.footer__sitemap}>
                    <div className={style.sitemap_item}>
                        <Link href="#" >Nos services</Link>
                        <Link href="#">Travaux</Link>
                        <Link href="#">About</Link>
                    </div>
                    <div className={style.sitemap_item}>
                        <Link href="#" >Contact</Link>
                        <Link href="#" >Politique de confidentialité</Link>
                    </div>

                </div>

            </div>
            <div className={style.footer__middle}>
                <div className={style.footer__mail}>
                    <p>Pour les nouvelles demandes commerciales :</p>
                    <Link href="/">fedde.leg@gmail.com</Link>
                </div>
                <div className={style.footer__social_links}>
                        <span>
                            <Image alt="facebook_logo" src={facebook}/>
                            <Link href="/">FaceBook</Link>
                        </span>
                    <span>
                            <Image alt="instagram_logo" src={instagram}/>
                            <Link href="/">Instagram</Link>
                        </span>
                    <span>
                            <Image alt="flickr_logo" src={flickr}/>
                            <Link href="/">Flickr</Link>
                        </span>
                </div>
                <div className={style.footer__adress}>
                    <p>L'Hertimate</p>
                    <p>9 Rue Jeanne Jugan</p>
                    <p>35000 Rennes</p>
                </div>
            </div>
            <div className={style.footer__bottom}>
                <Image src={logo}/>

                <h1>pokoù Web</h1>
            </div>
        </div>
    )
}


/* NOTES
* Pensez qu'il ne faut qu'un seul H1 par page !
* adresse n'est pas bonne !
* */