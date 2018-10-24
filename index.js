import schema from './schema/index';

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
// const connectDb = require('./db/postgres');
const db = require('./db/Models/db');

const server = new ApolloServer({
  schema,
  context: ({req}) => ({
    db,
  }),
  playground: {
    endpoint: '/graphql',
    settings: {
      'editor.theme': 'light',
    },
  },
});

const app = express();
server.applyMiddleware({ app });

const port = 4000;


db.sequelize.sync().then(() => {
  // db.Entry.create({
  //   wineName: 'Awesome Wine',
  //   producer: 'Badass Winery',
  //   vintage: '2005',
  //   country: 'France',
  //   region: 'Cote Du Rhone',
  //   tags: ['rhone', 'red', 'big'],
  //   notes: 'complex red with fruit, leather and game',
  //   varietals: ['Syrah'],
  //   id: uuid(),
  //   userId: 'afdcba50-82c5-4564-a654-d0c3786a4335',
  // });
}).then(() => {
  app.listen({ port }, () => console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`));
});
