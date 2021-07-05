import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'

// components
import Hero from '../components/Hero'
import InfoBox from '../components/InfoBox'
import SiteSection from '../components/SiteSection'

// constants
import { HERO_GROWTH_STRATEGIES } from '../components/Hero/constants'
import { IB_CAPITAL_INVESTMENTS, IB_TRADING, IB_LABS_DAO, IB_HOW_IT_WORKS } from '../components/InfoBox/constants'

const GrowthStrategies = () => {
  const [allStats, setAllStats] = useState(null)
  useEffect(() => {
    fetch('https://2oynjxpwi5.execute-api.us-east-2.amazonaws.com/prod/landing')
      .then((data) => data.json())
      .then((result) => setAllStats(result))
  }, [])

  HERO_GROWTH_STRATEGIES.stats = allStats
    ? [
        { value: allStats.members, name: 'Members', percents: false },
        {
          value: `$${(Math.round(100 * allStats.price.current) / 100).toLocaleString()}`,
          name: 'Common price',
          percents: Math.round(((allStats.price.current - allStats.price.start) / allStats.price.start) * 100.0),
        },
        {
          value: `$${(allStats.aum.current / 1000000).toFixed(1)}M`,
          name: 'Community AUM',
          percents: false,
        },
      ]
    : null

  return (
    <Layout>
      <SEO title="Growth Strategies'" />
      <SiteSection>
        <Hero {...HERO_GROWTH_STRATEGIES} />
      </SiteSection>
      {[IB_CAPITAL_INVESTMENTS, IB_TRADING, IB_HOW_IT_WORKS].map((props, index) => (
        <SiteSection key={index}>
          <InfoBox {...props} modifier={index} />
        </SiteSection>
      ))}
    </Layout>
  )
}

export default GrowthStrategies
