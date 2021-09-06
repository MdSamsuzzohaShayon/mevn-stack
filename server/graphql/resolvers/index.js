const { GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInputObjectType } = require("graphql");
const { ClubType, PlayerType } = require('../types');



// https://graphql.org/graphql-js/basic-types/
// https://github.com/graphql/graphql-js


// THIS IS LIKE POST REQUEST 
const addClub = {
    type: ClubType,
    args: {
        name: { type: GraphQLString },
        league: { type: GraphQLString },
    },
    resolve(parent, args) {
        return {
            name: args.name,
            league: args.league
        };
    }
}


const updateClub = {
    type: ClubType,
    args: {
        id: { type: GraphQLID },
        name: {type: GraphQLString}, 
        league: {type: GraphQLString}
    },
    resolve(parent, args) {
        // MONGO DB FIND BY ID AND UPDATE 
        return {
            id: args.id
        };
    }
}



const deleteClub = {
    type: ClubType,
    args: {
        id: { type: GraphQLID }
    },
    resolve(parent, args) {
        // MONGO DB FIND BY ID AND UPDATE 
        return {
            id: args.id
        };
    }
}




const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    fields: {
        addClub,
        updateClub,
        deleteClub
    }

});



// module.exports = new GraphQLSchema({ mutation: RootMutation });
module.exports = RootMutation;