// var axios = require('axios');
// var data = JSON.stringify({
//   query: `mutation metafieldsSet($metafields: [MetafieldsSetInput!]!) {
//   metafieldsSet(metafields: $metafields) {
//     metafields {
//       key
//       value
//     }
//     userErrors {
//       field
//       message
//     }
//   }
// }`,
//   variables: {"metafields":[{"key":"test_field_2","namespace":"test field 2","ownerId":"gid://shopify/Customer/5764961632450","type":"product_reference","value":"gid://shopify/Product/6871528440002"}]}
// });

// var config = {
//   method: 'post',
//   url: 'https://scratch-dawn.myshopify.com/admin/api/2021-10/graphql.json',
//   headers: {
//     'Authorization': 'Basic Mjk1NjEwNTc2NDI2YWJmY2MxMmViZDljNzg3MzNlZmE6c2hwcGFfMjI4NzYwYmY0N2UzODJmZmZmYzJlNzY4ZTViY2M4NGU=',
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });



function getUser() {
  return (
    <div>test</div>
  )
}

export default getUser;
