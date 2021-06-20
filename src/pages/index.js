import * as React from 'react'
//import { StaticImage } from 'gatsby-plugin-image'
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Container } from 'react-bootstrap'
import Hero from '../components/Hero'
import { HERO_HOMEPAGE } from '../components/Hero/constants'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero {...HERO_HOMEPAGE} />
    <Container></Container>
  </Layout>
)

export default IndexPage
