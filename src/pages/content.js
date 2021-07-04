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
import { useStaticQuery, graphql } from 'gatsby'
import { truncate } from '../components/NewsCard'

const Content = () => {
  const query = useStaticQuery(graphql`
    query MyQuery3 {
      allDatoCmsArticle {
        nodes {
          id
          date
          title
          articleSlug
          author
          featureImage {
            url
          }
          bodyNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  `)

  const result = query.allDatoCmsArticle.nodes[0]

  const preview = {
    label: 'article',
    date: result.date,
    author: result.author,
    title: result.title,
    descr: truncate(result.bodyNode.childMarkdownRemark.html, 200),
    cta: {
      name: 'Read More',
      attr: {
        to: '/content/' + result.articleSlug,
      },
    },
    src: result.featureImage.url,
  }

  return (
    <Layout>
      <SEO title="Content" />
      <SiteSection modifier="content-header">
        <SectionHeader {...SH_СONTENT} />
      </SiteSection>
      <SiteSection>
        <NewsPreview {...preview} />
      </SiteSection>
      <SiteSection modifier="filter">
        <NewsFilter />
      </SiteSection>
    </Layout>
  )
}

export default Content
