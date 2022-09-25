import React from 'react'
import "./about.css"
import ME from '../../assets/me.jpg'
import {CgAwards} from 'react-icons'

const About = () => {
  return (
    <section id="about">
      <h5>Faire connaissance</h5>
      <h2>A propos de nous !</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
            <CgAwards className='about__icon'/>
              <h5>Experience</h5>
              <small>1 an d'experice !</small>
            </article>

            <article className='about__card'>
            <CgAwards className='about__icon'/>
              <h5>Experience</h5>
              <small>1 an d'experice !</small>
            </article>

            <article className='about__card'>
            <CgAwards className='about__icon'/>
              <h5>Experience</h5>
              <small>1 an d'experice !</small>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About