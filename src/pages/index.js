import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/

import Layout from '../components/Layout'
import SEO from '../components/seo'

import Icon from '~components/Icon'

import { Container } from 'react-bootstrap'

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" />
      <StaticImage
        src="../images/gatsby-icon.png"
        layout="constrained"
        width={300}
        alt="A Gatsby logo"
        style={{ marginBottom: `1.45rem` }}
        placeholder="blurred"
      />
    </Container>
  </Layout>
)

export default IndexPage
