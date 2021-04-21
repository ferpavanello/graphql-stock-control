const { ApolloServer } = require('apollo-server')
const typeDefs = require('./api/schemas')
const resolvers = require('./api/resolvers');
const StockApi = require('./api/datasource/stock');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      stockAPI: new StockApi()
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
