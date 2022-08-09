import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3500)
    }, [])

    return (
        <>
            <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t', ' ', 'M','e']} idx={15} />
                </h1>
                <p>I'm an ambitious fullstack developer looking for a role in an established IT company with the opportunity to work with the latest technologies on challeging and diverse projects.
                </p>
                <p>I'm curious and confident, and perpetually working on improving my chops one problem at a time.</p>
                <p>To describe myslef in a sentence that would be familu oriented, movie and music lover and tech intrigued</p>
            </div>


            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color='skyblue' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faNodeJs} color='green' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color='red' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                </div>
            </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About