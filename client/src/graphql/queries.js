/*
// TRIED WITH GRAPHQL APOLLO CLIENT BUT IT WAS NOT WORKING
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
*/


export const getClubs = async (state) => {
    try {
        state.isLoading = true;
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: `{
                    clubs{
                        id
                        name
                        league
                    }
                }`,
            }),
        };
        const response = await fetch("http://localhost:9000/graphql", options);
        console.log("Get all clubs - ", response);
        const text = await response.text();
        // console.log(text);
        const jsonRes = JSON.parse(text);
        state.isLoading = false;
        // console.log(jsonRes);
        return jsonRes.data.clubs;
    } catch (error) {
        console.log(error);
    }
}