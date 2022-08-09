import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import './index.scss'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3500)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'outlook',
            'templateId',
            refForm.current,
            'userToken'
        )
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        )
    }
    
    return (
        <>
            <div className=' container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','M','e']} idx={15} />
                    </h1>
                    <p>
                        I'm interested in freelance/job opportunities - especially ambitious or large projects. However, if you have other requests or questions, don't hesitate to let me know using the form below either.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='Send' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-tab'>
                    Richard Ogunyemi,
                    <br />
                    Nigeria,
                    <br />
                    Afunbiowo Housing Estate, Oke Aro <br />
                    Akure <br />
                    <span>the_boogey@outlook.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[7.2690, 5.1965]} zoom={15}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={[7.2690, 5.1965]}>
                            <Popup>Richard lives here</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact