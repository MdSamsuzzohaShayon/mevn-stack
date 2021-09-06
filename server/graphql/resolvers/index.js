const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");
const { ClubType, PlayerType } = require('../types');
const Club = require('../../models/Club');



// https://graphql.org/graphql-js/basic-types/
// https://github.com/graphql/graphql-js


// THIS IS LIKE POST REQUEST 
const addClub = {
    name: "AddClub",
    type: ClubType,
    args: {
        name: { type: GraphQLString },
        league: { type: GraphQLString },
    },
    async resolve(parent, args) {
        // console.log(args.league);
        const new_club = new Club({
            name: args.name,
            league: args.league
        });
        // console.log(new_club);
        const save_club = await new_club.save();
        return save_club;
    }
}


const updateClub = {
    name: "UpdateClub",
    type: ClubType,
    args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        league: { type: GraphQLString }
    },
    async resolve(parent, args) {
        // MONGO DB FIND BY ID AND UPDATE 
        const updatedClub = await Club.findByIdAndUpdate(args.id, {
            name: args.name,
            league: args.league
        });
        // console.log(updatedClub);
        return updatedClub;
    }
}



const deleteClub = {
    type: ClubType,
    name: "DeleteClub",
    args: {
        id: { type: GraphQLID }
    },
    async resolve(parent, args) {
        // MONGO DB FIND BY ID AND UPDATE 
        const deletedClub = await Club.findByIdAndDelete(args.id);
        return deletedClub;
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







