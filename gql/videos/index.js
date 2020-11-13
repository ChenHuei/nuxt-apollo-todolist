import gql from 'graphql-tag'

export const GET_VIDEOS = gql`
  query {
    videos {
      id
      title
      views
      author {
        title
        image
      }
    }
  }
`

export const POST_VIDEO = gql`
  mutation($title: String!) {
    post(title: $title) {
      id
      title
    }
  }
`

export const DELETE_VIDEO = gql`
  mutation($id: Int!) {
    delete(id: $id)
  }
`
