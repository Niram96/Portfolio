import '../../utils/styles/footer.scss';
import gitHubLogo from '../../assets/icons/github-mark/github-mark-white.svg';

function Footer () {
    return (
        <footer>
            <a href='https://github.com/Niram96'>
                <img src={gitHubLogo} alt='Logo GitHub'/>
            </a>
            <a className="link-top" href='#top'>Haut de page</a>
            <p>Réalisé par Marin Desloges</p>
        </footer>
    )
}

export default Footer