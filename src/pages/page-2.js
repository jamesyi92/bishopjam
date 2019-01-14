import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styled from 'styled-components'
import {
  Container,
  Row,
  Col,
  Button } from 'reactstrap';

import Layout from '../components/layout'
import SEO from '../components/seo'

import StyledBackgroundSection from '../components/bgHeader'

const StyledSection = styled.section`
  >div {
    margin: 90px 0px;
  }
`

const IntroCard = styled.div`
  .introcard-img{
    margin-bottom: 30px;
  }
  h3 {
    font-size: 24px;
  } 
  p{
    color: #666666;
  }
`

const SecondPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <StyledSection>
      <div>
        <Container>
          <Row className="justify-content-start">
            <Col md="10">
              <h3>This is Page 2, This thang loaded quick</h3>
            </Col>
          </Row>
        </Container>
      </div>
    </StyledSection>
    <StyledSection>
      <div>
        <Container>
          <Row>
            <Col md="3">
              <IntroCard>
                <div className="introcard-img">
                  <Img fluid={props.data.imageOne.childImageSharp.fluid} />
                </div>
                <h3>Card Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </IntroCard>
            </Col>
            <Col md="3">
              <IntroCard>
                <div className="introcard-img">
                  <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
                </div>
                <h3>Card Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </IntroCard>
            </Col>
            <Col md="3">
              <IntroCard>
                <div className="introcard-img">
                  <Img fluid={props.data.imageThree.childImageSharp.fluid} />
                </div>
                <h3>Card Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </IntroCard>
            </Col>
            <Col md="3">
              <IntroCard>
                <div className="introcard-img">
                  <Img fluid={props.data.imageFour.childImageSharp.fluid} />
                </div>
                <h3>Card Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </IntroCard>
            </Col>
          </Row>
        </Container>
      </div>
    </StyledSection>
    <StyledSection>
      <div>
        <Container>
          <Row>
            <Col md="3">
              <IntroCard>
                <div className="introcard-img">
                  <Img fluid={props.data.imageOne.childImageSharp.fluid} />
                </div>
                <h3>Card Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </IntroCard>
            </Col>
            <Col md="3">
              <IntroCard>
                <div className="introcard-img">
                  <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
                </div>
                <h3>Card Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </IntroCard>
            </Col>
            <Col md="3">
              <IntroCard>
                <div className="introcard-img">
                  <Img fluid={props.data.imageThree.childImageSharp.fluid} />
                </div>
                <h3>Card Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </IntroCard>
            </Col>
            <Col md="3">
              <IntroCard>
                <div className="introcard-img">
                  <Img fluid={props.data.imageFour.childImageSharp.fluid} />
                </div>
                <h3>Card Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </IntroCard>
            </Col>
          </Row>
        </Container>
      </div>
    </StyledSection>
  </Layout>
)

export default SecondPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "hs.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "np.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "sf.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFour: file(relativePath: { eq: "fs.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
