
const resolvers = {
  Entry: {
    getEntries(obj, args, context, info) {
      return context.db.Entry.findAll();
    },
  },
};

export default resolvers;
