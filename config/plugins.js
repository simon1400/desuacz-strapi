module.exports = {
  meilisearch: {
    config: {
      product: {
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
      maxLimit: 20,
    }
  }
}
