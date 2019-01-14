import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import './layout.scss'

const StyledFooter = styled.footer`
  p{
    color: #ffffff;
  }
  padding: 30px 0px;
  background-color: #333;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          {children}
        </div>
        <StyledFooter>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p className="mb-0">Some Footer &copy; Sterling</p>
              </div>
            </div>
          </div>
        </StyledFooter>
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
