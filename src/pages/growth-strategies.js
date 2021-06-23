import * as React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'

// components
import Hero from '../components/Hero'
import InfoBox from '../components/InfoBox'
import SiteSection from '../components/SiteSection'

// constants
import { HERO_GROWTH_STRATEGIES } from '../components/Hero/constants'
import { IB_CAPITAL_INVESTMENTS, IB_TRADING, IB_LABS_DAO, IB_HOW_IT_WORKS } from '../components/InfoBox/constants'

const infoBoxes = [IB_CAPITAL_INVESTMENTS, IB_TRADING, IB_LABS_DAO, IB_HOW_IT_WORKS]

const GrowthStrategies = () => (
  <Layout>
    <SEO title="Growth Strategies'" />
    <SiteSection>
      <Hero {...HERO_GROWTH_STRATEGIES} />
    </SiteSection>
    {infoBoxes.map((props, index) => (
      <SiteSection>
        <InfoBox {...props} modifier={index % 2 && 'reverse'} />
      </SiteSection>
    ))}
  </Layout>
)

export default GrowthStrategies
