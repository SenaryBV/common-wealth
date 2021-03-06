import React from 'react'

import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { StructuredText } from 'react-datocms'
import { FaAngleLeft } from 'react-icons/fa'

// Components
import SinglePostSection from '../components/SinglePostSection'
import Hero from '../components/Hero'
import NewsSlider from '../components/NewsSlider'

// constants
import { NEWS_SLIDER } from '../components/NewsSlider/constants'
import { isMobile } from 'react-device-detect'

const single = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.datoCmsArticle.title} />
      <SinglePostSection style={{ paddingTop: '0px', paddingBottom: '0px' }}>
        <Link
          to="/content"
          style={{ fontWeight: 700, fontSize: 16, color: '#5FA071', display: 'flex', alignItems: 'center' }}
        >
          <FaAngleLeft style={{ marginRight: 10 }} />
          Back
        </Link>
      </SinglePostSection>
      <SinglePostSection modifier="content-header">
        <Hero
          title={data.datoCmsArticle.title}
          descr={[data.datoCmsArticle.date, ' | ', data.datoCmsArticle.author]}
          smallTitle=""
          stats=""
          cta=""
        />
      </SinglePostSection>
      <SinglePostSection style={{ padding: '0px' }}>
        <div className="news-card__img" style={{ height: 'auto' }}>
          <img src={data.datoCmsArticle.featureImage.url} alt={data.datoCmsArticle.title} />
        </div>
      </SinglePostSection>
      <SinglePostSection>
        <div
          style={{
            maxWidth: isMobile ? '100%' : '736px',
            display: 'flex',
            justifyContent: 'center',
            margin: 'auto',
            whiteSpace: 'pre-wrap',
          }}
        >
          <div
            style={{
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '28px',
            }}
            dangerouslySetInnerHTML={{ __html: data.datoCmsArticle.bodyNode.childMarkdownRemark.html }}
          />
        </div>
      </SinglePostSection>
      <SinglePostSection>
        <NewsSlider {...NEWS_SLIDER} />
      </SinglePostSection>
    </Layout>
  )
}

export default single

export const query = graphql`
  query($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      id
      title
      author
      date
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
`
