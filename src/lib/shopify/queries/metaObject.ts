export const getMetaObjectQuery = /* GraphQL */ `
   query getMetaObjectQuery($handle: String!, $type: String!) {
      metaobject(handle: { handle: $handle, type: $type }) {
         fields {
            key
            value
            references(first: 10) {
               nodes {
                  ... on Metaobject {
                     fields {
                        key
                        value
                        reference {
                           ... on MediaImage {
                              image {
                                 url
                                 width
                                 height
                                 altText
                              }
                           }
                        }
                     }
                  }
               }
            }
         }
      }
   }
`;
