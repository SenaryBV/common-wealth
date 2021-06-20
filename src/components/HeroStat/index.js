import React from 'react'

const HeroStat = ({ value, name, percents }) => {
  return (
    <div className="hero-stat">
      <div className="hero-stat__value">
        {value}
        {percents && <div className="hero-stat__percents">+x%</div>}
      </div>
      <div className="hero-stat__name">{name}</div>
    </div>
  )
}

export default HeroStat
