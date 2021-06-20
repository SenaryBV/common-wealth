import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

import { Container } from 'react-bootstrap'

const InvestmentDisiplines = () => (
  <Layout>
    <Container>
      <SEO title="Investment Disiplines" />
      <h1>Investment Disiplines</h1>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default InvestmentDisiplines
