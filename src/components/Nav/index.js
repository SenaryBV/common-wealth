import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'

const Nav = ({ nav, id, modifier }) => {
  return (
    <ul className={classNames('site-nav', modifier && `site-nav--${modifier}`)}>
      {nav.map(({ name, link }) => (
        <li key={id + name} className="site-nav__item">
          <Link className="site-nav__link" to={link} activeClassName="is-active">
            {name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Nav
