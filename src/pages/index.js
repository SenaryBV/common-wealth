import * as React from 'react'
//import { StaticImage } from 'gatsby-plugin-image'
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Container } from 'react-bootstrap'
import Hero from '../components/Hero'
import InfoBox from '../components/InfoBox'
import SiteSection from '../components/SiteSection'

// constants
import { HERO_HOMEPAGE } from '../components/Hero/constants'
import { HOMEPAGE_SOFTWARE, HOMEPAGE_HOW_IT_WORKS } from '../components/InfoBox/constants'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero {...HERO_HOMEPAGE} />
    <SiteSection>
      <InfoBox {...HOMEPAGE_SOFTWARE} />
    </SiteSection>
    <SiteSection>
      <InfoBox {...HOMEPAGE_HOW_IT_WORKS} />
    </SiteSection>
  </Layout>
)

export default IndexPage
