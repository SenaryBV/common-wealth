import React, { useRef } from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'
import ReactTypeformEmbed from 'react-typeform-embed/lib/ReactTypeformEmbed'
import { isMobile } from 'react-device-detect'

const Nav = ({ nav, modifier }) => {
  let typeform = useRef(null)
  const onRequestEarly = () =>
    isMobile
      ? window.open('https://form.typeform.com/to/EjBWyJwr?typeform-medium=embed-snippet', '_blank')
      : typeform.typeform.open()

  return (
    <ul className={classNames('site-nav', modifier && `site-nav--${modifier}`)}>
      <ReactTypeformEmbed
        popup
        url="https://form.typeform.com/to/EjBWyJwr?typeform-medium=embed-snippet"
        ref={(tf) => (typeform = tf)}
      />
      {nav.map(({ name, link }) => (
        <li key={name} className="site-nav__item">
          {name === 'Contact' ? (
            <div className="site-nav__link" style={{ cursor: 'pointer' }} onClick={onRequestEarly}>
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
