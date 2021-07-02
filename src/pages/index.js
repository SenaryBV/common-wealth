import React from 'react'
//import { StaticImage } from 'gatsby-plugin-image'
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/

import Layout from '../components/Layout'
import SEO from '../components/seo'

// components
import Hero from '../components/Hero'
import InfoBox from '../components/InfoBox'
import SiteSection from '../components/SiteSection'
import SectionHeader from '../components/SectionHeader'
import CtaCardWrapper from '../components/CtaCard/wrapper'
import IconGrid from '../components/IconGrid'
import MemberWrapper from '../components/MemberCard/wrapper'
import NewsSlider from '../components/NewsSlider'

// constants
import { HERO_HOMEPAGE } from '../components/Hero/constants'
import { IB_SOFTWARE, IB_HOW_IT_WORKS } from '../components/InfoBox/constants'
import { SH_GROWTH_STRATEGIES } from '../components/SectionHeader/constants'
import { CC_HOMEPAGE } from '../components/CtaCard/constants'
import { IG_INVESTMENTS } from '../components/IconGrid/constants'
import { PC_MEMBERS_INFO, PC_MEMBERS_HOMEPAGE } from '../components/MemberCard/constants'
import { NEWS_SLIDER } from '../components/NewsSlider/constants'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <SiteSection modifier="bg-hp">
        <Hero {...HERO_HOMEPAGE} />
      </SiteSection>
      <SiteSection>
        <InfoBox {...IB_SOFTWARE} />
      </SiteSection>
      <SiteSection>
        <SectionHeader {...SH_GROWTH_STRATEGIES} />
        <CtaCardWrapper ctaCards={CC_HOMEPAGE} />
      </SiteSection>
      <SiteSection>
        <MemberWrapper {...PC_MEMBERS_INFO} members={PC_MEMBERS_HOMEPAGE} />
      </SiteSection>
      <SiteSection>
        <NewsSlider {...NEWS_SLIDER} />
      </SiteSection>
      <SiteSection>
        <InfoBox {...IB_HOW_IT_WORKS} />
      </SiteSection>
    </Layout>
  )
}

export default IndexPage
