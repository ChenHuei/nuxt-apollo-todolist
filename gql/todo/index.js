import gql from 'graphql-tag'

export const GET_LIST = gql`
  query {
    list {
      title
    }
  }
`