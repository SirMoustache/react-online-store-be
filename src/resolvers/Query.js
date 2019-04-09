const Query = {
  async users(parent, args, ctx, info) {
    const users = await ctx.db.query.users();
    return users;
  },
  async shopItems(parent, args, ctx, info) {
    const shopItems = await ctx.db.query.shopItems();
    return shopItems;
  }
};

module.exports = Query;
