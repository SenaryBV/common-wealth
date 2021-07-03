import React from 'react'
import classNames from 'classnames'

const SinglePostSection = ({ modifier, children }) => {
  return (
    <section className={classNames('single-post-section', modifier && `single-post-section--${modifier}`)}>
      <div className="container">{children}</div>
    </section>
  )
}

export default SinglePostSection
