import React from 'react'
import classNames from 'classnames'
import { FaTwitterSquare, FaLinkedin } from 'react-icons/fa'

export const MemberCard = ({ modifier, name, position, about, img, linkedin, twitter }) => {
  return (
    <div className={classNames('member-card', modifier && `member-card--${modifier}`)}>
      <div className="member-card__info">
        <h3 className="member-card__name">{name}</h3>
        <div className="member-card__position" dangerouslySetInnerHTML={{ __html: position }}></div>
        <div className="member-card__about" dangerouslySetInnerHTML={{ __html: about }}></div>
        <div className="member-card__links">
          <a href={twitter} target="_blank">
            <FaTwitterSquare size={30} color="#5FA071" />
          </a>
          <a href={linkedin} target="_blank">
            <FaLinkedin size={30} color="#5FA071" />
          </a>
        </div>
      </div>
      <div className="member-card__img">
        <img src={img} alt={name} />
      </div>
    </div>
  )
}

export default MemberCard
