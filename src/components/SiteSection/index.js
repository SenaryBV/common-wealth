import React from 'react'
import classNames from 'classnames'

const SiteSection = ({ modifier, children }) => {
  return (
    <section className={classNames('site-section', modifier && `site-section--${modifier}`)}>
      <div className="container">{children}</div>
    </section>
  )
}

export default SiteSection
