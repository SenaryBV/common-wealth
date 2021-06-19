import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

import { Container } from 'react-bootstrap'

const GrowthStrategies = () => (
  <Layout>
    <Container>
      <SEO title="Growth Strategies'" />
      <h1>Growth Strategies</h1>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default GrowthStrategies
