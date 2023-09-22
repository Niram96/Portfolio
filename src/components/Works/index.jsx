
import React from 'react';
import { useState } from 'react';
import '../../utils/styles/works.scss';

function Works ({id, title, picture, description, date, problematic, skills, link}) {
    const [isProblematicOpen, setProblematicOpen] = useState(false)
    const [isSkillsOpen, setSkillsOpen] = useState(false)
    const [isCodeOpen, setCodeOpen] = useState(false)

    return (
        <div className='work'>
            <h3>{title}</h3>
            <a href={picture}>
                <img src={picture} alt="Capture d'écran du site" />
            </a>
            <p className='work-description'>{description}</p>
            <p className='work-date'>{date}</p>

            <div className='work-problematic'>


                <button className='collapse-button' onClick={() => isProblematicOpen ? setProblematicOpen(false) : setProblematicOpen(true)}>
                    <h4>Problématiques rencontrées</h4>
                </button>

                    <p className={isProblematicOpen ? 'text-opening' : 'text-closing'}>{problematic}</p>
            </div>

            <div className='work-skills'>                
            
                <button className='collapse-button' onClick={() => isSkillsOpen ? setSkillsOpen(false) : setSkillsOpen(true)}>
                        <h4>Compétences développées</h4>
                </button>
                    <ul className={isSkillsOpen ? 'text-opening' : 'text-closing'}>
                        {skills.map((skill, index) => 
                            <li key={`work-skill-${id}-${index}`}>- {skill}</li>
                        )}
                    </ul>
            </div>

            <div className='work-code'>
            <button className='collapse-button' onClick={() => isCodeOpen ? setCodeOpen(false) : setCodeOpen(true)}>
                <h4 className=''>Code</h4>
            </button>
                <a className={isCodeOpen ? 'text-opening' : 'text-closing'} href={link}>Lien dépôt GitHub</a> 
            </div>
        </div>
    )
}

export default Works