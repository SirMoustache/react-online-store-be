const Mutations = {
  async createUser(parent, args, ctx, info) {
    const user = await ctx.db.mutation.createUser(
      {
        data: { ...args }
      },
      info
    );

    return user;
  },
  async createShopItem(parent, args, ctx, info) {
    const shopItem = await ctx.db.mutation.createShopItem(
      {
        data: { ...args }
      },
      info
    );

    return shopItem;
  }
};

module.exports = Mutations;
