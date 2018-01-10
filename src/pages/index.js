import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import CompanyImg from '../images/img_42company.jpg'
import MissionImg from '../images/img_ourmission.jpg'
import SlideImg from '../images/img_slide.png'
import NetworkImg from '../images/img_42network.png'
import GatewayImg from '../images/img_42gateway.png'
import SungwonImg from '../images/img_sungwon_over.jpg'
import AmritaImg from '../images/img_amrita_over.jpg'
import NakulImg from '../images/img_nakul_over.jpg'
import JunaidImg from '../images/img_junaid_over.jpg'
import SeungImg from '../images/img_seung_over.jpg'
import HyunahImg from '../images/img_hyunah_over.jpg'
import JaeheeImg from '../images/img_jaehee_over.jpg'
import KyudeokImg from '../images/img_kyudeok_over.jpg'
import SeohyunImg from '../images/img_seohyun_over.jpg'
import HoseongImg from '../images/img_hoseong_over.jpg'
import GaeunImg from '../images/img_gaeun_over.jpg'
import YoosungImg from '../images/img_yoosung_over.jpg'

const SectionWrapper = styled.div `
  max-width: 1024px;
  margin: 0 auto;

  &[id^=nav]:before {
    display: block;
    content: " ";
    padding-top: 120px;
    margin-top: -120px;
    visibility: hidden;
  }
`

const CompanyImgSection = styled.img `
  width: 100%;
  height: auto;
  margin-top: 80px;
  margin-bottom: -13px;

  @media (max-width: 700px) {
    margin-top: 60px;
  }
`

const SloganSection = styled.section `
  background-color: #f2f2f2;
  color: #111111;
  padding: 70px 20px;
  text-align: center;

  @media (max-width: 550px) {
    padding: 50px 15px;

    h1 {
      font-size: 26px;
      font-weight: 700;
    }
  }
`

const SlogalContent = styled.h4 `
  max-width: 820px;
  margin: auto;
`

const MissionSection = styled.section `
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 80px 25px;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`

const MissionImage = styled.img `
  flex-basis: 40%;

  @media (max-width: 900px) {
    flex-basis: 100%;
  }
`

const MissionWrapper = styled.div `
  flex-basis: 60%;
  padding: 50px 30px 50px 80px;

  @media (max-width: 900px) {
    flex-basis: 100%;
    padding: 0;
  }
`

const Mission = styled.h4 `
  @media (min-width: 900px) {
    max-width: 450px;
  }
`

const WorkHeader = styled.h1 `
  text-align: center;
  padding: 80px 0 50px 0;
`

const WorkSection = styled.section `
  background-color: ${props => props.background};
  padding: 90px 25px;

  @media (max-width: 600px) {
    padding: 50px 25px;
  }
`

const WorkWrapper = styled.div `
  display: flex;
  flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const WorkImgWrapper = styled.div `
  flex-basis: 40%;

  @media (max-width: 600px) {
    height: 300px;
    width: 100%;
  }
