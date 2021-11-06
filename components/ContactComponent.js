import style from "../styles/components/contactComponent.module.scss"
import {useEffect, useState} from "react";
import {useRouter} from "next/router";


export default function ContactComponent(props) {


    const router = useRouter()

    const [name, setName] = useState('')
    const [nameValid, setNameValid] = useState(false)
    const [email, setEmail] = useState('')
    const [emailValid, setEmailValid] = useState(false)
    const [phone, setPhone] = useState('')
    const [phoneValid, setPhoneValid] = useState(false)
    const [message, setMessage] = useState('')
    const [messageValid, setMessageValid] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [formValid, setFormValid] = useState(false)
    const [activeErrorMessage, setActiveErrorMessage] = useState(false)
    const [errorElement, setErrorElement] = useState([])


    // Enregistrer les elements de message d'erreur pour chaque input
    useEffect(() => {
        document.body.classList.remove(`disapear`)
        const errorElements = document.querySelector('#contact_form').querySelectorAll('p')
        setErrorElement(Object.values(errorElements))
    },[])




    // S'active sur la modification des inputs
    const handdleValidation = (e) => {


        const element = e.target
        const inputName = e.target.name
        const inputValue = e.target.value

        const setInputValue = {
            name: setName,
            email: setEmail,
            phone: setPhone,
            message: setMessage
        }


        setInputValue[inputName](inputValue)

        inputValidation(element)
        const fieldValidationStatusList = [nameValid, messageValid, emailValid]

        setFormValid(!fieldValidationStatusList.includes(false))
    }

    // Affiche les messages d'erreur
    const displayErrorMessage = (e) => {
        const elementErrorMessageElement = e.target.parentNode.querySelector('p')
        errorElement.forEach((element) => {
            if (element === elementErrorMessageElement) {
                element.style.display="none"
            } else {
                element.style.display=""
            }
        })


        setActiveErrorMessage(false)

    }

    // Validation des inputs
    const inputValidation = (element) => {
        const elementName = element.name
        const elementValue = element.value.toLowerCase()

        switch (elementName) {
            case 'name':
                elementValue !== "" ? setNameValid(true) : setNameValid(false)
                break;
            case 'email':
                const mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                mailRegex.test(elementValue) ? setEmailValid(true) : setEmailValid(false)
                break;
            case 'message':
                elementValue !== "" ? setMessageValid(true) : setMessageValid(false)
                break;
            case'phone':
                const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/gmi;
                phoneRegex.test(elementValue) ? setPhoneValid(true) : setPhoneValid(false)

        }
    }

    // Soumet le formulaire
    const handleSubmit = (e) => {
        e.preventDefault()
        const submitBtn = e.currentTarget

        const data = {
            name,
            email,
            phone,
            message
        }
        allFieldValidation()



        if (formValid) {
            submitBtn.classList.add(`${style.contact_btn__loading}`)
            fetch("/.netlify/functions/netlifyContact", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((res) => {
                if (res.status === 200) {
                    console.log('Response succeeded!')
                    setSubmitted(true)
                    document.body.style.backgroundColor="black"
                    document.body.classList.add(`disapear`)



                    setTimeout(() => {
                        router.push("/contact/merci#merci_anchor")
                    }, 1000)

                }
            })
        } else {
            setActiveErrorMessage(true)
        }




    }

    const allFieldValidation = () => {
        const fieldValidationStatusList = [nameValid, messageValid, emailValid]
        setFormValid(!fieldValidationStatusList.includes(false))
        errorElement.forEach((element) => {
            element.style.display=""
        })
    }

    return (
        <div className={style.contact_component}>

            {props.customTitle &&
            <h2>{props.customTitle}</h2>
            }

            <form id="contact_form" >
                <div className={ `${nameValid ? style.field_valid : ""} ${style.contact_field}`}>
                    <label htmlFor="name">Votre nom <mark className={style.label__required}>*</mark></label>
                    <input onFocus={displayErrorMessage} value={name} onChange={handdleValidation} autoComplete="new-password"  type="text" name="name" id="name" placeholder=""/>
                    <p className={` ${style.input__validation__bad } ${ name !== "" && !nameValid ? style.active__error : ""}`}>Pas bien</p>
                    <span className={`${activeErrorMessage && name === "" ? style.active__empty_message : ""} `}>Veuillez renseigner votre nom</span>
                </div>
                <div className={`${emailValid ? style.field_valid : ""} ${style.contact_field} ${!emailValid && email !== ""  ? style.field_unvalid : ""}`}>
                    <label htmlFor="email">Email <mark className={style.label__required}>*</mark></label>
                    <input onFocus={displayErrorMessage} value={email} onChange={handdleValidation} autoComplete="new-password" type="text" name="email" id="email" placeholder=""/>
                    <p className={` ${style.input__validation__bad } ${email !== "" && !emailValid ? style.active__error : ""}`}>Votre Email n'est pas valide</p>
                    <span className={`${activeErrorMessage && email === "" ? style.active__empty_message : ""} `}>Veuillez renseigner votre email</span>
                </div>
                <div className={`${phoneValid ? style.field_valid : ""} ${style.contact_field} ${!phoneValid && phone !== "" ? style.field_unvalid : ""}`}>
                    <label className={style.label__optionnal} htmlFor="phone">Téléphone <mark className={style.label__optionnal}>optionnel</mark></label>
                    <input onFocus={displayErrorMessage} value={phone} onChange={handdleValidation}  type="text" name="phone" id="phone" placeholder=""/>
                    <p className={` ${style.input__validation__bad } ${ phone !== "" && !phoneValid ? style.active__error : ""}`}>Votre numéro n'est pas valide</p>
                </div>

                <div className={`${style.contact_field} ${messageValid ? style.field_valid : ""}`}>
                    <label htmlFor="message">Votre Message <mark className={style.label__required}>*</mark></label>
                    <textarea  onFocus={displayErrorMessage} value={message} onChange={handdleValidation} name="message" id="message" placeholder="Votre message..." cols="30" rows="10"/>
                    <span className={`${activeErrorMessage && message === "" ? style.active__empty_message : ""} `}>Veuillez écrire un message</span>
                </div>
                <button className={style.contact_submit_btn} type="submit"  onClick={(e)=>{handleSubmit(e)}} >
                    <p>Soumettre</p>
                    <span>
                        <img
                            src="/loading.svg" alt="loading circle"/>
                    </span>
                </button>
            </form>
        </div>
    )

}