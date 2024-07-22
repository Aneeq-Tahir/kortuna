import productFragment from '../fragments/product';

export const getProductQuery = /* GraphQL */ `
   query getProduct($handle: String!) {
      product(handle: $handle) {
         ...product
      }
   }
   ${productFragment}
`;

export const getProductsQuery = /* GraphQL */ `
   query getProducts($sortKey: ProductSortKeys, $reverse: Boolean, $query: String) {
      products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {
         edges {
            node {
               ...product
            }
         }
      }
   }
   ${productFragment}
`;

export const getProductMetaFieldsQuery = /* GraphQL */ `
   query getProductMetaFields($handle: String!, $key: String!) {
      product(handle: $handle) {
         metafields(identifiers: { key: $key, namespace: "custom" }) {
            references(first: 10) {
               edges {
                  node {
                     ... on Metaobject {
                        fields {
                           value
                        }
                     }
                  }
               }
            }
         }
      }
   }
`;

export const getProductRecommendationsQuery = /* GraphQL */ `
   query getProductRecommendations($productId: ID!) {
      productRecommendations(productId: $productId) {
         ...product
      }
   }
   ${productFragment}
`;
