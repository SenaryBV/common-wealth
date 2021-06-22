import React, { useState, useEffect } from 'react'
import Icon from '../Icon'

const MobileMenu = ({ children }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList[open ? 'add' : 'remove']('mobile-menu-opened')
  })

  return (
    <>
      <button onClick={() => setOpen(!open)} className="mobile-menu-toggler">
        <Icon name={open ? 'close' : 'menu'} size={open ? [22, 22] : [32, 32]} />
      </button>
      {open && (
        <div className="mobile-menu">
          <div className="mobile-menu__inner container">{children}</div>
        </div>
      )}
    </>
  )
}

export default MobileMenu
