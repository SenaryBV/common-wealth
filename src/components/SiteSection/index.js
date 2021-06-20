import React from 'react'
import classNames from 'classnames'

export const SiteSection = ({ modifier, children }) => {
  return (
    <div className={classNames('site-section', modifier && `site-section--${modifier}`)}>
      <div className="container">{children}</div>
    </div>
  )
}

export default SiteSection
