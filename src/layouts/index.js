import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import styled from 'styled-components'
import { TypographyStyle, GoogleFont } from 'react-typography'

const Body = styled.div `
  margin: 0 auto;
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>42 Company</title>
      <meta name='description' content='42company application' />
      <meta name='keywords' content='Answer to the Ultimate Question of Life, the Universe, and Everything' />
    </Helmet>
    <Navigation />
    <Body>
      {children()}
    </Body>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
