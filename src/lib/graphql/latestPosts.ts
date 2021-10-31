import { gql } from '@urql/core'

export default gql`
  query ($owner: String!, $categoryId: ID!, $repo: String!, $limit: Int!) {
    repository(owner: $owner, name: $repo) {
      discussions(
        first: $limit,
        orderBy: {
          field: UPDATED_AT,
          direction: DESC
        }
        categoryId: $categoryId,
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
  }
`