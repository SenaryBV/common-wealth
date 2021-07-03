import * as React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'

// components
import InfoBox from '../components/InfoBox'
import SiteSection from '../components/SiteSection'
import SectionHeader from '../components/SectionHeader'
import IconGrid from '../components/IconGrid'
import NewsSlider from '../components/NewsSlider'
import MemberSections from '../components/MemberCard/sections'

// constants
import { NEWS_SLIDER } from '../components/NewsSlider/constants'
import { SH_ABOUT_US } from '../components/SectionHeader/constants'
import { IB_THE_OPPORTUNITY } from '../components/InfoBox/constants'
import { IG_OUR_PARTNERS } from '../components/IconGrid/constants'
import { PC_MEMBERS_ABOUT_US } from '../components/MemberCard/constants'

const AboutUs = () => (
  <Layout>
    <SEO title="About Us" />
    <SiteSection>
      <SectionHeader {...SH_ABOUT_US} />
    </SiteSection>
    <MemberSections members={PC_MEMBERS_ABOUT_US} />
    <SiteSection modifier="green">
      <InfoBox {...IB_THE_OPPORTUNITY} />
    </SiteSection>
    <SiteSection>
      <NewsSlider {...NEWS_SLIDER} />
    </SiteSection>
  </Layout>
)

export default AboutUs
