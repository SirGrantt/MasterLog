import uuid from 'uuid/v4';
import ResponseMessage from '../classes/ResponseMessage';

const resolvers = {
  RootQuery: {
    entries(obj, args, context, info) {
      return context.db.Entry.findAll();
    },
    entry(obj, { id }, context, info) {
      return context.db.Entry.find({
        where: {
          id,
        },
      }).then(e => e.dataValues).catch(ex => console.log(ex));
    },
    userEntries(onj, { userId }, context, info) {
      return context.db.Entry.findAll({
        where: {
          userId,
        },
      }).then(e => e)
        .catch(error => console.log(error));
    },
  },
  RootMutation: {
    addEntry(obj, args, context, info) {
      args.entry.id = uuid();
      context.db.Entry.create(args.entry);
      return new ResponseMessage(true, args.entry.id);
    },
  },
};

export default resolvers;
