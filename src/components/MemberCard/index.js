import React from 'react'
import classNames from 'classnames'

export const MemberCard = ({ modifier, name, position, about, img }) => {
  return (
    <div className={classNames('member-card', modifier && `member-card--${modifier}`)}>
      <div className="member-card__info">
        <h3 className="member-card__name">{name}</h3>
        <div className="member-card__position">{position}</div>
        <div className="member-card__about">{about}</div>
      </div>
      <div className="member-card__img">
        <img src={img} alt={name} />
      </div>
    </div>
  )
}

export default MemberCard
