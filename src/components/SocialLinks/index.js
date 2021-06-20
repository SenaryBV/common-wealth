import React from 'react'
import Icon from '../Icon'

const SocialLinks = ({ links }) => {
  return (
    <div className="social-links">
      {links.map(({ href, icon }) => (
        <a className="social-links__link" key={href} target="_blank" href={href}>
          <Icon {...icon} />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
