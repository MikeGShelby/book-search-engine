import gql from 'graphql-tag';

export const QUERY_BOOKS = gql`
  query allSavedBooks($username: String) {
    allSavedBooks(username: $username) {
        username
        savedBooks {
          title
        }
    }
  }
`;

export const QUERY_ME = gql`
    {
       me {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                title
                description
                image
            }
        }
    }
`;