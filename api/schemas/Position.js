module.exports = `
  type Position {
    code: String!
    quantity: Int!
    totalBuyValue: Float!
    totalSellValue: Float
    acquiredAt: Date
    soldAt: Date
    stock: Stock
  }
`
