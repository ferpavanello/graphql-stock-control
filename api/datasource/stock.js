
const { RESTDataSource } = require('apollo-datasource-rest')

class StockApi extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = 'https://query1.finance.yahoo.com/v7/finance/chart/'
  }

  calculateVariation (price, oldPrice) {
    const variation = ((price * 100) / oldPrice) - 100
    return variation.toFixed(2)
  }

  async getStockByCode (code) {
    const apiResponse = await this.get(`${code}?interval=5m`)
    const responsedStock = apiResponse.chart.result[0].meta
    return {
      ...responsedStock,
      variation: this.calculateVariation(responsedStock.regularMarketPrice, responsedStock.previousClose)
    }
  }
}

module.exports = StockApi
