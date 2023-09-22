import mailLogo from '../../assets/icons/envelope-solid.svg'
import phoneLogo from '../../assets/icons/phone-solid.svg';
import '../../utils/styles/contact.scss';

function Contact () {
    return (
            <ul className='contact-div'>
                <li><img src={mailLogo} alt='Courriel'/>marin.desloges@sfr.fr</li>
                <li><img src={phoneLogo} alt='Téléphone'/>06 31 10 03 63</li>
            </ul>
    )
}

export default Contact