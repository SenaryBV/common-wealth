import React from 'react'
import classNames from 'classnames'
import { Link } from '@reach/router'

const InfoBox = ({ modifier, title, descr, cta, img }) => {
  return (
    <div className={classNames('info-box', modifier && `info-box--${modifier}`)}>
      <div className="info-box__main">
        {title && <h2 className="info-box__title h2">{title}</h2>}
        <div className="info-box__descr" dangerouslySetInnerHTML={{ __html: descr }}></div>
        {cta && cta.length > 0 && (
          <div className="info-box__cta">
            {cta.map(({ name, attrs }) => (
              <Link key={name} {...attrs}>
                {name}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="info-box__img">
        <img src={img} alt={title} />
      </div>
    </div>
  )
}

export default InfoBox
