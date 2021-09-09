import gql from 'graphql-tag';


export const GET_CLUBS = gql`
query getClubs {
    clubs {
      id
      name
      league
    }
  }
`;