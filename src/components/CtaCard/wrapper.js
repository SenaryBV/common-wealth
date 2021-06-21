import React from 'react'
import CtaCard from '.'

const CtaCardWrapper = ({ ctaCards }) => {
  return (
    <div className="cta-card-wrapper">
      {ctaCards.map((props) => (
        <CtaCard key={props.title} {...props} />
      ))}
    </div>
  )
}

export default CtaCardWrapper