`

const WorkImg = styled.div `
  width: 100%;
  min-height: 400px;
  background-image: url(${props => props.workImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 600px) {
    min-height: 250px;
  }
`

const WorkContent = styled.div `
  flex-basis: 60%;
  color: #ffffff;
  padding: 25px;

  @media (max-width: 600px) {
    padding: 0 0 25px 0;
  }
`

const LinkButton = styled.a `
  background-color: #ffffff;
  padding: 15px 0;
  border: none;
  border-radius: 10px;
  color: #111111;
  text-decoration: none;
  width: 165px;
  display: block;
  margin-top: 10px;
  text-align: center;

  &:focus {
    outline: 0;
  }
`

const TeamSection = styled.section `
  padding: 50px 25px;
  text-align: center;

  h1 {
    margin-bottom: 55px;
  }
`

const MemberContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 580px) {
    justify-content: space-around;
  }
`

const Member = styled.div `
  flex-basis: 22%;

  @media (max-width: 900px) {
    flex-basis: 30%;
  }

  @media (max-width: 580px) {
    flex-basis: 40%;
  }

  @media (max-width: 375px) {
    flex-basis: 100%;
  }
`

const MemberImage = styled.img `
  width: 80px;
  margin-bottom: 10px;
  filter: grayscale(100%);

  &:hover {
    filter: none;
  }
`

const MemberName = styled.h3 `
  white-space: nowrap;
  margin-bottom: 10px;
`


const IndexPage = () => (
  <div>
    <CompanyImgSection src={CompanyImg} />
    <SloganSection>
      <SectionWrapper>
        <h1>Experts on Middle-Eastern Tech Market</h1>
        <SlogalContent>We are an independent, owner-managed company. We have a dedicated team of professionals looking at analyzing your advertising needs and providing best solutions.</SlogalContent>
      </SectionWrapper>
    </SloganSection>
    <MissionSection id='nav_mission'>
      <MissionWrapper>
        <h2>Why India?</h2>
        <Mission>
          Indian Market is our fortay! We understand businesses, the brand ideologies and are
          equipped to offer you the Indian route to the same! We together with you clearly define
          objectives for the Indian market in essence and data both and work backwards to achieve
          the desired goal keeping in mind the Indian insights of the target audience.<br />
          Communication and Marketing works to achieve the same.<br />We have worked with many global brands and
          supported their establishment in India and they run successfully today with great results.
        </Mission>
      </MissionWrapper>
      <MissionWrapper>
        <MissionImage src={MissionImg} />
      </MissionWrapper>
    </MissionSection>
    <WorkHeader id='nav_work'>Our Works</WorkHeader>
    <WorkSection background='#7453E0'>
      <SectionWrapper>
        <WorkWrapper>
          <WorkImgWrapper>
            <WorkImg workImage={SlideImg} />
          </WorkImgWrapper>
          <WorkContent>
            <h2>SLIDE - Learn & Earn</h2>
            <h4>
              Read latest news, trendy and fun stories on the lock screen. You know what's better? It lets you earn that extra buck!<br /><br />
              Slide App helps you earn whether while sitting idle or traveling, just slide on the content pieces, You can also earn by sharing your own
              content on Slide Simply share interesting links you found online, stories that are unmissable and gripping! and when your post gets
              many reads and likes on Slide App we share the earnings accrued from it! So deliver your story to thousands of lock screens and make it viral!
            </h4>
            <LinkButton href='https://play.google.com/store/apps/details?id=company.fortytwo.slide.app' target='_blank'>Google Play</LinkButton>
          </WorkContent>
        </WorkWrapper>
      </SectionWrapper>
    </WorkSection>
    <WorkSection background='#383BA4'>
      <SectionWrapper>
        <WorkWrapper reverse>
          <WorkImgWrapper>
            <WorkImg workImage={NetworkImg} />
          </WorkImgWrapper>
          <WorkContent>
            <h2>42 Network</h2>
            <h4>
              42Company India Pvt Ltd is a fast growing online media company focusing on mobile Entertainment services in India. Founded by
              mobile industry veterans, privately funded, we are an independent, owner-managed company. We have a dedicated team of
              professionals looking at analyzing your advertising needs and providing best solutions.
            </h4>
            <LinkButton href='https://42network.in/' target='_blank'>Visit Site</LinkButton>
          </WorkContent>
        </WorkWrapper>
      </SectionWrapper>
    </WorkSection>
    <WorkSection background='#5262DA'>
      <SectionWrapper>
        <WorkWrapper>
          <WorkImgWrapper>
            <WorkImg workImage={GatewayImg} />
          </WorkImgWrapper>
          <WorkContent>
            <h2>42 Gateway</h2>
            <h4>
              Searching for broaden your business area to India & Middle east? We're the cult between new age technology and the global know
              how of leading innovative digital technologies with strength rested in the heart of our development team that have been the minds
              behind great global products & the Indian planning, advertising and strategy.<br />
              We offer our services to support brands/mobile apps to enter Indian market at best budgets and with high efficiency tools. Not
              only hand hold in consultancy but also execution end to end. We are your GATEWAY TO INDIA!!
            </h4>
            <LinkButton href='http://gateway.42.company/' target='_blank'>Visit Site</LinkButton>
          </WorkContent>
        </WorkWrapper>
      </SectionWrapper>
    </WorkSection>
    <TeamSection>
      <SectionWrapper id='nav_team'>
        <h1>Meet our team</h1>
        <MemberContainer>
          <Member>
            <MemberImage src={SungwonImg} />
            <MemberName>Sungwon Lee</MemberName>
            <h4>CEO, R&D Head</h4>
          </Member>
          <Member>
            <MemberImage src={AmritaImg} />
            <MemberName>Amrita Gujral</MemberName>
            <h4>India Marketing Head</h4>
          </Member>
          <Member>
            <MemberImage src={NakulImg} />
            <MemberName>Nakul Sethi</MemberName>
            <h4>India Mobile Head</h4>
          </Member>
          <Member>
            <MemberImage src={JunaidImg} />
            <MemberName>Junaid Malik</MemberName>
            <h4>Middle East Head</h4>
          </Member>
          <Member>
            <MemberImage src={SeungImg} />
            <MemberName>Seung Heo</MemberName>
            <h4>Developer<br />Chief Accountant</h4>
          </Member>
          <Member>
            <MemberImage src={HyunahImg} />
            <MemberName>Hyunah Cho</MemberName>
            <h4>Design Head<br />Party Planner</h4>
          </Member>
          <Member>
            <MemberImage src={JaeheeImg} />
            <MemberName>Jaehee Ko</MemberName>
            <h4>Developer<br />Thinker</h4>
          </Member>
          <Member>
            <MemberImage src={KyudeokImg} />
            <MemberName>Kyudeok Kim</MemberName>
            <h4>Developer<br />Project Manager</h4>
          </Member>
          <Member>
            <MemberImage src={SeohyunImg} />
            <MemberName>Seohyun Kwak</MemberName>
            <h4>Developer<br />Party Planner</h4>
          </Member>
          <Member>
            <MemberImage src={HoseongImg} />
            <MemberName>Hoseong Hwang</MemberName>
            <h4>Developer<br />Miner</h4>
          </Member>
          <Member>
            <MemberImage src={GaeunImg} />
            <MemberName>Gaeun Park</MemberName>
            <h4>Designer<br />Instagrammer</h4>
          </Member>
          <Member>
            <MemberImage src={YoosungImg} />
            <MemberName>Yoosung Hwang</MemberName>
            <h4>Developer<br />Gamer</h4>
          </Member>
        </MemberContainer>
      </SectionWrapper>
    </TeamSection>
  </div>
)

export default IndexPage
