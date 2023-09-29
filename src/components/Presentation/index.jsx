import React from 'react';
import '../../utils/styles/presentation.scss';
import presentationImg from '../../assets/presentation.webp';
import CV from '../../assets/CV.webp';
import cvIcon from '../../assets/icons/cv.jpg';

function Presentation () {
    return (
        <React.Fragment>
            <div className='presentation-img-text-cv'>
                <img fetchpriority="high" className='presentation-img' src={presentationImg} alt='Ordinateur et chiffres binaires'></img>
                <div className='presentation-text-and-cv'>
                    <p>
                        Développeur Web junior, souhaitant devenir développeur Full-Stack. <br/><br/>
                        Après des études scientifiques, je me suis réorienté dans l'informatique, domaine qui m'intéresse depuis mon plus jeune âge, notamment le monde du logiciel libre et la philosophie sur laquelle il repose.<br/><br/>
                        J'ai donc fait une formation Développeur Web sur OpenClassrooms pour avoir les bases du développement Web et continuer à approfondir mes connaissances.
                    </p>
                    <a className='oc-link' href='https://openclassrooms.com/fr/paths/717-developpeur-web'>Présentation de la formation</a>
                    <a className='cv' href={CV}>
                        Curriculum Vitae
                        <img src={cvIcon} alt='Logo CV'></img>
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Presentation;