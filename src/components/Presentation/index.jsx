import React from 'react';
import '../../utils/styles/presentation.scss';
import presentationImg from '../../assets/monitor.webp';
import CV from '../../assets/CV.webp';

function Presentation () {
    return (
        <React.Fragment>
            <div className='presentation-img-text-cv'>
                <img className='presentation-img' src={presentationImg} alt='Ordinateur et chiffres binaires'></img>
                <div className='presentation-text-and-cv'>
                    <p>
                        Développeur Web junior, souhaitant devenir développeur Full-Stack. <br/><br/>
                        Après des études scientifiques, je me suis réorienté dans l'informatique, domaine qui m'intéresse depuis le plus jeune âge, notamment le monde du logiciel libre et de la philosophie sur laquelle il répose.<br/><br/>
                        J'ai donc fait une formation Développeur Web sur OpenClassrooms pour avoir les bases du développement Web et continuer à approfondir mes connaissances.
                    </p>
                    <a href={CV}>Curriculum Vitae</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Presentation;