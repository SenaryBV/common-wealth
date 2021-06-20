import React from 'react'
import { Link } from 'gatsby'
import { LogoSVG } from '../SVG'

const Logo = ({ title }) => {
  return (
    <Link className="site-logo" to="/">
      {LogoSVG}
      <span className="site-logo__name">{title}</span>
    </Link>
  )
}

export default Logo
