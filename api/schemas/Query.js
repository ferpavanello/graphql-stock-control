module.exports = `
  type Query {
    users: [User]!
    user(id: ID!): User!
    positions(id: ID!): Position!
    stock(code: String!): Stock!
  }
`
