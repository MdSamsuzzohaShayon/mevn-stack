const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");



// https://graphql.org/graphql-js/basic-types/
// https://github.com/graphql/graphql-js



const PlayerType = new GraphQLObjectType({
    name: "Player",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString }
    })
});


// https://graphql.org/graphql-js/type/#graphqlobjecttype
const ClubType = new GraphQLObjectType({
    name: "Club",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        league: { type: GraphQLString }
        // players: {
        //     type: PlayerType,
        //     resolve(parent, args) {
        //         return "Return all player"
        //     }
        // }

    })
});



module.exports = { PlayerType, ClubType };