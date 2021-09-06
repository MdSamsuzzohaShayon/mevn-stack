const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");
const { ClubType, PlayerType } = require('../types');



// https://graphql.org/graphql-js/basic-types/
// https://github.com/graphql/graphql-js








// THIS IS LIKE GET REQUEST 
const club = {
    type: ClubType,
    resolve(parent, args) {
        return { name: "Some name", league: "Some league" }
    }
}



const players = {
    type: PlayerType,
    args: { name: { type: GraphQLString } },
    resolve(parent, args) {
        return {
            result: { name: args.name }
        }
    }
}



const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        club,
        players
    }
});



module.exports = RootQuery;