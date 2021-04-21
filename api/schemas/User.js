module.exports = `
  scalar Date

  enum InvestorType {
    BEGINNER
    MODERATE
    ADVANCED
  }
  
  type User {
    name: String!
    email: String
    type: InvestorType
    positions: [Position]!
  }
`
