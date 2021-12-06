import Router from 'koa-router';
import { updateCustomerFields } from "../controllers/script_tag_controller";

const router = new Router({prefix:'/script_tag'})

router.get('/', async(ctx) => {
  ctx.body='get script tag';
});

router.get('/all', async(ctx) => {
  ctx.body='get all script tag';
});

router.post('/', async(ctx) => {
  console.log('create script tag: ', ctx.sessionFromToken);
  // Access token and shop available in ctx.state.shopify
  const { shop, accessToken } = ctx.sessionFromToken;
  await updateCustomerFields(shop, accessToken);

  ctx.body = "Updated Metafieldz";
});

export default router;
