module.exports = {
  meilisearch: {
    config: {
      host: "http://localhost:7700",
      apiKey: process.env.MEILISEARCH_TOKEN,
      product: {
        indexName: process.env.MEILISEARCH_PREFIX+'product',
        transformEntry({ entry }) {
          return {
            ...entry,
            categoryTitles: entry.categories.map(item => item.title),
          }
        },
        settings: {
          filterableAttributes: ['categoryTitles'],
          sortableAttributes: ['price'],
          searchableAttributes: [
            'title',
            'categoryTitles',
            "price",
            'slug'
          ],
        },
      }
    }
  },
  graphql: {
    enabled: true,
    config: {
      defaultLimit: 50,
      depthLimit: 50,
      maxLimit: 50,
    }
  }
}
