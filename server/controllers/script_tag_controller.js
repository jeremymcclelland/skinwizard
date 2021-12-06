import axios from "axios";

export async function updateCustomerFields(shop, token) {
  const url = 'https://scratch-dawn.myshopify.com/admin/api/2021-10/graphql.json';
  const headers = {
    'Content-Type': 'application/json',
    'X-Shopify-Access-Token': token
  }

  const data = JSON.stringify({
    query: `mutation metafieldsSet($metafields: [MetafieldsSetInput!]!) {
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
  }`,
    variables: {"metafields":[{"key":"test_field_2","namespace":"test field 2","ownerId":"gid://shopify/Customer/5764961632450","type":"product_reference","value":"gid://shopify/Product/6871528833218"}]}
  });

  try {
    const result = await axios.post(url, data, { headers: headers });
    console.log(result.data);
    return result.data;
  } catch(err) {
    console.error(`error updating metafields: `, err);
  }
}

function getBaseUrl(shop) {
  return `https://${shop}`
}

function getGraphqlUrl(shop) {
  return `${getBaseUrl}/admin/api/2021-10/graphql.json`
}

