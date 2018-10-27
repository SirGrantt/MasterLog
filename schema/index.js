import { makeExecutableSchema } from 'graphql-tools';
import resolvers from '../resolvers/index';
import Types from '../types/index';

const RootQuery = `
  type RootQuery {
    entries: [Entry]
    entry(id: ID!): Entry
    userEntries(userId: ID!): [Entry]
  }
`;

const RootMutation = `
  type RootMutation {
    addEntry(entry: EntryInput!): ResponseMessage
  }
`;
// updateEntry(entry: EntryInput!): ResponseMessage
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
