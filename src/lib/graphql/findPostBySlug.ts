import { gql } from '@urql/core'

export default gql`
  query ($query: String!) {
    search(query: $query, type: DISCUSSION, first: 1) {
      edges {
        node {
          ... on Discussion {
            title
            body
            createdAt
            updatedAt
            url

            category {
              id
              name
            }

            labels(first: 10) {
              edges {
                node {
                  id
                  name
                  color
                }
              }
            }

          }
        }
      }
    }
  }
`
