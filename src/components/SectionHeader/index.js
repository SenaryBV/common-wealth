import React from 'react'
import classNames from 'classnames'

const SectionHeader = ({ title, descr, hero }) => {
  return (
    <div className={classNames('section-header', hero && 'section-header--hero')}>
      {hero ? <h1 className="section-header__title">{title}</h1> : <h2 className="section-header__title">{title}</h2>}
      {descr && <p className="section-header__descr" dangerouslySetInnerHTML={{ __html: descr }}></p>}
    </div>
  )
}

export default SectionHeader
