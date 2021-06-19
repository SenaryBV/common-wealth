import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

import { Container } from 'react-bootstrap'

const HowItWorks = () => (
  <Layout>
    <Container>
      <SEO title="How it works" />
      <h1>How it works</h1>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default HowItWorks
