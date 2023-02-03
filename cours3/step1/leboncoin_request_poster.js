class LeboncoinRequestPoster extends GenericRequestPoster {
  constructor(categoryId, text, pageSize) {
    super('https://api.leboncoin.fr/finder/search')
    this.pageSize = pageSize
    this.dataraw = {
      extend: true,
      filters: {
        category: { id: categoryId },
        enums: { ad_type:["offer"] },
        keywords: { text: text },
        location: {
          locations: [
            {
              locationType: "city",
              city: "lille"
            }
          ]
        }
      },
      limit: pageSize,
      limit_alu: 0,
      limit_sponsored: 1,
      sort_by: "time",
      sort_order: "desc"
    };
  }

  processRequest(page) {
    let dataraw = { offset: this.pageSize * page, ...this.dataraw };
    super.processRequest(dataraw, page)
  }
}
