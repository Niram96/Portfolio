import '../../utils/styles/footer.scss';
import gitHubLogo from '../../assets/icons/github.svg';
import linkedInLogo from '../../assets/icons/linkedin.png';


function Footer () {
    return (
        <footer>
            <div className='footer-links'>
                <a href='https://github.com/Niram96'>
                    <img src={gitHubLogo} alt='Logo GitHub'/>
                </a>
                <a href='https://linkedin.com/in/marin-desloges-2b0a2029a'>
                    <img src={linkedInLogo} alt='Logo LinkedIn'/>
                </a>
            </div>
            <a className="link-top" href='#top'>Haut de page</a>
            <p>Réalisé par Marin Desloges</p>
        </footer>
    )
}

export default Footer