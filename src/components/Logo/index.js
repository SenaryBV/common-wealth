import React from 'react'
import Icon from '../Icon'
import { Link } from 'gatsby'

const Logo = () => {
  return (
    <Link className="site-logo" to="/">
      <Icon name="logo" size={[19, 27]} />
      <span className="site-logo__name">Commonwealth</span>
    </Link>
  )
}

export default Logo
