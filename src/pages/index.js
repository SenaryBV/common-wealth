import * as React from 'react'
//import { StaticImage } from 'gatsby-plugin-image'
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Container } from 'react-bootstrap'
import Hero from '../components/Hero'
import InfoBox from '../components/InfoBox'
import SiteSection from '../components/SiteSection'
import SectionHeader from '../components/SectionHeader'

// constants
import { HERO_HOMEPAGE } from '../components/Hero/constants'
import { IB_SOFTWARE, IB_HOW_IT_WORKS } from '../components/InfoBox/constants'
import { SH_GROWTH_STRATEGIES } from '../components/SectionHeader/constants'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero {...HERO_HOMEPAGE} />
    <SiteSection>
      <InfoBox {...IB_SOFTWARE} />
    </SiteSection>
    <SiteSection>
      <SectionHeader {...SH_GROWTH_STRATEGIES} />
    </SiteSection>
    <SiteSection>
      <InfoBox {...IB_HOW_IT_WORKS} />
    </SiteSection>
  </Layout>
)

export default IndexPage
