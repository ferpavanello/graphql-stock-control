const { gql } = require('apollo-server')
const User = require('./User')
const Position = require('./Position')
const Stock = require('./Stock')
const Query = require('./Query')

module.exports = gql `
  ${User}
  ${Position}
  ${Stock}
  ${Query}
`
