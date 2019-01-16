import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Search from "./Search/Search"

const SearchComp = (props) => (
  <StaticQuery
    query={graphql`
      query AlgoliaQuery {
	    site {
	      siteMetadata {
	        algolia {
	          appId
	          apiKey
	          indexName
	        }
	      }
	    }
	  }
    `}
    render={data => (
      <Search algolia={data.site.siteMetadata.algolia} />
    )}
  />
)



export default SearchComp
