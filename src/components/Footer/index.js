import React from 'react'
import { Container } from 'react-bootstrap'
import Logo from '../Logo'
import Nav from '../Nav'
import MemberPortal from '../MemberPortal'
import SocialLinks from '../SocialLinks'
import MediaQueries from '../MediaQueries'
import { FOOTER_NAV, FOOTER_COPY } from '../Nav/constants'
import { SOCIAL_LINKS } from '../SocialLinks/constants'

const Footer = ({ siteTitle }) => {
  const { isMobile } = MediaQueries()

  return (
    <Container as="footer" className="footer">
      <div className="footer__section footer__section--top">
        <Logo title={siteTitle} />
        {!isMobile && <Nav nav={FOOTER_NAV} modifier="header" />}
        <MemberPortal />
      </div>
      <div className="footer__section footer__section--bottom">
        <Nav nav={FOOTER_COPY} modifier="footer" />
        <SocialLinks links={SOCIAL_LINKS} />
        <div className="footer__copy">© 2021 {siteTitle}. All Rights Reserved</div>
      </div>
    </Container>
  )
}

export default Footer
