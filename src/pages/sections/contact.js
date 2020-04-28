import React, { useState, createRef } from "react"
import Recaptcha from 'react-google-recaptcha'
import "./contact.scss"
import { encode } from "../../helpers/encode"

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY
if (typeof RECAPTCHA_KEY === 'undefined') {
    console.log(`
  Env var GATSBY_APP_SITE_RECAPTCHA_KEY is undefined! 
  Make sure to get a Recaptcha key at https://www.netlify.com/docs/form-handling/#custom-recaptcha-2-with-your-own-settings
  `)
}

const ContactForm = () => {

    const [state, setState] = useState({})
    const [fieldErrors, setFieldErrors] = useState({})
    const [apiMessage, setApiMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const recaptchaRef = createRef()

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })

        if (fieldErrors[e.target.name]) setFieldErrors({ ...fieldErrors, [e.target.name]: undefined })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (allFieldsAreOkay() === true) {

            const form = e.target
            const recaptchaValue = recaptchaRef.current.getValue()

            setLoading(true)

            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encode({
                    'form-name': form.getAttribute('name'),
                    'g-recaptcha-response': recaptchaValue,
                    ...state
                })
            })
                .then(() => {
                    setLoading(false)
                    setApiMessage('Received your message! Will get in touch with you soon!')
                })
                .catch(error => {
                    setLoading(false)
                    setApiMessage(error)
                })
        }
    }

    const allFieldsAreOkay = () => {
        const { name, email, message } = state

        let errors = { name: null, email: null, message: null }
        if (name === undefined || name === "") {
            errors.name = 'Please enter your name'
        }
        if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Please enter your email address in this format: zhenyang@example.com'
        }
        if (!message || message === "") {
            errors.message = "Please enter a message"
        }

        setFieldErrors(errors)

        return errors.name === null && errors.email === null && errors.message === null
    }

    return (
        <form
            method="post"
            onSubmit={handleSubmit}
            data-netlify="true"
            data-netlify-recaptcha="true"
            className="contact-form"
        >
            <noscript>
                <p>You have to enable Javascript for the form to work.</p>
            </noscript>
            <div className="contact-form-container">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="title">Let's chit-chat and connect!</div>
                        <div className="description">
                            I'm open to collaboration, or just simply talking about design and coding stuff. Find me on <a href="https://t.me/manapixels" target="_blank" rel="noopener noreferrer">Telegram</a> or send me a message with this contact form.
                        </div>
                    </div>
                    <div className="col-12 col-md-6 offset-md-1">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="input-group">
                                    <label>Your Name<span className="asterisk">*</span></label>
                                    <input type="text" name="name" onChange={handleChange} />
                                    {fieldErrors.name && <div className="error">{fieldErrors.name}</div>}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="input-group">
                                    <label>Your Email<span className="asterisk">*</span></label>
                                    <input type="email" name="email" onChange={handleChange} />
                                    {fieldErrors.email && <div className="error">{fieldErrors.email}</div>}
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="input-group">
                                    <label>Message<span className="asterisk">*</span></label>
                                    <textarea name="message" onChange={handleChange} />
                                    {fieldErrors.message && <div className="error">{fieldErrors.message}</div>}
                                </div>
                            </div>
                        </div>

                        {apiMessage !== '' && apiMessage}

                        <div className="mb-3">
                            <Recaptcha ref={recaptchaRef} sitekey={RECAPTCHA_KEY} />
                        </div>

                        <button type="submit" className="btn-square btn-hover-pulse" style={{ fontSize: '110%' }}>{loading ? <svg className="icon icon-spinner"><use xlinkHref="#icon-spinner"></use></svg> : 'Send'}</button>
                    </div>
                </div>
            </div>

            <svg className="hidden">
                <symbol id="icon-spinner" viewBox="0 0 32 32">
                    <path d="M32 16c-0.040-2.089-0.493-4.172-1.331-6.077-0.834-1.906-2.046-3.633-3.533-5.060-1.486-1.428-3.248-2.557-5.156-3.302-1.906-0.748-3.956-1.105-5.981-1.061-2.025 0.040-4.042 0.48-5.885 1.292-1.845 0.809-3.517 1.983-4.898 3.424s-2.474 3.147-3.193 4.994c-0.722 1.846-1.067 3.829-1.023 5.79 0.040 1.961 0.468 3.911 1.254 5.694 0.784 1.784 1.921 3.401 3.316 4.736 1.394 1.336 3.046 2.391 4.832 3.085 1.785 0.697 3.701 1.028 5.598 0.985 1.897-0.040 3.78-0.455 5.502-1.216 1.723-0.759 3.285-1.859 4.574-3.208 1.29-1.348 2.308-2.945 2.977-4.67 0.407-1.046 0.684-2.137 0.829-3.244 0.039 0.002 0.078 0.004 0.118 0.004 1.105 0 2-0.895 2-2 0-0.056-0.003-0.112-0.007-0.167h0.007zM28.822 21.311c-0.733 1.663-1.796 3.169-3.099 4.412s-2.844 2.225-4.508 2.868c-1.663 0.646-3.447 0.952-5.215 0.909-1.769-0.041-3.519-0.429-5.119-1.14-1.602-0.708-3.053-1.734-4.25-2.991s-2.141-2.743-2.76-4.346c-0.621-1.603-0.913-3.319-0.871-5.024 0.041-1.705 0.417-3.388 1.102-4.928 0.683-1.541 1.672-2.937 2.883-4.088s2.642-2.058 4.184-2.652c1.542-0.596 3.192-0.875 4.832-0.833 1.641 0.041 3.257 0.404 4.736 1.064 1.48 0.658 2.82 1.609 3.926 2.774s1.975 2.54 2.543 4.021c0.57 1.481 0.837 3.064 0.794 4.641h0.007c-0.005 0.055-0.007 0.11-0.007 0.167 0 1.032 0.781 1.88 1.784 1.988-0.195 1.088-0.517 2.151-0.962 3.156z"></path>
                </symbol>
            </svg>
        </form>
    )
}

export default ContactForm