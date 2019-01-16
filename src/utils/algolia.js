// src/utils/algolia.js
const pageQuery = `{
  allSitePage {
    edges {
      node {
        # try to find a unique id for each node
        # if this field is absent, it's going to
        # be inserted by Algolia automatically
        # and will be less simple to update etc.
        objectID: id
        component
        path
        componentChunkName
        jsonName
        internal {
          type
          contentDigest
          owner
        }
      }
    }
  } 
}`

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.allSitePage.edges.map(({ node }) => node), // optional
    indexName: 'Pages', // overrides main index name, optional
  },
];

module.exports = queries