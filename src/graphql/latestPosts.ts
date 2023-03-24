import { gql } from '@urql/core'

export default gql`
  query ($owner: String!, $repo: String!, $limit: Int!, $after: String) {
    repository(owner: $owner, name: $repo) {
      discussions(
        first: $limit,
        after: $after,
        orderBy: {
          field: CREATED_AT,
          direction: DESC
        }
      ) {
        pageInfo {
          startCursor
          hasNextPage
          endCursor
        }

        edges {
          cursor
          node {
            ... on Discussion {
              id
              databaseId
              title
              body
              createdAt
              updatedAt
            }
          }
        }
      }
    }
  }
`