module.exports = {
  Query: {
    stock: async (root, args, { dataSources }) => {
      const stock = await dataSources.stockAPI.getStockByCode(args.code)
      return {
        code: args.code,
        price: stock.regularMarketPrice,
        priceYDA: stock.previousClose,
        todayVariation: stock.variation
      }
    }
  }
}
