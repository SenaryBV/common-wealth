import React from 'react'
import { Link } from '@reach/router'

export const CtaCard = ({ cta, title, descr }) => {
  return (
    <Link className="cta-card" {...cta}>
      <h3 className="cta-card__title">{title}</h3>
      <p className="cta-card__descr">{descr}</p>
    </Link>
  )
}

export default CtaCard
