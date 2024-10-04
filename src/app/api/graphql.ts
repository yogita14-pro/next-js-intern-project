import { ApolloServer } from 'apollo-server-micro';

const typeDefs= `#graphql
    type Book{
        title: String
        author: String
    }
    type Query{
        book: [Book]
    }
`
const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

const resolvers= {
    Query: {
      books: () => books,
    },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false
  }
}

export default apolloServer.createHandler({ path: '/api/graphql' });
