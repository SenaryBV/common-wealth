import React, { useRef } from 'react'
import Logo from '../Logo'
import Nav from '../Nav'
import MemberPortal from '../MemberPortal'
import SocialLinks from '../SocialLinks'
import { useMediaQueries } from '../Hooks'
import ReactTypeformEmbed from 'react-typeform-embed/lib/ReactTypeformEmbed'
import { isMobile as isMobile2 } from 'react-device-detect'

// constants
import { FOOTER_NAV, FOOTER_COPY } from '../Nav/constants'
import { SOCIAL_LINKS } from '../SocialLinks/constants'

const Footer = ({ siteTitle }) => {
  const { isMobile } = useMediaQueries()
  let typeform = useRef(null)
  const onContact = () => {
    console.log('hi')

    isMobile2
      ? window.open('https://form.typeform.com/to/EjBWyJwr?typeform-medium=embed-snippet', '_blank')
      : typeform.typeform.open()
  }

  return (
    <footer className="footer container">
      <ReactTypeformEmbed
        popup
        url="https://form.typeform.com/to/EjBWyJwr?typeform-medium=embed-snippet"
        ref={(tf) => (typeform = tf)}
      />
      <div className="footer__section footer__section--top">
        <Logo title={siteTitle} />
        {!isMobile && <Nav nav={FOOTER_NAV} modifier="header" onContact={onContact} />}
        <MemberPortal />
      </div>
      <div className="footer__section footer__section--bottom">
        <Nav nav={FOOTER_COPY} modifier="footer" onContact={onContact} />
        <SocialLinks links={SOCIAL_LINKS} />
        <div className="footer__copy">© 2021 {siteTitle}. All Rights Reserved</div>
      </div>
    </footer>
  )
}

export default Footer
