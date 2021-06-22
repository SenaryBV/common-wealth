import React from 'react'
import classNames from 'classnames'
import Logo from '../Logo'
import Nav from '../Nav'
import MobileMenu from '../MobileMenu'
import MemberPortal from '../MemberPortal'
import SocialLinks from '../SocialLinks'
import { useMediaQueries, useWindowScroll } from '../Hooks'

// constants
import { HEADER_NAV } from '../Nav/constants'
import { SOCIAL_LINKS } from '../SocialLinks/constants'

const Header = ({ siteTitle }) => {
  const { scrolled } = useWindowScroll()
  const { isDesktop, isTabletOrMobile, isMobile } = useMediaQueries()

  return (
    <header className={classNames('header', scrolled && `header--scrolled`)}>
      <div className="header__inner container">
        <Logo title={siteTitle} />
        {isDesktop && <Nav nav={HEADER_NAV} modifier="header" />}
        <div className="header__left">
          {!isMobile && <MemberPortal />}
          {isTabletOrMobile && (
            <MobileMenu>
              <div className="mobile-menu__section">
                <Nav nav={HEADER_NAV} modifier="mobile" />
                {isMobile && <MemberPortal />}
              </div>
              <div className="mobile-menu__section">
                <SocialLinks links={SOCIAL_LINKS} />
              </div>
            </MobileMenu>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
