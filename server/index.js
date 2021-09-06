require('dotenv').config({ path: './config/.env' });
const express = require('express');
const graphql = require('graphql');
const GraphQLSchema = graphql.GraphQLSchema;
const { graphqlHTTP } = require('express-graphql');

const RootQuery = require('./graphql/schema/index');
const RootMutation = require('./graphql/resolvers/index');



// module.exports = new GraphQLSchema({ mutation: RootMutation });




const app = express();


// https://github.com/graphql/express-graphql
app.use('/graphql', graphqlHTTP({
    schema: new GraphQLSchema({ mutation: RootMutation, query: RootQuery }),
    // rootValue: graphQLResolvers,
    graphiql: true
}));







const PORT = process.env.PORT || 9000;



app.listen(PORT, () => console.log('Server is running on: ' + PORT));