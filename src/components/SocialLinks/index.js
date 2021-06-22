import React from 'react'

const SocialLinks = ({ links }) => {
  return (
    <div className="social-links">
      {links.map(({ id, url }) => (
        <a className={`social-links__${id}`} key={id} title={id} target="_blank" href={url}></a>
      ))}
    </div>
  )
}

export default SocialLinks
