import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer `
  background-color: #f2f2f2;
  padding: 35px 0;
  text-align: center;

  @media (max-width: 700px) {
    padding: 20px;
  }
`

const FooterHeader = styled.h3 `
  margin-bottom: 10px;
`

const FooterDescription = styled.h5 `
  margin-bottom: 0;
`

const Footer = () => (
  <FooterContainer>
    <FooterHeader>42Company</FooterHeader>
    <FooterDescription>(c)2017 42company corp.</FooterDescription>
  </FooterContainer>
)

export default Footer
