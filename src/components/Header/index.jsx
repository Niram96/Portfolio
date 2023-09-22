import '../../utils/styles/header.scss';

function Header () {
    return (
        <header>
            <h1>Marin Desloges - Développeur Web</h1>
            <nav>
                <ul>
                    <li><a href='#presentation-container'>Présentation</a></li>
                    <li><a href='#skills-container'>Compétences</a></li>
                    <li><a href='#works-container'>Travaux</a></li>
                    <li><a href='#contact-container'>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;