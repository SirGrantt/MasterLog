import { makeExecutableSchema } from 'graphql-tools';
import resolvers from '../resolvers/index';
import Types from '../types/index';

const RootQuery = `
  type RootQuery {
    getEntries: [Entry]
  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;

export default makeExecutableSchema({
  typeDefs: [
    SchemaDefinition, RootQuery, ...Types,
  ],
  resolvers,
});
