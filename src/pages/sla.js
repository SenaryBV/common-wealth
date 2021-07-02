import * as React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'

// components
import Hero from '../components/Hero'
import InfoBox from '../components/InfoBox'
import SiteSection from '../components/SiteSection'
import MsgBox from '../components/MsgBox'
import NewsSlider from '../components/NewsSlider'

// constants
import { HERO_SLA } from '../components/Hero/constants'
import {
  IB_SLA_1,
  IB_SLA_2,
  IB_SLA_3,
  IB_SLA_4,
  IB_SLA_5,
  IB_SLA_6,
  IB_SLA_7,
  IB_SLA_8,
} from '../components/InfoBox/constants'
import { NEWS_SLIDER } from '../components/NewsSlider/constants'

const SLA = () => (
  <Layout>
    <SEO title="SLA" />
    <SiteSection modifier="bg-sla">
      <Hero {...HERO_SLA} />
    </SiteSection>
    <SiteSection modifier="sm">
      <MsgBox>
        Decentralized technologies represent a new paradigm for coordination technology and unlock new models for
        positive sum economies and pro-social innovation.
      </MsgBox>
    </SiteSection>
    {[IB_SLA_1, IB_SLA_2].map((props, index) => (
      <SiteSection modifier="green" key={index}>
        <InfoBox {...props} modifier={index % 2 && 'reverse'} />
      </SiteSection>
    ))}
    {[IB_SLA_3, IB_SLA_4, IB_SLA_5].map((props, index) => (
      <SiteSection key={index}>
        <InfoBox {...props} modifier={index % 2 && 'reverse'} />
      </SiteSection>
    ))}
    <SiteSection modifier="sm">
      <MsgBox>Out of Senary Ventures we formed Senary Commonwealth, a tokenized Web3 Innovation Community.</MsgBox>
    </SiteSection>
    {[IB_SLA_6, IB_SLA_7, IB_SLA_8].map((props, index) => (
      <SiteSection modifier="green" key={index}>
        <InfoBox {...props} modifier={index % 2 && 'reverse'} />
      </SiteSection>
    ))}
    <SiteSection>
      <NewsSlider {...NEWS_SLIDER} />
    </SiteSection>
  </Layout>
)

export default SLA
