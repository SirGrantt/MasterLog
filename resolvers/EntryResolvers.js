import uuid from 'uuid/v4';
import ResponseMessage from '../classes/ResponseMessage';

const resolvers = {
  RootQuery: {
    getEntries(obj, args, context, info) {
      return context.db.Entry.findAll();
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
