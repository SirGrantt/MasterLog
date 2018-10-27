import { makeExecutableSchema } from 'graphql-tools';
import resolvers from '../resolvers/index';
import Types from '../types/index';

const RootQuery = `
  type RootQuery {
    entries: [Entry]
  }
`;

const RootMutation = `
  type RootMutation {
    addEntry(entry: EntryInput!): ResponseMessage
  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery,
    mutation: RootMutation
  }
`;

export default makeExecutableSchema({
  typeDefs: [
    SchemaDefinition, RootQuery, RootMutation, ...Types,
  ],
  resolvers,
});
