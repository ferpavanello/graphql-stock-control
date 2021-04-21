const { ApolloServer } = require('apollo-server')
const typeDefs = require('./api/schemas')
const resolvers = require('./api/resolvers')

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
