/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
import TMHStripe from '../../themeetinghousetmhShared/lib/nodejs/TMHStripe';
export const handler = async (event) => {
  try {
    const products = await TMHStripe.listProducts();
    console.log({ products });
    return { products };
  } catch (error) {
    console.error({ error });
    return { products: [], error: 'Failed to fetch products from Stripe.' };
  }
};
