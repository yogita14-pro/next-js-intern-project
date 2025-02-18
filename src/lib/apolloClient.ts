import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://store-jbzjyco1.saleor.cloud/graphql/',
  cache: new InMemoryCache(),
  
})

export default client;
