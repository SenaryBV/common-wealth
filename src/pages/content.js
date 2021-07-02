import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'

// components
import SiteSection from '../components/SiteSection'
import SectionHeader from '../components/SectionHeader'
import NewsPreview from '../components/NewsPreview'
import NewsFilter from '../components/NewsFilter'

// constants
import { SH_СONTENT } from '../components/SectionHeader/constants'
import { NEWS_PREVIEW } from '../components/NewsPreview/constants'

const Content = () => (
  <Layout>
    <SEO title="Content" />
    <SiteSection modifier="content-header">
      <SectionHeader {...SH_СONTENT} />
    </SiteSection>
    <SiteSection>
      <NewsPreview {...NEWS_PREVIEW} />
    </SiteSection>
    <SiteSection modifier="filter">
      <NewsFilter />
    </SiteSection>
  </Layout>
)

export default Content
