import React from 'react'
import classNames from 'classnames'
import HeroStat from '../HeroStat'
import { Link } from '@reach/router'

const Hero = ({ modifier, title, descr, stats, cta }) => {
  return (
    <div className={classNames('hero', modifier && `hero--${modifier}`)}>
      <div className="hero__inner container">
        <h1 className="hero__title h1">{title}</h1>
        <p className="hero__descr">{descr}</p>
        {stats && (
          <div className="hero__stats">
            {stats.map((props) => (
              <HeroStat {...props} key={props.name} />
            ))}
          </div>
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
    </div>
  )
}

export default Hero
