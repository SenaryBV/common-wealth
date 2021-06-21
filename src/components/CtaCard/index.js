import React from 'react'
import { Link } from '@reach/router'
import classNames from 'classnames'

const CtaCard = ({ modifier, cta, title, descr }) => {
  return (
    <Link className={classNames('cta-card', modifier && `cta-card--${modifier}`)} {...cta}>
      <h3 className="cta-card__title">{title}</h3>
      <p className="cta-card__descr">{descr}</p>
    </Link>
  )
}

export default CtaCard
