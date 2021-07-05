import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'

const Nav = ({ nav, modifier, onContact }) => {
  return (
    <ul className={classNames('site-nav', modifier && `site-nav--${modifier}`)}>
      {nav.map(({ name, link }) => (
        <li key={name} className="site-nav__item">
          {name === 'Contact' ? (
            <div className="site-nav__link" style={{ cursor: 'pointer' }} onClick={onContact}>
              {name}
            </div>
          ) : (
            <Link className="site-nav__link" to={link} activeClassName="is-active">
              {name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

export default Nav
