import { useInViewport } from 'react-in-viewport';
import '../../utils/styles/skills.scss'
import { useRef } from 'react';

function Skills ({id, title, languages, frameworks, various}) {
    const ref = useRef();
    const inViewport = useInViewport(ref)

    if (title !== "Divers") {
        return (
            <div ref={ref} className = {inViewport.enterCount >= 1 ? `skill ${id}` : 'skill'}>
                {console.log(inViewport.enterCount)}
                <h3>{title}</h3>
                <h4>Langages :</h4>
                <ul>
                    {languages.map((language, index) => 
                        <li key={`skill-language-${id}-${index}`}>{language.language}
                            <img src={language.picture} alt={`logo-${language.language}`}></img>
                        </li>
                    )}
                </ul>
                <h4>Frameworks :</h4>
                <ul>
                    {frameworks.map((framework, index) => 
                        <li key={`skill-framework-${id}-${index}`}>{framework.framework}
                            <img src={framework.picture} alt={`logo-${framework.framework}`}></img>
                        </li>
                    )}
                </ul>            
            </div>
        )
    }
    else {
        return (
            <div ref={ref} className = {inViewport.enterCount >= 1 ? `tool ${id}` : 'tool'}>
                <h3>{title}</h3>
                <ul>
                    {various.map((variousList, index) => 
                        <li key={`skill-various-${id}-${index}`}>{variousList.title}
                             <img src={variousList.picture} alt={`logo-${variousList.title}`}></img>
                        </li>
                    )}
                </ul>            
            </div>
        )
    }
}

export default Skills