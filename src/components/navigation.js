import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const NavigationContainer = styled.nav `
  position: fixed;
  z-index: 100;
  background-color: white;
  width: 100%;
  height: 80px;
  padding: 0 50px;

  @media (max-width: 700px) {
    padding: 0 25px;
    height: 60px;
  }
`

const NavigationWrapper = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;
`

const Logo = styled.h2 `
  cursor: default;
  line-height: 80px;
  margin-bottom: 0;
  align-self: flex-start;

  @media (max-width: 700px) {
    font-size: 20px;
    line-height: 60px;
  }
`

const AnchorLink = styled.a `
  text-decoration: none;
  line-height: 80px;
  align-self: center;
  color: #111111;
  font-size: 18px;

  @media (max-width: 700px) {
    line-height: 60px;
    display: ${props => !props.contact && 'none'};
  }
`

const Navigation = () => (
  <NavigationContainer>
    <NavigationWrapper>
      <Logo>42 Company</Logo>
      <AnchorLink href='#nav_mission'>Our Mission</AnchorLink>
      <AnchorLink href='#nav_work'>Works</AnchorLink>
      <AnchorLink href='#nav_team'>Team</AnchorLink>
      <AnchorLink href='mailto:contact@42.company' contact>Contact us</AnchorLink>
    </NavigationWrapper>
  </NavigationContainer>
)

export default Navigation
