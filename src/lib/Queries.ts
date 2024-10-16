import gql from "graphql-tag"
export const ALLPRODUCTS_QUERY={
    query: gql`
          {
            products(first: 32, channel: "default-channel") {
              edges {
                node {
                  id
                  name
                  rating
                  description
                  pricing(address: { country: PL }) {
                    priceRange {
                      start {
                        tax {
                          amount
                        }
                        net {
                          amount
                        }
                        gross {
                          amount
                        }
                      }
                    }
                  }
                  thumbnail(size: 100) {
                    url
                  }
                  media {
                    type
                    url(size: 100)
                  }
                }
              }
            }
          }
        `
}
