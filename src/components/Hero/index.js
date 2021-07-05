import React from 'react'
import HeroStat from '../HeroStat'
import { Link } from '@reach/router'
import FadeIn from 'react-fade-in'

const Hero = ({ title, descr, stats, cta, smallTitle }) => {
  return (
    <div className="hero">
      {smallTitle ? <p>{smallTitle}</p> : ''}
      <h1 className="hero__title h1">{title}</h1>
      <p className="hero__descr">{descr}</p>
      {stats && (
        <FadeIn>
          <div className="hero__stats">
            {stats.map((props) => (
              <HeroStat {...props} key={props.name} />
            ))}
          </div>
        </FadeIn>
      )}
      {cta && (
        <div className="hero__cta">
          {cta.map(({ name, attrs }) => (
            <Link key={name} {...attrs}>
              {name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Hero
