import React from 'react'

const MobileMenu = ({ children }) => {
  return (
    <div className="mobile-menu">
      <div className="container">{children}</div>
    </div>
  )
}

export default MobileMenu
