import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

import { Container } from 'react-bootstrap'

const AboutUs = () => (
  <Layout>
    <Container>
      <SEO title="About Us" />
      <h1>About Us</h1>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default AboutUs
