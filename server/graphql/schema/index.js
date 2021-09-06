const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = require("graphql");
const { ClubType, PlayerType } = require('../types');
const Club = require('../../models/Club');



// https://graphql.org/graphql-js/basic-types/
// https://github.com/graphql/graphql-js








// THIS IS LIKE GET REQUEST 
const clubs = {
    name: "club",
    type: GraphQLList(ClubType),
    async resolve(parent, args) {
        const clubs = await Club.find();
        // console.log(clubs);
        return clubs;
    }
}




const singleClub = {
    name: "SingleClub",
    type: ClubType,
    args: { id: {type: GraphQLID} },
    async resolve(parent, args) {
        const findClub = await Club.findOne({id: args.id});
        // console.log(findClub);
        return findClub;
    }
}



const players = {
    name: "players",
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
        singleClub,
        clubs,
        players
    }
});



module.exports = RootQuery;