import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://store-rvovlarb.saleor.cloud/graphql/',
  cache: new InMemoryCache(),
  
})

export default client;
