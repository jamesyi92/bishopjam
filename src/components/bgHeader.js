import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import {
  Container,
  Row,
  Col,
  Button } from 'reactstrap';


import Img from 'gatsby-image'

const StyledBackgroundSection = styled(Img)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%; 
`

const BgWrapper = styled.div`
  width: 100%;
  height: 70vh;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  .gatsby-image-wrapper{
    position: absolute!important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .header-content{
    z-index: 2;
    h1 {
      color: #ffffff;
      font-size: 60px;
      margin-bottom: 30px;
    }
    p{
      font-size: 24px;
      color: #ffffff;
      margin-bottom: 30px;
    }
  }
`

export const OrangeButton = styled(Button)`
  &&{
    background-color: #ff4700;
    border-color: #ff4700;
    padding: 16px 20px;
    font-size: 16px;
    text-transform: uppercase;
    font-family: 'Open Sans';
    line-height: 1.5;
    font-weight: 700;
    letter-spacing: 2px;
  }
`

const BackgroundSection = ({ className }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "testbg.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
     render={data => {
       // Set ImageData.
       const imageData = data.desktop.childImageSharp.fluid
       return (
          <BgWrapper>
              <Container className="header-content">
              <Row className="justify-content-left">
                <Col md="8">
                  <h1>Expert Insight For Your Biggest Decisions.</h1>
                  <p>The best choices are made when the most reliable information is secured. With an extensive network of global experts, we enhance the process of executive-level hiring, vetting new vendors, making acquisitions and other important tasks.</p>
                  <OrangeButton>Get Started</OrangeButton>
                </Col>
              </Row>
              </Container>
            <StyledBackgroundSection fluid={imageData} />
          </BgWrapper>
       )
     }
     }
    />
)


export default BackgroundSection