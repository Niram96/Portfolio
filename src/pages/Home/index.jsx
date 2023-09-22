import React from 'react';
import Header from '../../components/Header';
import Presentation from '../../components/Presentation';
import Skills from '../../components/Skills';
import Works from '../../components/Works';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

import skillsData from '../../datas/skills.json';
import worksData from '../../datas/works.json';

import '../../utils/styles/home.scss'

function Home() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <section id='presentation-container'>
          <h2>Présentation</h2>
          <Presentation />
        </section>
        <section id='skills-container'>
          <h2>Compétences</h2>
          <div className='skills-div'>
            {skillsData.map((skill) =>
                <Skills 
                  id = {skill.id}
                  key = {`skill-${skill.id}`}
                  title = {skill.title}
                  languages = {skill.languages}
                  frameworks = {skill.frameworks}
                  various = {skill.various}
                />
            )}
          </div>
        </section>
        <section id='works-container'>
          <h2>Réalisations</h2>
          <div className='works-div'>
            {worksData.map((work) => 
              <Works 
                id = {work.id}
                key = {`work-${work.id}`}
                title = {work.title}
                picture = {work.picture}
                description = {work.description}
                date = {work.date}
                problematic = {work.problematic}
                skills = {work.skills}
                link = {work.link}
              />
            )}
          </div>
        </section>
        <section id='contact-container'>
          <h2>Contact</h2>
        <Contact />
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Home;