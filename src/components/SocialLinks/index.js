import React from 'react'

const SocialLinks = ({ links }) => {
  return (
    <div className="social-links">
      {links.map(({ name, icon, iconSize }) => (
        <a className="social-links__link" key={name}></a>
      ))}
    </div>
  )
}

export default SocialLinks
