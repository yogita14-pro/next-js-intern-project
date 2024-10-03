
// import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

import Products from "./components/@products/page";

// const client = new ApolloClient({
//   uri: 'https://dummyjson.com/products',
//   cache: new InMemoryCache()
// ,})

// client
//   .query({
//     query: gql`
//       query GetLocations {
//         locations {
//           id
//           name
//           description
//           photo
//         }
//       }
//     `,
//   })
//   .then((result) => console.log("result>>>>", result));
export default function Home() {
  // const client = new ApolloClient({
  //   uri: 'https://dummyjson.com/products',
  //   cache: new InMemoryCache()
  // ,})

  // client
  //   .query({
  //     query: gql`
  //       query GetLocations {
  //         locations {
  //           id
  //           name
  //           description
  //           photo
  //         }
  //       }
  //     `,
  //   })
  //   .then((result) => console.log("result>>>>", result));
  return (
      <main>
        <img style={{width: '100%', height: 'auto' }} src="https://crcdn01.adnxs-simple.com/creative20/p/6839/2024/8/5/59735871/329f45bf-50d0-48b1-9319-f25743916701.jpg"></img>
        <Products/>
      </main>
  );
}
