import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const $metafields = {
  "metafields": [
    {
    "key": "test_field_2",
    "namespace": "test field 2",
    "ownerId": "gid://shopify/Customer/5764961632450",
    "type": "product_reference",
    "value": "gid://shopify/Product/6871528440002"
    }
  ]
};

const UPDATE_USER_METAFIELD = gql`
  mutation metafieldsSet($metafields: [MetafieldsSetInput!]!) {
    metafieldsSet(metafields: $metafields) {
      metafields {
        key
        value
      }
      userErrors {
        field
        message
      }
    }
  }
`;

function getUser() {
  return (
    <Mutation mutation={UPDATE_USER_METAFIELD} variables={{ metafields: $metafields }}></Mutation>
  )
}

export default getUser;





// mutation updateFields{
//   metafieldsSet(metafields: [
//     {namespace: "test field 2", ownerId: "gid://shopify/Customer/5764961632450", type: "product_reference", key: "test_field_2", value: "gid://shopify/Product/6871528669378"}
//   ]) {
//     metafields {
//       key
//       value
//     }
//     userErrors {
//       field
//       message
//     }
//   }
// }



// query {
//   customer(id:"gid://shopify/Customer/5764961632450"){
//     email
//     metafield (namespace: "test field", key: "test_field"){
//      	value
// 		}
//   }
// }
