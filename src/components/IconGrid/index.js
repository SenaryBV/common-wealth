import React from 'react'
import classNames from 'classnames'

const IconGrid = ({ modifier, title, icons }) => {
  return (
    <div className={classNames('icon-grid', modifier && `icon-grid--${modifier}`)}>
      <h3 className="icon-grid__title">{title}</h3>
      <ul className="icon-grid__container">
        {icons.map(({ url, alt }) => (
          <li key={alt} className="icon-grid__item">
            <img className="icon-grid__img" src={url} alt={alt} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IconGrid
