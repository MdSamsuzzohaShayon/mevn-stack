export const addClub = async (state) => {
    try {
        state.isLoading = true;
        console.log(state.club.name);
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: `
                        mutation {
                            addClub(name: "${state.club.name}", league: "${state.club.league}"){
                                id
                                name
                                league
                        }
                    }
                    `
            }),
        };



        // query: `
        //         mutation CreateEvent($title: String!, $description: String!, $price: Float!, $date: String!){
        //             createEvent(eventInput: {title: $title, description: $description, price: $price, date: $date}) {
        //             _id
        //             title
        //             description
        //             date
        //             price
        //             creator {
        //                 _id
        //                 email
        //             }
        //             }
        //         }
        //         `,
        //     variables: {
        //         title,
        //         description,
        //         price,
        //         date
        //     }
        const response = await fetch("http://localhost:9000/graphql", options);
        console.log("Add new club - ", response);
        const text = await response.text();
        // console.log(text);
        const jsonRes = JSON.parse(text);
        state.isLoading = false;
        // console.log(jsonRes.data.addClub);
        return jsonRes.data.addClub;
    } catch (error) {
        console.log(error);
    }
}











export const updateClub = async (state, id) => {
    try {
        state.isLoading = true;
        // console.log(state.club.name);
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: `
                    mutation{
                        updateClub(id: "${id}", name: "${state.club.name}", league: "${state.club.league}"){
                            name
                            league
                        }
                    }
                    `
            }),
        };

        const response = await fetch("http://localhost:9000/graphql", options);
        console.log("Update Club - ", response);
        const text = await response.text();
        // console.log(text);
        const jsonRes = JSON.parse(text);
        state.isLoading = false;
        // console.log(jsonRes.data.addClub);
        // console.log(jsonRes);
        return jsonRes.data.updateClub;
    } catch (error) {
        console.log(error);
    }
}








export const deleteClub = async (state, id) => {
    try {
        state.isLoading = true;
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: `
                    mutation{
                        deleteClub(id: "${id}"){
                            id
                            name
                        }
                    }
                    `
            }),
        };

        const response = await fetch("http://localhost:9000/graphql", options);
        console.log("Delete Club - ", response);
        const text = await response.text();
        // console.log(text);
        const jsonRes = JSON.parse(text);
        state.isLoading = false;
        // console.log(jsonRes.data.addClub);
        // console.log(jsonRes);
        return jsonRes.data.deleteClub;
    } catch (error) {
        console.log(error);
    }
}